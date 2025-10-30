import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap/dist/gsap";
import Image from "next/image";
import { Icon } from "@iconify/react";

function MaskIntro2({ onAnimationEnd }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const playRef = useRef(null);
  const skipRef = useRef(null);
  const [started, setStarted] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const sel = (s) => self.selector(s);

      // --- Stato iniziale ---
      gsap.set(videoRef.current, {
        opacity: 1,
        scale: 1.5,
        transformOrigin: "50% 50%",
      });
      gsap.set(sel(".mask"), { zIndex: 5, position: "relative" });
      gsap.set(sel(".intro-text"), { opacity: 1 });
      gsap.set(playRef.current, { opacity: 1, zIndex: 200 });
      gsap.set(skipRef.current, { opacity: 0, y: -20, zIndex: 300 });

      // --- Timeline chiusura maschera ---
      const playAutoClose = () => {
        const tlClose = gsap.timeline({
          onComplete: () => {
            if (typeof onAnimationEnd === "function") onAnimationEnd();
          },
        });

        tlClose.to(sel("h2"), {
          scale: 1,
          duration: 2,
          ease: "power2.inOut",
        });
        tlClose.to(
          skipRef.current,
          { opacity: 0, duration: 0.3, ease: "power2.out" },
          "<"
        );
        tlClose.to(
          containerRef.current,
          { autoAlpha: 0, duration: 2, ease: "power2.out" },
          "-=0.3"
        );
      };

      // --- Video: onended ---
      if (videoRef.current) {
        videoRef.current.onended = () => {
          playAutoClose();
        };
      }

      // --- Skip button ---
      skipRef.current.onclick = () => playAutoClose();
    }, containerRef);

    return () => ctx.revert();
  }, [onAnimationEnd]);

  const handlePlay = () => {
    setStarted(true);

    if (videoRef.current) {
      videoRef.current.currentTime = 0; // riparte dall'inizio
      videoRef.current.muted = false; // audio attivo
      videoRef.current.loop = false; // non loop dopo il click
      videoRef.current.play().catch(() => {});
    }

    // Timeline animazione maschera iniziale
    const sel = gsap.utils.selector(containerRef);
    const tl = gsap.timeline();

    // Maschera esplode e video cresce
    tl.to(
      sel("h2"),
      {
        scale: 300,
        transformOrigin: "46% center",
        duration: 2,
        ease: "power2.out",
      },
      0
    );
    tl.to(videoRef.current, { scale: 1, duration: 2, ease: "power2.out" }, 0);

    // Logo/payoff + Play spariscono
    tl.to(
      [sel(".intro-text"), playRef.current],
      { opacity: 0, duration: 1 },
      0.5
    );

    // Skip appare con fade/slide
    gsap.to(skipRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay: 1,
      ease: "power2.out",
    });
  };

  return (
    <div ref={containerRef}>
      {/* Video muto sotto maschera prima del click */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source src="/assets/video/showreel.mp4" type="video/mp4" />
      </video>

      {/* Maschera */}
      <div className="mask">
        <h2>COFACTORY</h2>
      </div>

      {/* Logo/Payoff */}
      <div className="absolute w-full mt-14 lg:mt-20 -translate-x-1/2 -translate-y-1/2   z-[100] left-1/2 top-1/2 intro-text">
        <Image
          src="/assets/logo_payoff_sito25.png"
          alt="Logo"
          width={600}
          height={200}
          className="mx-auto w-[300px] sm:w-[320px] 2xl:w-[520px] "
        />
      </div>

      {/* Bottone Play iniziale */}
      {!started && (
        <button
          onClick={handlePlay}
          ref={playRef}
          className="fill_cta  flex items-center lg:w-max-content text-center text-second text-xl md:text-2xl font-bold leading-snug py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl  border-2 border-second transition duration-[0.25s] uppercase absolute mt-32 z-[200] -translate-x-1/2 translate-y-1/2  left-1/2 top-1/2 cursor-pointer "
        >
          play <Icon icon="ri:play-fill" width="24" height="24" />
        </button>
      )}

      {/* Pulsante Skip */}
      <button
        ref={skipRef}
        className="fill_cta  flex items-center lg:w-max-content text-center text-second text-xl md:text-2xl font-bold leading-snug py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl  border-2 border-second  duration-[0.25s] uppercase absolute  transition  bottom-10 right-10 "
      >
        Skip <Icon icon="ic:baseline-skip-next" width="24" height="24" />
      </button>
    </div>
  );
}

export default MaskIntro2;
