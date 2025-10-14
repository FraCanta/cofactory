"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import localFont from "next/font/local";

gsap.registerPlugin(ScrollTrigger);

const myFont2 = localFont({ src: "../../fonts/Raleway-Light.ttf" });

const SplashScreen = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const logoRef = useRef(null);
  const payoffRef = useRef(null);
  const scrollIconRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // TIMELINE INIZIALE
      const tl = gsap
        .timeline()
        .fromTo(
          videoRef.current,
          { clipPath: "circle(0% at 50% 50%)" },
          {
            clipPath: "circle(100% at 50% 50%)",
            duration: 2,
            ease: "power2.out",
          }
        )
        .fromTo(
          logoRef.current,
          { autoAlpha: 0, scale: 1.1, filter: "blur(4px)" },
          {
            autoAlpha: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.5,
            ease: "power2.out",
          },
          "<"
        )
        .fromTo(
          payoffRef.current,
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "<0.2"
        )
        .fromTo(
          scrollIconRef.current,
          { autoAlpha: 0, filter: "blur(3px)" },
          {
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.3,
            ease: "power2.out",
          },
          "<0.3"
        );

      // SCROLL ANIMATION
      const maxScroll = window.innerHeight * 5;

      gsap.to(logoRef.current, {
        scale: 6,
        z: 350,
        filter: "blur(10px)",
        opacity: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: `${maxScroll}px`,
          scrub: true,
        },
      });

      gsap.to(payoffRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: `${maxScroll}px`,
          scrub: true,
        },
      });

      gsap.to(scrollIconRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: `${maxScroll}px`,
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative w-screen h-[100vh] overflow-hidden bg-black"
    >
      {/* VIDEO DI SFONDO */}
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          ref={videoRef}
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/blurry_lights.mp4" type="video/mp4" />
        </video>
      </div>

      {/* LOGO + PAYOFF */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
        <div
          ref={logoRef}
          style={{
            width: "380px",
            height: "380px",
            maskImage: "url(/assets/logo/logo.svg)",
            WebkitMaskImage: "url(/assets/logo/logo.svg)",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            background: "radial-gradient(circle at 50% 50%, #0ff, #c26)",
          }}
        />
        <div
          ref={payoffRef}
          className={`${myFont2.className} mt-6 text-lg md:text-3xl`}
        >
          Agenzia creativa di incontri brand
        </div>
      </div>

      {/* SCROLL ICON */}
      <div
        ref={scrollIconRef}
        className="fixed inset-0 flex items-end justify-center pb-10"
      >
        <Image
          src="/assets/icons/scroll.svg"
          alt="Scroll down"
          width={28}
          height={28}
        />
      </div>
    </div>
  );
};

export default SplashScreen;
