import fs from "node:fs/promises";
import crypto from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");
const maxWidth = Number.parseInt(process.env.IMAGE_MAX_WIDTH || "2560", 10);
const minSavingsRatio = Number.parseFloat(process.env.IMAGE_MIN_SAVINGS || "0.02");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const manifestPath = path.join(publicDir, ".image-optimization-cache.json");
const recordCurrentOnly = process.argv.includes("--record-current");
const settingsHash = crypto
  .createHash("sha256")
  .update(JSON.stringify({ maxWidth, minSavingsRatio, version: 1 }))
  .digest("hex");

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        return walk(fullPath);
      }

      return supportedExtensions.has(path.extname(entry.name).toLowerCase())
        ? [fullPath]
        : [];
    })
  );

  return files.flat();
}

function formatBytes(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  const units = ["KB", "MB", "GB"];
  let value = bytes / 1024;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  return `${value.toFixed(value >= 10 ? 1 : 2)} ${units[unitIndex]}`;
}

function hashBuffer(buffer) {
  return crypto.createHash("sha256").update(buffer).digest("hex");
}

async function loadManifest() {
  try {
    const rawManifest = await fs.readFile(manifestPath, "utf8");
    const manifest = JSON.parse(rawManifest);

    if (manifest.settingsHash === settingsHash && manifest.files) {
      return manifest;
    }
  } catch {
    // Missing or invalid cache: rebuild it from the next successful run.
  }

  return {
    settingsHash,
    files: {},
  };
}

async function saveManifest(manifest) {
  const sortedFiles = Object.fromEntries(
    Object.entries(manifest.files).sort(([a], [b]) => a.localeCompare(b))
  );

  await fs.writeFile(
    manifestPath,
    `${JSON.stringify(
      {
        settingsHash,
        generatedAt: new Date().toISOString(),
        files: sortedFiles,
      },
      null,
      2
    )}\n`
  );
}

async function optimizeImage(filePath, manifest) {
  const original = await fs.readFile(filePath);
  const originalSize = original.byteLength;
  const relativePath = path.relative(rootDir, filePath);
  const originalHash = hashBuffer(original);

  if (manifest.files[relativePath]?.hash === originalHash) {
    return {
      filePath,
      optimized: false,
      cached: true,
      originalSize,
      optimizedSize: originalSize,
      savings: 0,
    };
  }

  if (recordCurrentOnly) {
    manifest.files[relativePath] = { hash: originalHash };

    return {
      filePath,
      optimized: false,
      recorded: true,
      originalSize,
      optimizedSize: originalSize,
      savings: 0,
    };
  }

  const extension = path.extname(filePath).toLowerCase();
  const image = sharp(original, { failOn: "none" }).rotate();
  const metadata = await image.metadata();

  let pipeline = image;

  if (metadata.width && metadata.width > maxWidth) {
    pipeline = pipeline.resize({
      width: maxWidth,
      withoutEnlargement: true,
    });
  }

  if (extension === ".jpg" || extension === ".jpeg") {
    pipeline = pipeline.jpeg({
      quality: 82,
      mozjpeg: true,
      progressive: true,
    });
  } else if (extension === ".png") {
    pipeline = pipeline.png({
      compressionLevel: 9,
      effort: 10,
      palette: true,
      quality: 90,
    });
  } else if (extension === ".webp") {
    pipeline = pipeline.webp({
      quality: 82,
      effort: 6,
    });
  }

  const optimized = await pipeline.toBuffer();
  const savings = originalSize - optimized.byteLength;
  const savingsRatio = savings / originalSize;

  if (savings <= 0 || savingsRatio < minSavingsRatio) {
    manifest.files[relativePath] = { hash: originalHash };

    return {
      filePath,
      optimized: false,
      originalSize,
      optimizedSize: originalSize,
      savings: 0,
    };
  }

  const tempPath = `${filePath}.sharp-tmp`;
  await fs.writeFile(tempPath, optimized);
  await fs.rename(tempPath, filePath);
  manifest.files[relativePath] = { hash: hashBuffer(optimized) };

  return {
    filePath,
    optimized: true,
    originalSize,
    optimizedSize: optimized.byteLength,
    savings,
  };
}

const files = await walk(publicDir);
const results = [];
const manifest = await loadManifest();

for (const filePath of files) {
  try {
    results.push(await optimizeImage(filePath, manifest));
  } catch (error) {
    results.push({
      filePath,
      optimized: false,
      error,
      originalSize: 0,
      optimizedSize: 0,
      savings: 0,
    });
  }
}

await saveManifest(manifest);

const optimized = results.filter((result) => result.optimized);
const failed = results.filter((result) => result.error);
const cached = results.filter((result) => result.cached);
const recorded = results.filter((result) => result.recorded);
const originalTotal = results.reduce((total, result) => total + result.originalSize, 0);
const optimizedTotal = results.reduce((total, result) => total + result.optimizedSize, 0);
const totalSavings = originalTotal - optimizedTotal;

for (const result of optimized) {
  const relativePath = path.relative(rootDir, result.filePath);
  console.log(
    `${relativePath}: ${formatBytes(result.originalSize)} -> ${formatBytes(
      result.optimizedSize
    )} (${formatBytes(result.savings)} saved)`
  );
}

if (failed.length > 0) {
  console.warn(`\nSkipped ${failed.length} file(s) Sharp could not process:`);

  for (const result of failed) {
    console.warn(`- ${path.relative(rootDir, result.filePath)}: ${result.error.message}`);
  }
}

console.log(
  `\nOptimized ${optimized.length}/${files.length} images. Total: ${formatBytes(
    originalTotal
  )} -> ${formatBytes(optimizedTotal)} (${formatBytes(totalSavings)} saved).`
);

if (cached.length > 0) {
  console.log(`Skipped ${cached.length} unchanged image(s) already in the Sharp cache.`);
}

if (recorded.length > 0) {
  console.log(`Recorded ${recorded.length} current image hash(es) without recompressing.`);
}
