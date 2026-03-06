// pages/sitemap.xml.js

const site = "https://cofactory.it";

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">       

       <url>
         <loc>${site}</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>

       <url>
         <loc>${site}/cerchi-un-partner</loc>
         <changefreq>monthly</changefreq>
         <priority>0.9</priority>
       </url>

       <url>
         <loc>${site}/stories</loc>
         <changefreq>monthly</changefreq>
         <priority>0.8</priority>
       </url>

       <url>
         <loc>${site}/en</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>

       <url>
         <loc>${site}/en/cerchi-un-partner</loc>
         <changefreq>monthly</changefreq>
         <priority>0.9</priority>
       </url>

       <url>
         <loc>${site}/en/stories</loc>
         <changefreq>monthly</changefreq>
         <priority>0.8</priority>
       </url>

     </urlset>
   `;
}

function SiteMap() {}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
