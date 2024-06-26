/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPlugins([
  nextConfig,

  {
    i18n: {
      locales: ["it", "en"],
      defaultLocale: "it",
      localeDetection: false,
    },
  },
  {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.pexels.com",
        },
      ],
    },
  },
  // {
  //   async headers() {
  //     return [
  //       {
  //         // Apply these headers to all routes in your application.
  //         source: "/:path*",
  //         headers: securityHeaders,
  //       },
  //     ];
  //   },
  // },

  // withBundleAnalyzer,
]);
