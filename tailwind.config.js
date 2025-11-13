/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      images: {
        formats: ["image/avif", "image/webp"],
        domains: ["www.cofactory-eight.vercel.app"],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
        // NON scrivere unoptimized: true
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        italic: ["Raleway Italic", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        regular: ["Raleway Regular", "sans-serif"],
        tactico: ["Tactito Grunge", "sans-serif"],
      },
      screens: {
        xs: "360px",
        "2xs": "375px",
        sm: "390px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1500px",
        // => @media (min-width: 1536px) { ... }
        "2xla": "1800px",
        // => @media (min-width: 1680px) { ... }
        fxl: "1920px",
        // => @media (min-width: 1920px) { ... }

        "3xl": "2560px",
        // => @media (min-width: 2560px) { ... }
        "4xl": "3840px",
        // => @media (min-width: 3840px) { ... }
      },
    },
    colors: {
      pink: "#bb5471",
      second: "#368b90",
      third: "#1b1b1c",
      white: "#ffffff",
      yellow: "#daa444",
      trabsparent: "transparent",
      black: "#000000",
    },
  },
  plugins: [],
};
