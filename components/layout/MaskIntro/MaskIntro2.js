import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap/dist/gsap";
import Image from "next/image";
import { Icon } from "@iconify/react";

function MaskIntro2({ onAnimationEnd }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const playRef = useRef(null);
  const muteRef = useRef(null);

  const curtainLeft = useRef(null);
  const curtainRight = useRef(null);

  const [started, setStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const closeWithCurtain = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (typeof onAnimationEnd === "function") onAnimationEnd();
      },
    });

    tl.to([curtainLeft.current, curtainRight.current], {
      x: 0,
      duration: 0.8,
      ease: "power2.inOut",
    });

    tl.set(containerRef.current, {
      autoAlpha: 0,
      display: "none",
    });

    tl.to([curtainLeft.current, curtainRight.current], {
      x: (i) => (i === 0 ? "-100%" : "100%"),
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

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

    tl.to(videoRef.current, { scale: 1, duration: 2, ease: "power2.out" }, 0);
    tl.to(sel(".intro-text"), { opacity: 0, duration: 1 }, 0.5);

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

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const sel = (s) => self.selector(s);

      /** ✅ Video visibile subito dietro la maschera */
      gsap.set(videoRef.current, {
        opacity: 1,
        scale: 1.5,
        transformOrigin: "50% 50%",
        zIndex: 0,
      });

      /** ✅ Maschera sopra solo il video, ma NON sopra payoff / ENTRA */
      gsap.set(sel(".mask"), {
        zIndex: 10,
        pointerEvents: "none",
        position: "absolute",
      });

      /** ✅ Payoff sopra tutto */
      gsap.set(sel(".intro-text"), {
        opacity: 1,
        zIndex: 50,
      });

      gsap.set(muteRef.current, { opacity: 0, y: -20, zIndex: 300 });

      /** ✅ Curtains fuori schermo fin dall'inizio */
      gsap.set(curtainLeft.current, { x: "-100%", zIndex: 9999 });
      gsap.set(curtainRight.current, { x: "100%", zIndex: 9999 });

      /** ✅ animazione entrata payoff + titolo */
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

      /** ✅ split ENTRA */
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

      /** ✅ Prima onda */
      gsap.to(playBtn.querySelectorAll("span"), {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power3.out",
        delay: 1.3,
        stagger: { each: 0.08, ease: "sine.out" },
      });

      /** ✅ Dopo 3.5s ripete l’effetto se non cliccano */
      gsap.delayedCall(3.5, () => {
        if (!started) {
          gsap.to(playBtn.querySelectorAll("span"), {
            y: -5,
            yoyo: true,
            repeat: 1,
            duration: 0.35,
            ease: "power3.out",
            stagger: 0.05,
          });
        }
      });

      /** ✅ Quando finisce il video → tendine */
      if (videoRef.current) {
        videoRef.current.onended = closeWithCurtain;
      }
    }, containerRef);

    return () => ctx.revert();
  }, [onAnimationEnd]);

  return (
    <div ref={containerRef} className="fixed inset-0 Maskcontainer">
      {/* ✅ Maschera NON copre payoff e ENTRA */}
      <div className="pointer-events-none mask">
        <h2 className="titleMask">COFACTORY</h2>
      </div>

      {/* ✅ video sempre sotto */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop={false}
        className="absolute inset-0 z-0 object-cover w-full h-full"
      >
        <source src="/assets/video/showreel.mp4" type="video/mp4" />
      </video>

      {/* ✅ Payoff torna visibile */}
      <div className="absolute w-screen mt-14 lg:mt-24 flex justify-center mx-auto left-0 top-1/2 -translate-y-1/2 intro-text z-[50]">
        <Image
          src="/assets/logo_payoff_sito25.png"
          alt="Logo"
          width={600}
          height={200}
          className="mx-auto w-[300px] sm:w-[320px] 2xl:w-[520px]"
        />
      </div>

      {/* ✅ ENTRA torna visibile */}
      {!started && (
        <button
          onClick={handlePlay}
          ref={playRef}
          className="text-2xl md:text-4xl text-third font-bebas uppercase absolute z-[60] left-1/2 top-3/4 -translate-x-1/2"
          style={{ display: "flex", gap: "2px" }}
        ></button>
      )}

      {/* Mute */}
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

      {/* ✅ Curtains fuori vista finché non si chiudono */}
      <div className="w-full h-screen pointer-events-none">
        <div
          ref={curtainLeft}
          className="absolute top-0 left-0 w-1/2 h-full bg-white"
        ></div>
        <div
          ref={curtainRight}
          className="absolute top-0 right-0 w-1/2 h-full bg-second"
        ></div>
      </div>
    </div>
  );
}

export default MaskIntro2;
