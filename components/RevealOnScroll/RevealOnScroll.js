import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import localFont from "next/font/local";
import useLayoutEffect from "../../utils/use-isomorphic-layout-effect";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
const myFont = localFont({ src: "../../fonts/ClearfaceStd-Bold.woff" });
const RevealOnScroll = () => {
  const revealRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: revealRef.current,
        start: "top top",
        end: () => "+=" + revealRef.current.scrollHeight,
        scrub: 1,
        pin: true,
      },
    });

    // tl.from(".svg-co", {
    //   scale: 20,
    //   duration: 5,
    //   ease: "power2.inOut",
    // });
    // tl.to(".svg-co", {
    //   scale: 80,
    //   duration: 5,
    //   ease: "power2.inOut",
    // });

    // tl.from(".title", {
    //   opacity: 0,
    //   x: 300,
    //   duration: 1,
    //   ease: "power2.out",
    // });

    // tl.to(".title", {
    //   opacity: 1,
    //   x: 0,
    //   duration: 1,
    //   ease: "power2.out",
    // });

    return () => {
      tl.kill();
    };
  }, [revealRef.current]);

  return (
    <div ref={revealRef} className="reveal-container">
      <svg
        version="1.1"
        id="Livello_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 220.2 221.2"
        style={{
          enableBackground: "new 0 0 220.2 221.2",
        }}
        xmlSpace="preserve"
        className="fill-second svg-co"
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
      <div className="absolute inset-0 z-10 flex items-center justify-center text-center w-[90%] mx-auto title">
        <h2
          className={`${myFont.className} z-auto text-2xl lg:text-6xl dark:text-third text-white font-bold`}
        >
          Tranquillo, la prima mossa la facciamo noi: intuiamo una potenziale
          affinità tra i partner e, dopo averne valutato l’effettiva
          compatibilità, concepiamo l’idea creativa e sviluppiamo la campagna di
          comunicazione.
        </h2>
      </div>
    </div>
  );
};

export default RevealOnScroll;
