import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { FaCookieBite } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const CONSENT_KEY = "cofactory_cookie_consent";
const GA_ID = "G-YJVD0ZF7LT";

const copy = {
  it: {
    title: "Preferenze cookie",
    intro:
      "Usiamo cookie tecnici necessari al funzionamento del sito. Con il tuo consenso possiamo usare cookie di statistica per capire come viene visitato il sito. Puoi accettare, rifiutare o personalizzare le preferenze.",
    essential: "Tecnici necessari",
    essentialText: "Sempre attivi: servono a far funzionare il sito.",
    functional: "Funzionali",
    functionalText:
      "Ricordano preferenze utili all'esperienza, come le impostazioni scelte nel sito.",
    analytics: "Statistiche",
    analyticsText:
      "Ci aiutano a misurare le visite in forma aggregata tramite Google Analytics.",
    marketing: "Marketing",
    marketingText:
      "Non sono attualmente attivi. Servirebbero per campagne, pixel o profilazione e richiederebbero consenso preventivo.",
    reject: "Rifiuta",
    accept: "Accetta tutti",
    customize: "Personalizza",
    save: "Salva preferenze",
    manage: "Gestisci preferenze cookie",
    privacy: "Privacy Policy",
    cookie: "Cookie Policy",
  },
  en: {
    title: "Cookie preferences",
    intro:
      "We use strictly necessary cookies to run the website. With your consent, we can use statistics cookies to understand how the site is visited. You can accept, reject or customize your preferences.",
    essential: "Strictly necessary",
    essentialText: "Always active: required for the website to work.",
    functional: "Functional",
    functionalText:
      "They remember useful preferences for the experience, such as settings chosen on the site.",
    analytics: "Statistics",
    analyticsText:
      "They help us measure visits in aggregate form through Google Analytics.",
    marketing: "Marketing",
    marketingText:
      "They are not currently active. They would be used for campaigns, pixels or profiling and would require prior consent.",
    reject: "Reject",
    accept: "Accept all",
    customize: "Customize",
    save: "Save preferences",
    manage: "Manage cookie preferences",
    privacy: "Privacy Policy",
    cookie: "Cookie Policy",
  },
};

function readConsent() {
  if (typeof window === "undefined") return null;

  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

function saveConsent(preferences) {
  window.localStorage.setItem(
    CONSENT_KEY,
    JSON.stringify({
      necessary: true,
      functional: Boolean(preferences.functional),
      analytics: Boolean(preferences.analytics),
      marketing: Boolean(preferences.marketing),
      updatedAt: new Date().toISOString(),
    })
  );
}

function setAnalyticsDisabled(disabled) {
  window[`ga-disable-${GA_ID}`] = disabled;
}

function loadGoogleAnalytics() {
  if (window.gtag) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

function Cookie16SolidIcon(props) {
  return <FaCookieBite {...props} />;
}

export default function CookieConsent() {
  const router = useRouter();
  const lang = router.locale === "en" ? "en" : "it";
  const t = copy[lang];
  const [isReady, setIsReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [functional, setFunctional] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const policyBase = lang === "en" ? "/en" : "";
  const panelId = useMemo(() => "cookie-preferences-panel", []);

  useEffect(() => {
    const saved = readConsent();

    if (!saved) {
      setIsOpen(true);
      setAnalyticsDisabled(true);
    } else {
      setFunctional(Boolean(saved.functional));
      setAnalytics(Boolean(saved.analytics));
      setMarketing(Boolean(saved.marketing));
      setAnalyticsDisabled(!saved.analytics);
      if (saved.analytics) loadGoogleAnalytics();
    }

    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady || !analytics) return;

    const handleRouteChange = (url) => {
      if (window.gtag) {
        window.gtag("config", GA_ID, { page_path: url });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [analytics, isReady, router.events]);

  function commit(nextPreferences) {
    const preferences =
      typeof nextPreferences === "boolean"
        ? {
            functional: nextPreferences,
            analytics: nextPreferences,
            marketing: nextPreferences,
          }
        : nextPreferences;

    saveConsent(preferences);
    setFunctional(Boolean(preferences.functional));
    const nextAnalytics = Boolean(preferences.analytics);
    setAnalytics(nextAnalytics);
    setMarketing(Boolean(preferences.marketing));
    setAnalyticsDisabled(!nextAnalytics);

    if (nextAnalytics) {
      loadGoogleAnalytics();
    }

    setIsOpen(false);
  }

  if (!isReady) return null;

  return (
    <>
      <button
        type="button"
        className="cookie-preferences-button"
        aria-label={t.manage}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen(true)}
      >
        <Cookie16SolidIcon height="1em" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="cookie-consent" role="dialog" aria-modal="true">
          <div className="cookie-consent__panel" id={panelId}>
            <div className="cookie-consent__header">
              <h2>{t.title}</h2>
              <button
                type="button"
                className="cookie-consent__close"
                aria-label={t.reject}
                onClick={() => commit(false)}
              >
                <IoClose aria-hidden="true" />
              </button>
            </div>

            <p>{t.intro}</p>

            <div className="cookie-consent__option">
              <div>
                <strong>{t.essential}</strong>
                <span>{t.essentialText}</span>
              </div>
              <span className="cookie-consent__badge">ON</span>
            </div>

            <label className="cookie-consent__option cookie-consent__option--toggle">
              <div>
                <strong>{t.functional}</strong>
                <span>{t.functionalText}</span>
              </div>
              <input
                type="checkbox"
                checked={functional}
                onChange={(event) => setFunctional(event.target.checked)}
              />
            </label>

            <label className="cookie-consent__option cookie-consent__option--toggle">
              <div>
                <strong>{t.analytics}</strong>
                <span>{t.analyticsText}</span>
              </div>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(event) => setAnalytics(event.target.checked)}
              />
            </label>

            <label className="cookie-consent__option cookie-consent__option--toggle">
              <div>
                <strong>{t.marketing}</strong>
                <span>{t.marketingText}</span>
              </div>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(event) => setMarketing(event.target.checked)}
              />
            </label>

            <div className="cookie-consent__links">
              <a href={`${policyBase}/privacy-policy`}>{t.privacy}</a>
              <a href={`${policyBase}/cookie-policy`}>{t.cookie}</a>
            </div>

            <div className="cookie-consent__actions">
              <button type="button" onClick={() => commit(false)}>
                {t.reject}
              </button>
              <button
                type="button"
                onClick={() => commit({ functional, analytics, marketing })}
              >
                {t.customize}
              </button>
              <button type="button" onClick={() => commit(true)}>
                {t.accept}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
