import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap/dist/gsap";
import Image from "next/image";
import { Icon } from "@iconify/react";

function MaskIntro2({ onAnimationEnd }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const playRef = useRef(null);
  const muteRef = useRef(null);

  // ✅ curtains fuori dal container
  const curtainLeft = useRef(null);
  const curtainRight = useRef(null);

  const [started, setStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // ✅ CHIUSURA + RIAPERTURA tende
  const closeWithCurtain = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (typeof onAnimationEnd === "function") onAnimationEnd();
      },
    });

    // 1️⃣ chiusura
    tl.to([curtainLeft.current, curtainRight.current], {
      x: 0,
      duration: 1,
      ease: "power2.inOut",
    });

    // 2️⃣ rimuovo la maschera SUBITO (così non si vede nero)
    tl.set(containerRef.current, { display: "none" });

    // 3️⃣ riapertura → mostra la home sotto
    tl.to([curtainLeft.current, curtainRight.current], {
      x: (i) => (i === 0 ? "-100%" : "100%"),
      duration: 1,
      ease: "power2.inOut",
    });
  };

  // ✅ CLICK "ENTRA"
  const handlePlay = () => {
    if (started) return;
    setStarted(true);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      videoRef.current.loop = false;
      videoRef.current.play().catch(() => {});
      setIsMuted(false);
    }

    const sel = gsap.utils.selector(containerRef);
    const tl = gsap.timeline();

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

    tl.to(sel(".intro-text"), { opacity: 0, duration: 1 }, 0.3);

    tl.to(videoRef.current, { scale: 1, duration: 2, ease: "power2.out" }, 0);

    gsap.to(muteRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay: 1,
      ease: "power2.out",
    });
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nowMuted = !isMuted;
    videoRef.current.muted = nowMuted;
    setIsMuted(nowMuted);
  };

  // ✅ controlla fine video (0.3s prima)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (!started) return;
      if (video.duration - video.currentTime <= 0.3) {
        video.pause();
        closeWithCurtain();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [started]);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const sel = (s) => self.selector(s);

      gsap.set(videoRef.current, {
        opacity: 1,
        scale: 1.5,
        transformOrigin: "50% 50%",
      });

      gsap.set(sel(".mask"), { zIndex: 5, position: "absolute" });
      gsap.set(sel(".intro-text"), { opacity: 1 });

      gsap.set(muteRef.current, { opacity: 0, y: -20, zIndex: 300 });

      // ✅ curtains PARTONO APERTE
      gsap.set(curtainLeft.current, { x: "-100%" });
      gsap.set(curtainRight.current, { x: "100%" });

      // ✅ ingresso titolo + payoff
      gsap.fromTo(
        [sel("h2"), sel(".intro-text")],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        }
      );

      // ✅ crea animazione ENTRA
      const text = "ENTRA";
      const playBtn = playRef.current;
      if (playBtn) {
        playBtn.innerHTML = "";
        [...text].forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char;
          span.style.display = "inline-block";
          span.style.opacity = 0;
          span.style.transform = "translateY(20px)";
          playBtn.appendChild(span);
        });
      }
      if (!playBtn) return;

      gsap.to(playBtn.querySelectorAll("span"), {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power3.out",
        delay: 1.2,
        stagger: { each: 0.08, ease: "sine.out" },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ✅ MASK CONTAINER */}
      <div ref={containerRef} className="fixed inset-0 Maskcontainer">
        <div className="mask">
          <h2 className="titleMask">COFACTORY</h2>
        </div>

        {/* VIDEO */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop={false}
          className="absolute inset-0 object-cover w-full h-full"
        >
          <source src="/assets/video/showreel.mp4" type="video/mp4" />
        </video>

        {/* PAYOFF */}
        <div className="absolute w-screen mt-14 lg:mt-24 flex justify-center mx-auto left-0 top-1/2 -translate-y-1/2 intro-text z-[100]">
          <Image
            src="/assets/logo_payoff_sito25.png"
            alt="Logo"
            width={600}
            height={200}
            className="mx-auto w-[300px] sm:w-[320px] 2xl:w-[520px]"
          />
        </div>

        {/* ENTRA */}
        {!started && (
          <button
            onClick={handlePlay}
            ref={playRef}
            className="text-2xl md:text-4xl text-third font-bebas uppercase absolute z-[200] left-1/2 top-3/4 -translate-x-1/2"
            style={{ display: "flex", gap: "2px" }}
          ></button>
        )}

        {/* AUDIO BUTTON */}
        <button
          ref={muteRef}
          onClick={toggleMute}
          className="absolute bottom-8 right-8 z-[300] text-white text-3xl"
        >
          {isMuted ? (
            <Icon icon="mdi:volume-off" width={34} height={34} />
          ) : (
            <Icon icon="mdi:volume-high" width={34} height={34} />
          )}
        </button>
      </div>

      <div className="fixed inset-0 pointer-events-none z-[9999]">
        {/* Curtain sinistro */}
        <div
          ref={curtainLeft}
          className="absolute top-0 left-0 flex items-center justify-center w-1/2 h-full bg-third dark:bg-white"
        >
          <div className="relative w-12 h-12 md:w-20 md:h-20">
            <Image
              src="/assets/logo/per1.svg"
              alt="Logo Cofactory"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Curtain destro */}
        <div
          ref={curtainRight}
          className="absolute top-0 right-0 flex items-center justify-center w-1/2 h-full bg-third dark:bg-white"
        >
          <div className="relative w-12 h-12 md:w-20 md:h-20">
            <Image
              src="/assets/logo/per2.svg"
              alt="Logo Cofactory"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MaskIntro2;
