import Head from "next/head";
import { useRouter } from "next/router";
import SeoAlternates from "@/components/SeoAlternates";

const SITE_URL = "https://cofactory.it";

const pages = {
  it: {
    title: "Cookie Policy | Cofactory",
    description:
      "Informativa cookie di Cofactory con categorie, consenso, revoca, fornitori terzi e tabella cookie.",
    heading: "Cookie Policy",
    eyebrow: "Documento legale",
    updated: "Ultimo aggiornamento: 16 maggio 2026",
    summary:
      "Questa Cookie Policy spiega quali cookie e strumenti simili possono essere usati su cofactory.it. Cookie tecnici e necessari possono essere usati senza consenso; analytics non anonimizzati, marketing, profilazione, pixel, mappe/video embed traccianti e strumenti simili richiedono consenso preventivo.",
    meta: [
      "Titolare: Cofactory srl",
      "Dominio: cofactory.it",
      "Email privacy: meetus@cofactory.it",
      "Hosting: Vercel",
    ],
    sections: [
      {
        title: "Cosa sono i cookie",
        body: [
          "I cookie sono piccoli file di testo che un sito puo salvare sul dispositivo dell'utente. Strumenti simili, come local storage, pixel, SDK o tecnologie di tracking, possono svolgere funzioni analoghe.",
          "Alcuni strumenti sono necessari per il funzionamento del sito; altri possono essere usati solo dopo consenso libero, specifico, informato e revocabile.",
        ],
      },
      {
        title: "Cookie tecnici necessari",
        body: [
          "Servono a far funzionare il sito, ricordare le preferenze cookie e garantire sicurezza o funzionalita essenziali. Non richiedono consenso, ma devono essere indicati nell'informativa.",
        ],
      },
      {
        title: "Cookie funzionali",
        body: [
          "Consentono di ricordare preferenze dell'utente non strettamente necessarie. Se la funzionalita non e essenziale, vengono attivati solo sulla base della scelta dell'utente.",
        ],
      },
      {
        title: "Cookie analytics/statistiche",
        body: [
          "Il sito puo usare Google Analytics 4 per misurare visite, pagine viste e interazioni. Nel sito attuale Google Analytics viene caricato solo dopo il consenso alla categoria Statistiche.",
          "Gli analytics assimilabili ai tecnici richiedono configurazioni specifiche di anonimizzazione e aggregazione. In mancanza di tali condizioni, e corretto richiedere consenso preventivo.",
        ],
      },
      {
        title: "Cookie marketing/profilazione",
        body: [
          "Al momento non risultano attivi pixel marketing o strumenti di profilazione. Se in futuro saranno installati Meta Pixel, TikTok Pixel, LinkedIn Insight Tag o strumenti simili, dovranno essere bloccati prima del consenso e descritti in questa tabella.",
        ],
      },
      {
        title: "Terze parti",
        body: [
          "I servizi terzi identificati sono Google Analytics 4, Google Search Console, Vercel come hosting provider e provider SMTP/email per la gestione delle richieste. Non vengono indicati altri servizi terzi non verificati.",
        ],
      },
      {
        title: "Gestione e revoca del consenso",
        body: [
          "Il banner consente di accettare tutti i cookie opzionali, rifiutarli o personalizzare le categorie. L'utente puo modificare o revocare il consenso in qualsiasi momento tramite il pulsante con icona cookie sempre visibile sul sito.",
          "La mancata accettazione dei cookie opzionali non impedisce la navigazione del sito.",
        ],
      },
      {
        title: "Tabella cookie",
        table: true,
      },
      {
        title: "Informative dei fornitori",
        list: [
          "Google Privacy Policy: https://policies.google.com/privacy",
          "Google Analytics: https://support.google.com/analytics/answer/6004245",
          "Vercel Privacy Policy: https://vercel.com/legal/privacy-policy",
          "Provider SMTP/email: [INSERIRE LINK INFORMATIVA DEL FORNITORE SMTP UTILIZZATO]",
        ],
      },
      {
        title: "Aggiornamenti",
        body: [
          "La tabella cookie deve essere aggiornata dopo ogni modifica tecnica del sito e verificata tramite browser/devtools prima della pubblicazione definitiva.",
        ],
      },
    ],
  },
  en: {
    title: "Cookie Policy | Cofactory",
    description:
      "Cofactory cookie notice with categories, consent, withdrawal, third-party providers and cookie table.",
    heading: "Cookie Policy",
    eyebrow: "Legal document",
    updated: "Last updated: May 16, 2026",
    summary:
      "This Cookie Policy explains which cookies and similar tools may be used on cofactory.it. Strictly necessary cookies may be used without consent; non-anonymized analytics, marketing, profiling, pixels, tracking maps/video embeds and similar tools require prior consent.",
    meta: [
      "Controller: Cofactory srl",
      "Domain: cofactory.it",
      "Privacy email: meetus@cofactory.it",
      "Hosting: Vercel",
    ],
    sections: [
      {
        title: "What cookies are",
        body: [
          "Cookies are small text files that a website can store on the user's device. Similar tools, such as local storage, pixels, SDKs or tracking technologies, may perform similar functions.",
          "Some tools are necessary for website operation; others may be used only after free, specific, informed and withdrawable consent.",
        ],
      },
      {
        title: "Strictly necessary cookies",
        body: [
          "They are used to run the website, remember cookie preferences and ensure security or essential features. They do not require consent, but must be described in the notice.",
        ],
      },
      {
        title: "Functional cookies",
        body: [
          "They remember non-essential user preferences. If the functionality is not essential, they are activated only according to the user's choice.",
        ],
      },
      {
        title: "Analytics/statistics cookies",
        body: [
          "The website may use Google Analytics 4 to measure visits, page views and interactions. On the current website, Google Analytics is loaded only after consent to the Statistics category.",
          "Analytics may be treated similarly to technical cookies only under specific anonymization and aggregation configurations. Without those conditions, prior consent should be requested.",
        ],
      },
      {
        title: "Marketing/profiling cookies",
        body: [
          "No marketing pixels or profiling tools currently appear to be active. If Meta Pixel, TikTok Pixel, LinkedIn Insight Tag or similar tools are installed in the future, they must be blocked before consent and described in this table.",
        ],
      },
      {
        title: "Third parties",
        body: [
          "The identified third-party services are Google Analytics 4, Google Search Console, Vercel as hosting provider and SMTP/email provider for request management. No other unverified third-party services are listed.",
        ],
      },
      {
        title: "Managing and withdrawing consent",
        body: [
          "The banner allows users to accept all optional cookies, reject them or customize categories. Users can change or withdraw consent at any time through the cookie icon button always visible on the website.",
          "Rejecting optional cookies does not prevent browsing the website.",
        ],
      },
      {
        title: "Cookie table",
        table: true,
      },
      {
        title: "Provider notices",
        list: [
          "Google Privacy Policy: https://policies.google.com/privacy",
          "Google Analytics: https://support.google.com/analytics/answer/6004245",
          "Vercel Privacy Policy: https://vercel.com/legal/privacy-policy",
          "SMTP/email provider: [INSERT PRIVACY NOTICE LINK OF THE SMTP PROVIDER USED]",
        ],
      },
      {
        title: "Updates",
        body: [
          "The cookie table must be updated after each technical change to the website and verified through browser/devtools before final publication.",
        ],
      },
    ],
  },
};

