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

import { useState, useEffect } from "react";

import { ThemeProvider } from "next-themes";
import SplashScreen from "@/components/layout/SplashScreen";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const finishLoading = () => {
    setLoading(false);
  };

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
      {/* {loading ? (
        <SplashScreen finishLoading={finishLoading} />
      ) : ( */}
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} key={router.asPath} />
        </Layout>
      </ThemeProvider>
      {/* )} */}
    </>
  );
}
