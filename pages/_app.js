import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import "@/styles/blurryLights.css";
import "@/styles/linkMarquee.css";
import "@/styles/linkMarquee2.css";

import "@/styles/cases.css";
import "@/styles/sliding.css";
import "@/styles/cofactorybutton.css";
import "@/styles/floating.css";
import "@/styles/herologo.css";

import { useEffect } from "react";

import { ThemeProvider } from "next-themes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
  }, [router.pathname]);

  return (
    <>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-YJVD0ZF7LT"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YJVD0ZF7LT', { 'debug_mode': true });
        `}
      </Script>

      {/* Configurazione Iubenda */}
      <Script
        type="text/javascript"
        src="https://embeds.iubenda.com/widgets/3af2fbdf-63ef-42b7-b936-f42a91ee04b9.js"
      ></Script>
    </>
  );
}
