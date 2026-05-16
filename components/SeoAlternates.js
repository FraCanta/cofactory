const SITE_URL = "https://cofactory.it";

const localizedPaths = {
  home: {
    it: "/",
    en: "/en",
  },
  stories: {
    it: "/stories",
    en: "/en/stories",
  },
  partner: {
    it: "/cerchi-un-partner",
    en: "/en/cerchi-un-partner",
  },
  privacy: {
    it: "/privacy-policy",
    en: "/en/privacy-policy",
  },
  cookie: {
    it: "/cookie-policy",
    en: "/en/cookie-policy",
  },
};

const localeMeta = {
  it: {
    ogLocale: "it_IT",
    hreflang: "it",
  },
  en: {
    ogLocale: "en_US",
    hreflang: "en",
  },
};

function absoluteUrl(path) {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export default function SeoAlternates({ page, locale = "it" }) {
  const currentLocale = locale === "en" ? "en" : "it";
  const paths = localizedPaths[page];

  if (!paths) return null;

  const currentUrl = absoluteUrl(paths[currentLocale]);
  const alternateLocale = currentLocale === "it" ? "en" : "it";

  return (
    <>
      <link rel="canonical" href={currentUrl} />
      <link
        rel="alternate"
        hrefLang={localeMeta.it.hreflang}
        href={absoluteUrl(paths.it)}
      />
      <link
        rel="alternate"
        hrefLang={localeMeta.en.hreflang}
        href={absoluteUrl(paths.en)}
      />
      <link rel="alternate" hrefLang="x-default" href={absoluteUrl(paths.it)} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:locale" content={localeMeta[currentLocale].ogLocale} />
      <meta
        property="og:locale:alternate"
        content={localeMeta[alternateLocale].ogLocale}
      />
    </>
  );
}
