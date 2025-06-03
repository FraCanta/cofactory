import React, { useEffect, useRef, useState } from "react";
import BlurryLights from "../BlurryLights";
import localFont from "next/font/local";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
const myFont2 = localFont({ src: "../../../fonts/Raleway-Light.ttf" });

function MaskIntro({ onAnimationEnd }) {
  const stickyMask = useRef(null);
  const payoffRef = useRef(null);
  const container = useRef(null);
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check viewport on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // run once on mount
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Appare payoff + maschera
      gsap.to([stickyMask.current, payoffRef.current], {
        opacity: 1,
        duration: 2,
        delay: 0.5,
        ease: "sine.out",
      });

      // Payoff scompare
      gsap.to(payoffRef.current, {
        opacity: 0,
        delay: 2.5,
        duration: 1,
        ease: "sine.out",
      });

      // Mostra "SCROLL"
      gsap.to(scrollRef.current, {
        opacity: 1,
        duration: 1,
        delay: 3.6, // dopo payoff
        ease: "sine.out",
      });

      // Scroll animation
      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: "50% top",
        pin: true,
        scrub: true, // per animazione fluida
        onUpdate: (self) => {
          const progress = self.progress;

          // Dinamica diversa per mobile
          const baseSize = isMobile ? 80 : 35;
          const scaleFactor = isMobile ? 1500 : 2965;
          const blurMax = isMobile ? 15 : 30;
          const contrastMax = isMobile ? 130 : 150;

          const shiftX = isMobile ? -10 : -30; // quanto verso sinistra (valore negativo)
          const shiftY = isMobile ? -5 : -20; // quanto verso l'alto (valore negativo)

          gsap.to(stickyMask.current, {
            transform: `translate(${progress * shiftX}px, ${
              progress * shiftY
            }px)`,
            maskSize: `${baseSize + progress * scaleFactor}%`,
            webkitMaskSize: `${baseSize + progress * scaleFactor}%`,
            filter: `blur(${progress * blurMax}px) contrast(${
              100 + progress * (contrastMax - 100)
            }%)`,
            opacity: 1 - progress,
            duration: 0.1,
          });

          gsap.to(container.current, {
            backgroundColor: `rgba(255, 255, 255, ${1 - progress})`,
            duration: 0.1,
          });
        },
        onLeave: () => {
          // 💥 Quando finisce, scrolla alla Hero
          gsap.to(window, {
            scrollTo: 0, // ← usa il plugin ScrollToPlugin
            duration: 0.2,
            ease: "sine.in",
          });

          onAnimationEnd(); // tua callback
        },
      });
    }, container);

    return () => ctx.revert();
  }, [onAnimationEnd, isMobile]);

  return (
    <main className="relative mainMask">
      {/* BlurryLights sotto tutto */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <BlurryLights />
      </div>

      {/* Contenitore maschera + payoff */}
      <div
        ref={container}
        className="Maskcontainer"
        style={{ backgroundColor: "white" }}
      >
        <div ref={stickyMask} className="stickyMask">
          <div className="video">
            <BlurryLights />
          </div>
        </div>

        {/* Logo payoff */}
        <div ref={payoffRef} className="z-20 w-full payoffContainer">
          <Image
            src="/assets/logo_payoff_sito25.png"
            alt="Logo"
            width={600}
            height={200}
            className="mx-auto w-[300px] sm:w-[320px] 2xl:w-[550px] 2xla:w-[600px]"
          />
        </div>
        <div ref={scrollRef} className="scrollRef">
          <p className="text-lg lg:text-2xl text-third">SCROLL</p>
        </div>
      </div>
    </main>
  );
}

export default MaskIntro;
