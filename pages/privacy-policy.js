import Head from "next/head";
import { useRouter } from "next/router";
import SeoAlternates from "@/components/SeoAlternates";

const SITE_URL = "https://cofactory.it";
const UPDATED_IT = "16 maggio 2026";
const UPDATED_EN = "May 16, 2026";

const pages = {
  it: {
    title: "Privacy Policy | Cofactory",
    description:
      "Informativa privacy di Cofactory su dati personali, form contatti, analytics, fornitori tecnici, diritti e uso dei contenuti.",
    heading: "Privacy Policy",
    eyebrow: "Documento legale",
    updated: `Ultimo aggiornamento: ${UPDATED_IT}`,
    summary:
      "Questa informativa descrive come Cofactory tratta i dati personali raccolti tramite il sito, i form di contatto e gli strumenti tecnici collegati. I testi sono una base operativa da verificare sulla configurazione reale del sito e sui dati societari definitivi.",
    meta: [
      "Titolare: Cofactory srl",
      "Dominio: cofactory.it",
      "Email privacy: meetus@cofactory.it",
      "Sede e P.IVA/CF: [INSERIRE DATI COMPLETI]",
    ],
    sections: [
      {
        title: "Introduzione",
        body: [
          "La presente Privacy Policy e resa ai sensi degli artt. 12, 13 e 14 del Regolamento UE 2016/679 (GDPR), del D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018, e della normativa applicabile in materia di servizi digitali, comunicazioni elettroniche e tutela dei contenuti.",
          "Il sito ha natura vetrina/portfolio e presenta attivita, progetti, contenuti editoriali e un form per richieste commerciali o di contatto.",
        ],
      },
      {
        title: "Titolare del trattamento",
        body: [
          "Il titolare del trattamento e Cofactory srl, con sede in [INSERIRE INDIRIZZO COMPLETO], P.IVA/CF [INSERIRE P.IVA/CF].",
          "Per richieste privacy, esercizio dei diritti o informazioni sul trattamento dei dati e possibile scrivere a meetus@cofactory.it.",
        ],
      },
      {
        title: "Dati personali raccolti",
        list: [
          "Dati forniti volontariamente: indirizzo email, eventuale nome, informazioni sul brand, obiettivi di collaborazione, preferenze selezionate nel form e contenuto delle comunicazioni inviate.",
          "Dati tecnici di navigazione: indirizzo IP, identificativi tecnici, dati relativi a browser, dispositivo, sistema operativo, URL richiesti, orari di accesso, log di sicurezza e dati necessari all'erogazione del sito.",
          "Dati raccolti tramite servizi terzi: dati analytics tramite Google Analytics 4 solo dopo consenso; dati tecnici trattati da Vercel come hosting provider; dati email trattati tramite provider SMTP per l'invio delle comunicazioni.",
          "Dati da Search Console: Google Search Console puo fornire dati aggregati sulle performance di ricerca del sito, senza identificare direttamente gli utenti del sito.",
        ],
      },
      {
        title: "Finalita del trattamento",
        list: [
          "Rispondere a richieste inviate tramite form, email o altri canali di contatto.",
          "Gestire richieste commerciali, preventivi, partnership e follow-up collegati.",
          "Inviare email di conferma o comunicazioni strettamente connesse alla richiesta inviata dall'utente.",
          "Garantire sicurezza, manutenzione, prevenzione abusi e corretto funzionamento del sito.",
          "Analizzare traffico e performance del sito tramite analytics, solo previo consenso dove richiesto.",
          "Adempiere obblighi di legge, difendere diritti del titolare e gestire eventuali contestazioni.",
        ],
      },
      {
        title: "Basi giuridiche",
        list: [
          "Esecuzione di misure precontrattuali o contrattuali richieste dall'interessato, per rispondere a contatti e richieste commerciali.",
          "Legittimo interesse del titolare per sicurezza, manutenzione, prevenzione frodi, tutela dei diritti e gestione tecnica del sito.",
          "Obbligo legale, quando il trattamento e necessario per adempiere norme applicabili.",
          "Consenso dell'utente per cookie analytics non anonimizzati, marketing, profilazione, pixel, mappe/video embed traccianti o strumenti analoghi, ove presenti.",
        ],
      },
      {
        title: "Modalita del trattamento e sicurezza",
        body: [
          "I dati sono trattati con strumenti informatici e organizzativi adeguati alle finalita indicate, secondo principi di minimizzazione, liceita, correttezza, trasparenza, integrita e riservatezza.",
          "Sono adottate misure ragionevoli per ridurre rischi di perdita, accesso non autorizzato, divulgazione, modifica o distruzione dei dati. Nessun sistema digitale puo tuttavia garantire sicurezza assoluta.",
        ],
      },
      {
        title: "Conservazione",
        list: [
          "Richieste tramite form o email: per il tempo necessario a gestire la richiesta e gli eventuali rapporti conseguenti, salvo obblighi o necessita di tutela dei diritti.",
          "Log tecnici e dati di sicurezza: per il tempo necessario a garantire sicurezza, manutenzione e accertamento di eventuali abusi.",
          "Consensi cookie: per il periodo tecnicamente necessario a ricordare la scelta, salvo revoca o modifica da parte dell'utente.",
          "Dati analytics: secondo le impostazioni di conservazione applicate nei servizi utilizzati.",
        ],
      },
      {
        title: "Destinatari e fornitori terzi",
        list: [
          "Vercel, in qualita di hosting provider e infrastruttura di pubblicazione del sito.",
          "Google, per Google Analytics 4 previo consenso e Google Search Console per dati aggregati di ricerca.",
          "Provider SMTP/email, per invio e ricezione di comunicazioni collegate al form.",
          "Consulenti, collaboratori o fornitori tecnici autorizzati, nei limiti necessari alle attivita svolte per Cofactory.",
        ],
      },
      {
        title: "Trasferimenti extra UE",
        body: [
          "Alcuni fornitori potrebbero trattare dati fuori dallo Spazio Economico Europeo. In tali casi il trattamento dovrebbe avvenire sulla base di decisioni di adeguatezza, Clausole Contrattuali Standard o altre garanzie previste dal GDPR.",
          "La configurazione effettiva dei trasferimenti deve essere verificata rispetto ai contratti e alle impostazioni dei singoli fornitori.",
        ],
      },
      {
        title: "Diritti dell'interessato",
        list: [
          "Accesso ai dati personali.",
          "Rettifica o aggiornamento dei dati.",
          "Cancellazione, nei casi previsti.",
          "Limitazione del trattamento.",
          "Opposizione al trattamento basato su legittimo interesse.",
          "Portabilita dei dati, quando applicabile.",
          "Revoca del consenso per i trattamenti basati su consenso, senza pregiudicare la liceita del trattamento precedente.",
        ],
      },
      {
        title: "Esercizio dei diritti e reclamo",
        body: [
          "Per esercitare i diritti e possibile scrivere a meetus@cofactory.it. Il titolare potra richiedere informazioni necessarie a verificare l'identita del richiedente.",
          "L'interessato puo proporre reclamo al Garante per la protezione dei dati personali tramite il sito garanteprivacy.it.",
        ],
      },
      {
        title: "Contenuti, crawler e sistemi AI",
        body: [
          "Salvo diversa indicazione, testi, immagini, layout, materiali creativi, casi studio e contenuti presenti sul sito sono protetti dalla normativa sul diritto d'autore, inclusa la Legge 633/1941.",
          "Non e consentita la riproduzione, estrazione massiva, scraping, archiviazione, rielaborazione o utilizzo dei contenuti per addestramento, sviluppo o miglioramento di sistemi di intelligenza artificiale, salvo autorizzazione scritta del titolare o nei limiti previsti dalla legge applicabile.",
          "La riserva dei diritti e formulata anche ai fini della Direttiva UE 2019/790 sul text and data mining. Il rispetto di file come robots.txt o llms.txt dipende dal comportamento dei singoli crawler e non costituisce protezione assoluta.",
        ],
      },
      {
        title: "Modifiche alla policy",
        body: [
          "Questa informativa puo essere aggiornata per riflettere modifiche tecniche, organizzative, normative o dei servizi usati. La versione aggiornata sara pubblicata su questa pagina.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy | Cofactory",
    description:
      "Cofactory privacy notice covering personal data, contact forms, analytics, technical providers, rights and content usage.",
    heading: "Privacy Policy",
    eyebrow: "Legal document",
    updated: `Last updated: ${UPDATED_EN}`,
    summary:
      "This notice explains how Cofactory processes personal data collected through the website, contact forms and connected technical tools. These texts are an operational basis to be checked against the actual website configuration and final company details.",
    meta: [
      "Controller: Cofactory srl",
      "Domain: cofactory.it",
      "Privacy email: meetus@cofactory.it",
      "Address and VAT/tax code: [INSERT COMPLETE DETAILS]",
    ],
    sections: [
      {
        title: "Introduction",
        body: [
          "This Privacy Policy is provided under Articles 12, 13 and 14 of Regulation (EU) 2016/679 (GDPR), Italian Legislative Decree 196/2003 as amended by Legislative Decree 101/2018, and applicable rules on digital services, electronic communications and content protection.",
          "The website is a showcase/portfolio website presenting activities, projects, editorial content and a form for business or contact requests.",
        ],
      },
      {
        title: "Data controller",
        body: [
          "The data controller is Cofactory srl, with registered office at [INSERT FULL ADDRESS], VAT/tax code [INSERT VAT/TAX CODE].",
          "For privacy requests, rights requests or information about data processing, contact meetus@cofactory.it.",
        ],
      },
      {
        title: "Personal data collected",
        list: [
          "Data voluntarily provided: email address, possible name, brand information, collaboration goals, preferences selected in the form and contents of communications sent.",
          "Technical browsing data: IP address, technical identifiers, browser, device and operating system data, requested URLs, access times, security logs and data required to provide the website.",
          "Data collected through third-party services: analytics data through Google Analytics 4 only after consent; technical data processed by Vercel as hosting provider; email data processed through an SMTP provider for communications.",
          "Search Console data: Google Search Console may provide aggregate search performance data without directly identifying website users.",
        ],
      },
      {
        title: "Purposes",
        list: [
          "Replying to requests sent through forms, email or other contact channels.",
          "Managing business requests, quotes, partnerships and related follow-ups.",
          "Sending confirmation emails or communications strictly connected to the user's request.",
          "Ensuring website security, maintenance, abuse prevention and proper operation.",
          "Analyzing website traffic and performance through analytics, only with consent where required.",
          "Complying with legal obligations, defending the controller's rights and managing disputes.",
        ],
      },
      {
        title: "Legal bases",
        list: [
          "Pre-contractual or contractual measures requested by the data subject, to reply to contacts and business requests.",
          "Legitimate interest of the controller for security, maintenance, fraud prevention, rights protection and technical website management.",
          "Legal obligation, where processing is necessary to comply with applicable laws.",
          "User consent for non-anonymized analytics cookies, marketing, profiling, pixels, tracking maps/video embeds or similar tools, where present.",
        ],
      },
      {
        title: "Processing methods and security",
        body: [
          "Data is processed with IT and organizational tools appropriate to the stated purposes, according to minimization, lawfulness, fairness, transparency, integrity and confidentiality principles.",
          "Reasonable measures are adopted to reduce risks of loss, unauthorized access, disclosure, alteration or destruction of data. No digital system can guarantee absolute security.",
        ],
      },
      {
        title: "Retention",
        list: [
          "Form or email requests: for the time required to manage the request and any related relationship, unless legal obligations or rights protection require otherwise.",
          "Technical logs and security data: for the time required to ensure security, maintenance and detection of possible abuse.",
          "Cookie consents: for the technical period needed to remember the choice, unless the user withdraws or changes it.",
          "Analytics data: according to retention settings applied in the services used.",
        ],
      },
      {
        title: "Recipients and third-party providers",
        list: [
          "Vercel, as hosting provider and website publishing infrastructure.",
          "Google, for Google Analytics 4 after consent and Google Search Console for aggregate search data.",
          "SMTP/email provider, for sending and receiving communications connected to the form.",
          "Consultants, collaborators or authorized technical providers, within the limits required for services performed for Cofactory.",
        ],
      },
      {
        title: "Transfers outside the EU",
        body: [
          "Some providers may process data outside the European Economic Area. In such cases, processing should rely on adequacy decisions, Standard Contractual Clauses or other safeguards under the GDPR.",
          "The actual transfer configuration must be checked against contracts and settings of each provider.",
        ],
      },
      {
        title: "Data subject rights",
        list: [
          "Access to personal data.",
          "Rectification or update of data.",
          "Erasure, where applicable.",
          "Restriction of processing.",
          "Objection to processing based on legitimate interest.",
          "Data portability, where applicable.",
          "Withdrawal of consent for consent-based processing, without affecting the lawfulness of prior processing.",
        ],
      },
      {
        title: "Exercising rights and complaints",
        body: [
          "To exercise rights, write to meetus@cofactory.it. The controller may request information needed to verify the requester's identity.",
          "The data subject may lodge a complaint with the Italian Data Protection Authority through garanteprivacy.it.",
        ],
      },
      {
        title: "Content, crawlers and AI systems",
        body: [
          "Unless otherwise stated, texts, images, layouts, creative materials, case studies and website content are protected by copyright law, including Italian Law 633/1941.",
          "Reproduction, massive extraction, scraping, storage, reworking or use of content for training, developing or improving artificial intelligence systems is not allowed without written authorization from the controller or except within the limits of applicable law.",
          "This reservation of rights is also made for the purposes of Directive (EU) 2019/790 on text and data mining. Compliance with files such as robots.txt or llms.txt depends on individual crawler behavior and is not an absolute protection.",
        ],
      },
      {
        title: "Changes to this policy",
        body: [
          "This notice may be updated to reflect technical, organizational, legal or service changes. The updated version will be published on this page.",
        ],
      },
    ],
  },
};

function renderSection(section, index) {
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
      </div>
    </section>
  );
}

export default function PrivacyPolicy() {
  const router = useRouter();
  const lang = router.locale === "en" ? "en" : "it";
  const page = pages[lang];

  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <meta name="robots" content="index, follow" />
        <SeoAlternates page="privacy" locale={lang} />
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
          <div>{page.sections.map(renderSection)}</div>
        </div>
      </div>
    </>
  );
}
