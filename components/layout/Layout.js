import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LenisScroll from "./LenisScroll";
import { useRouter } from "next/router";

const Layout = (props) => {
  const router = useRouter();
  // Configura ScrollTrigger globalmente usando gsap.context
  useEffect(() => {
    gsap.context({
      plugins: [ScrollTrigger],
    });
  }, []);

  const noLayoutPages = ["/cerchi-un-partner"];
  const showLayout = !noLayoutPages.includes(router.pathname);
  const lang = router.locale; // "en" o "it"
  return (
    <>
      <LenisScroll />
      {showLayout && <Navbar lang={lang} />}
      <main>{props.children}</main>
      {showLayout && <Footer />}
    </>
  );
};

export default Layout;
