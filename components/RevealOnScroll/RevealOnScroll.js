import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../fonts/ClearfaceStd-Bold.woff" });
const RevealOnScroll = () => {
  const svgRef = useRef(null);
  const textRef = useRef(null);
  const revealRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const svgElement = svgRef.current;
    const textElement = textRef.current;
    const revealElement = revealRef.current;
    gsap.set(textElement, { opacity: 0, x: 100 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: revealElement,
        start: "top top",
        end: "+=400px",
        scrub: 2,
        pin: true,
      },
    });

    tl.to(svgElement, {
      scale: 60,
      duration: 1,
      ease: "power2.inOut",
    });

    tl.to(textElement, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
    });

    return () => {
      tl.kill();
    };
  }, [revealRef]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Pulizia per prevenire eventuali perdite di memoria
    };
  }, [revealRef]);

  return (
    <div className="relative" style={{ Height: "100vh" }} ref={revealRef}>
      <div
        className="reveal-container"
        style={{ position: "relative", height: "100vh", overflow: "hidden" }}
      >
        <svg
          ref={svgRef}
          version="1.1"
          id="Livello_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 220.2 221.2"
          style={{
            width: "100%",
            height: "100%",
            enableBackground: "new 0 0 220.2 221.2",
          }}
          xmlSpace="preserve"
          className="fill-second "
        >
          <path
            className="st0"
            d="M10.9,214.8c-1.3,0-2.6-0.5-3.6-1.5c-2-2-2-5.3,0-7.3l96.6-96.6L7.2,12.9c-2-2-2-5.3,0-7.3s5.3-2,7.3,0 l100.2,100.2c2,2,2,5.3,0,7.3L14.5,213.3C13.5,214.3,12.2,214.8,10.9,214.8z"
          />
          <path
            className="st0"
            d="M147.2,76.9c-1.3,0-2.6-0.5-3.6-1.5c-2-2-2-5.3,0-7.3l62.5-62.5c2-2,5.3-2,7.3,0c2,2,2,5.3,0,7.3l-62.5,62.5 C149.9,76.4,148.6,76.9,147.2,76.9z"
          />
          <path
            className="st0"
            d="M209.7,214.8c-1.3,0-2.6-0.5-3.6-1.5L142.7,150c-2-2-2-5.3,0-7.3c2-2,5.3-2,7.3,0l63.4,63.4c2,2,2,5.3,0,7.3 C212.3,214.3,211,214.8,209.7,214.8z"
          />
        </svg>
        <div
          ref={textRef}
          className="absolute inset-0 z-10 flex items-center justify-center text-center w-[90%] mx-auto "
        >
          <h2
            className={`${myFont.className} z-auto text-3xl lg:text-6xl text-third dark:text-white font-bold uppercase`}
          >
            Questo è un testo che si anima all'entrata
          </h2>
        </div>
      </div>
    </div>
  );
};

export default RevealOnScroll;
