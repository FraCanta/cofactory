import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import "@/styles/blurryLights.css";
import "@/styles/line.css";
import "@/styles/linkMarquee.css";
import "@/styles/paragraph.css";
import "@/styles/cases.css";
import { useState, useEffect } from "react";

import { ThemeProvider } from "next-themes";
import SplashScreen from "@/components/layout/SplashScreen";

export default function App({ Component, pageProps, finishLoading }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulazione del caricamento dell'applicazione
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Cambia 3000 con il tempo di caricamento effettivo della tua app
  }, []);

  return (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <ThemeProvider attribute="class">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      )}
    </>
  );
}
