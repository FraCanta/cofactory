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
import "@/styles/herologo.css";

import { useState, useEffect } from "react";

import { ThemeProvider } from "next-themes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import MaskIntro2 from "@/components/layout/MaskIntro/MaskIntro2";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // ✅ evita hydration error
  const [isClient, setIsClient] = useState(false);

  // ✅ controlla la mask
  const [loading, setLoading] = useState(true);

  const finishLoading = () => {
    // home diventa visibile
    setLoading(false);
  };

  useEffect(() => {
    setIsClient(true); // ora siamo sul client e possiamo usare sessionStorage
  }, []);

  useEffect(() => {
    // if (!isClient) return;

    // const alreadyPlayed = sessionStorage.getItem("maskPlayed");

    // if (!alreadyPlayed && router.pathname === "/") {
    //   sessionStorage.setItem("maskPlayed", "true");
    //   setLoading(true);
    // } else {
    //   setLoading(false);
    // }

    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
  }, [isClient, router.pathname]);

  // ✅ evita mismatch server/client
  if (!isClient) return null;

  return (
    <ThemeProvider attribute="class">
      <Layout>
        {/* ✅ LA HOME È SEMPRE SOTTO LE TENDINE */}
        <div>
          <Component {...pageProps} key={router.asPath} />
        </div>

        {/* ✅ MASK SOLO SE SERVE */}
        {/* {loading && (
          <div style={{ position: "fixed", inset: 0, zIndex: 99999 }}>
            <MaskIntro2 onAnimationEnd={finishLoading} />
          </div>
        )} */}
      </Layout>
    </ThemeProvider>
  );
}