const cookieRows = {
  it: [
    [
      "cofactory_cookie_consent",
      "Cofactory",
      "Tecnico necessario",
      "Memorizza le preferenze cookie espresse dall'utente.",
      "Fino a revoca/modifica o cancellazione local storage",
      "No",
    ],
    [
      "theme",
      "Cofactory",
      "Funzionale",
      "Ricorda la preferenza tema chiaro/scuro quando impostata dall'utente.",
      "Persistente nel browser fino a modifica/cancellazione",
      "No, se considerato preferenza richiesta dall'utente",
    ],
    [
      "_ga",
      "Google Analytics",
      "Statistiche",
      "Distingue utenti e sessioni per misurare traffico e interazioni.",
      "Fino a 2 anni",
      "Si",
    ],
    [
      "_ga_*",
      "Google Analytics",
      "Statistiche",
      "Mantiene lo stato della sessione e dati analytics collegati alla proprieta GA4.",
      "Fino a 2 anni",
      "Si",
    ],
    [
      "Log tecnici",
      "Vercel / infrastruttura hosting",
      "Tecnico/sicurezza",
      "Erogazione sito, sicurezza, diagnostica e prevenzione abusi.",
      "Secondo policy e configurazioni del provider",
      "No",
    ],
  ],
  en: [
    [
      "cofactory_cookie_consent",
      "Cofactory",
      "Strictly necessary",
      "Stores cookie preferences expressed by the user.",
      "Until withdrawal/change or local storage deletion",
      "No",
    ],
    [
      "theme",
      "Cofactory",
      "Functional",
      "Remembers the light/dark theme preference when set by the user.",
      "Persistent in the browser until changed/deleted",
      "No, if treated as a user-requested preference",
    ],
    [
      "_ga",
      "Google Analytics",
      "Statistics",
      "Distinguishes users and sessions to measure traffic and interactions.",
      "Up to 2 years",
      "Yes",
    ],
    [
      "_ga_*",
      "Google Analytics",
      "Statistics",
      "Maintains session state and analytics data linked to the GA4 property.",
      "Up to 2 years",
      "Yes",
    ],
    [
      "Technical logs",
      "Vercel / hosting infrastructure",
      "Technical/security",
      "Website delivery, security, diagnostics and abuse prevention.",
      "According to provider policy and settings",
      "No",
    ],
  ],
};

function CookieTable({ lang }) {
  const headings =
    lang === "en"
      ? ["Cookie name", "Provider", "Category", "Purpose", "Duration", "Consent required"]
      : ["Nome cookie", "Fornitore", "Categoria", "Finalita", "Durata", "Consenso richiesto"];

  return (
    <div className="legal-table-wrap">
      <table className="legal-table">
        <thead>
          <tr>
            {headings.map((heading) => (
              <th key={heading}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cookieRows[lang].map((row) => (
            <tr key={row[0]}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderSection(section, index, lang) {
  return (
    <section className="legal-section" key={section.title}>
      <span className="legal-section__number">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h2>{section.title}</h2>
        {section.body?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {section.list && (
          <ul>
            {section.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {section.table && <CookieTable lang={lang} />}
      </div>
    </section>
  );
}

export default function CookiePolicy() {
  const router = useRouter();
  const lang = router.locale === "en" ? "en" : "it";
  const page = pages[lang];

  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <meta name="robots" content="index, follow" />
        <SeoAlternates page="cookie" locale={lang} />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.description} />
        <meta
          property="og:image"
          content={`${SITE_URL}/assets/logo/logo_intero.png`}
        />
      </Head>

      <div className="legal-page">
        <div className="legal-page__wrap">
          <header>
            <p className="legal-page__eyebrow">{page.eyebrow}</p>
            <h1>{page.heading}</h1>
            <p className="legal-page__summary">{page.summary}</p>
            <div className="legal-page__meta">
              <span>{page.updated}</span>
              {page.meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </header>
          <div>{page.sections.map((section, index) => renderSection(section, index, lang))}</div>
        </div>
      </div>
    </>
  );
}
