import React, { useEffect, useRef } from "react";
import BlurryLights from "../BlurryLights";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import Lenis from "@studio-freight/lenis";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function MaskIntro({ onAnimationEnd }) {
  const stickyMask = useRef(null);
  const payoffRef = useRef(null);
  const container = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const isDesktop = window.innerWidth > 768;

    // Lenis solo su desktop
    let lenis;
    if (isDesktop) {
      lenis = new Lenis({ duration: 1.2, easing: (t) => t, smooth: true });
      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    }
    const ctx = gsap.context(() => {
      // Mostra payoff e mask all’inizio
      gsap.to([stickyMask.current, payoffRef.current], {
        opacity: 1,
        duration: 1.5,
        delay: 0.3,
        pin: 1,
        ease: "power2.out",
        onComplete: () => {
          // Mostra scroll svg solo dopo che mask e payoff sono visibili
          gsap.to(scrollRef.current, {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          });
        },
      });

      const style = window.getComputedStyle(stickyMask.current);
      const initialMask =
        parseFloat(style.maskSize) || parseFloat(style.webkitMaskSize) || 35;

      const scaleFactor = 800;
      let animationLocked = false;

      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: "50% top",
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          if (!stickyMask.current || !payoffRef.current || !container.current)
            return;

          const progress = self.progress;

          if (!animationLocked) {
            // fade payoff solo
            const fade = 1 - progress * 2;
            payoffRef.current.style.opacity = fade < 0 ? 0 : fade;

            // fade container insieme alla mask
            container.current.style.opacity = 1 - progress;

            // mask size con easing
            const easedProgress = gsap.parseEase("power3.out")(progress);
            const newSize = `${initialMask + easedProgress * scaleFactor}%`;
            stickyMask.current.style.maskSize = newSize;
            stickyMask.current.style.webkitMaskSize = newSize;

            // scompare mask e container completamente
            if (progress >= 1) {
              animationLocked = true;
              gsap.to(stickyMask.current, { opacity: 0, duration: 0.3 });
              gsap.to(container.current, { opacity: 0, duration: 0.3 });
              gsap.to(scrollRef.current, { opacity: 0, duration: 0.3 });
            }
          }
        },
        onLeave: () => {
          if (lenis) lenis.stop(); // <-- ferma Lenis prima dello scroll
          gsap.to(window, {
            scrollTo: 0,
            duration: 0.2,
            ease: "sine.in",
            onComplete: () => {
              onAnimationEnd();
            },
          });
        },
      });
    }, container);

    return () => ctx.revert();
  }, [onAnimationEnd]);

  return (
    <main className="relative mainMask">
      <div className="absolute inset-0 pointer-events-none -z-10">
        <BlurryLights />
      </div>

      <div
        ref={container}
        className="Maskcontainer"
        style={{ backgroundColor: "white" }}
      >
        <div ref={stickyMask} className="opacity-0 stickyMask">
          <div className="video">
            <BlurryLights />
          </div>
        </div>

        <div ref={payoffRef} className="z-20 w-full payoffContainer">
          <Image
            src="/assets/logo_payoff_sito25.png"
            alt="Logo"
            width={600}
            height={200}
            className="mx-auto w-[300px] sm:w-[320px] 2xl:w-[600px] 2xla:w-[750px]"
          />
        </div>

        <div ref={scrollRef} className="scrollRef">
          <div className="mouse-icon">
            <svg
              width="19"
              height="30"
              viewBox="0 0 19 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.875 20.625V9.375C16.875 7.38588 16.0848 5.47822 14.6783 4.0717C13.2718 2.66518 11.3641 1.875 9.375 1.875C7.38588 1.875 5.47822 2.66518 4.0717 4.0717C2.66518 5.47822 1.875 7.38588 1.875 9.375V20.625C1.875 22.6141 2.66518 24.5218 4.0717 25.9283C5.47822 27.3348 7.38588 28.125 9.375 28.125C11.3641 28.125 13.2718 27.3348 14.6783 25.9283C16.0848 24.5218 16.875 22.6141 16.875 20.625ZM9.375 0C6.8886 0 4.50403 0.98772 2.74587 2.74587C0.98772 4.50403 0 6.8886 0 9.375V20.625C0 23.1114 0.98772 25.496 2.74587 27.2541C4.50403 29.0123 6.8886 30 9.375 30C11.8614 30 14.246 29.0123 16.0041 27.2541C17.7623 25.496 18.75 23.1114 18.75 20.625V9.375C18.75 6.8886 17.7623 4.50403 16.0041 2.74587C14.246 0.98772 11.8614 0 9.375 0Z"
                fill="#1b1b1c"
                className="mouse"
              ></path>
              <path
                d="M10.0379 7.39959C9.8621 7.22377 9.62364 7.125 9.375 7.125C9.12636 7.125 8.8879 7.22377 8.71209 7.39959C8.53627 7.5754 8.4375 7.81386 8.4375 8.0625V11.8125C8.4375 12.0611 8.53627 12.2996 8.71209 12.4754C8.8879 12.6512 9.12636 12.75 9.375 12.75C9.62364 12.75 9.8621 12.6512 10.0379 12.4754C10.2137 12.2996 10.3125 12.0611 10.3125 11.8125V8.0625C10.3125 7.81386 10.2137 7.5754 10.0379 7.39959Z"
                fill="#1b1b1c"
                className="cursor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MaskIntro;
