import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import "@/styles/blurryLights.css";
import "@/styles/line.css";
import "@/styles/linkMarquee.css";
import "@/styles/linkMarquee2.css";

import "@/styles/paragraph.css";
import "@/styles/cases.css";
import "@/styles/sliding.css";
import "@/styles/card.css";
import "@/styles/curve.css";

import { useState, useEffect } from "react";

import { ThemeProvider } from "next-themes";
import SplashScreen from "@/components/layout/SplashScreen";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import Curve from "@/components/layout/Curve/Curve";

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simulazione del caricamento dell'applicazione
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Cambia 3000 con il tempo di caricamento effettivo della tua app
  }, []);

  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <SplashScreen />
        </>
      ) : (
        <ThemeProvider attribute="class">
          <Layout>
            <Component {...pageProps} key={router.asPath} />
          </Layout>
        </ThemeProvider>
      )}
    </>
  );
}
