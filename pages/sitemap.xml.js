const BASE_URL = "https://cofactory.it";

const pages = [
  {
    it: "/",
    en: "/en",
  },
  {
    it: "/cerchi-un-partner",
    en: "/en/find-a-partner",
  },
  {
    it: "/stories",
    en: "/en/stories",
  },
];

const generateSiteMap = () => {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
  >
    ${pages
      .map((page) => {
        return `
          <url>
            <loc>${BASE_URL}${page.it}</loc>

            <xhtml:link
              rel="alternate"
              hreflang="it"
              href="${BASE_URL}${page.it}"
            />

            <xhtml:link
              rel="alternate"
              hreflang="en"
              href="${BASE_URL}${page.en}"
            />

            <xhtml:link
              rel="alternate"
              hreflang="x-default"
              href="${BASE_URL}${page.it}"
            />
          </url>
        `;
      })
      .join("")}
  </urlset>
  `;
};

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
