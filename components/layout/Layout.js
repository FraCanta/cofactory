import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LenisScroll from "./LenisScroll";

const Layout = (props) => {
  // Configura ScrollTrigger globalmente usando gsap.context
  useEffect(() => {
    gsap.context({
      plugins: [ScrollTrigger],
    });
  }, []);

  return (
    <>
      <LenisScroll />
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
