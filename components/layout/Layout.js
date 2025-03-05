import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Layout = (props) => {
  // Configura ScrollTrigger globalmente usando gsap.context
  useEffect(() => {
    gsap.context({
      plugins: [ScrollTrigger],
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
