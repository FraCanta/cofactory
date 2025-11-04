import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import "@/styles/blurryLights.css";
import "@/styles/line.css";
import "@/styles/linkMarquee.css";
import "@/styles/linkMarquee2.css";

import "@/styles/paragraph.css";
import "@/styles/cases.css";
import "@/styles/sliding.css";
import "@/styles/cofactorybutton.css";
import "@/styles/mask.css";
import "@/styles/floating.css";

import { useState, useEffect } from "react";

import { ThemeProvider } from "next-themes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import MaskIntro from "@/components/layout/MaskIntro/MaskIntro";
import MaskIntro2 from "@/components/layout/MaskIntro/MaskIntro2";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [showHome, setShowHome] = useState(false);

  const finishLoading = () => {
    // attiva fade-in
    setShowHome(true);
    setTimeout(() => setLoading(false), 300); // durata fade-in
  };

  useEffect(() => {
    // ✅ controlla se è la prima visita della sessione
    const alreadyPlayed = sessionStorage.getItem("maskPlayed");

    if (!alreadyPlayed && router.pathname === "/") {
      setLoading(true);
      sessionStorage.setItem("maskPlayed", "true");
    } else {
      setShowHome(true);
    }

    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
  }, [router.pathname]);

  return (
    <>
      {loading ? (
        <MaskIntro2 onAnimationEnd={finishLoading} />
      ) : (
        <ThemeProvider attribute="class">
          <Layout>
            <div
              className={`transition-opacity duration-300 ${
                showHome ? "opacity-100" : "opacity-0"
              }`}
            >
              <Component {...pageProps} key={router.asPath} />
            </div>
          </Layout>
        </ThemeProvider>
      )}
    </>
  );
}
