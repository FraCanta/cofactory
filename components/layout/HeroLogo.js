import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroLogo() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const controlsRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const isMidDesktop =
    typeof window !== "undefined" &&
    window.innerWidth >= 768 &&
    window.innerWidth < 1600;

  const clipRefDesktop = useRef(null);
  const clipRefMid = useRef(null);
  const clipRefMobile = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const clip = isMobile
      ? clipRefMobile.current
      : isMidDesktop
      ? clipRefMid.current
      : clipRefDesktop.current;

    if (!clip) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true,
        onUpdate: (self) => {
          if (!showControls && self.progress >= 0.95) {
            setShowControls(true); // prima apparizione
          }
        },
        onLeaveBack: () => {
          // quando si chiude la clip
          if (videoRef.current) videoRef.current.muted = true;
          setIsPlaying(false);
        },
      },
    });

    tl.to(clip, {
      x: `${isMobile ? "-83%" : isMidDesktop ? "-90%" : "-68%"}`,
      ease: "power1.out",
      duration: 1,
    });

    tl.to(
      clip,
      {
        scale: `${isMobile ? "50" : isMidDesktop ? "60" : "50"}`,
        x: `${isMobile ? "150%" : isMidDesktop ? "120%" : "150%"}`,
        transformOrigin: "right center",
        ease: "power2.out",
      },
      ">0"
    );

    // Cleanup sicuro al smontaggio
    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill(); // kill solo il trigger di questa timeline
      tl.kill(); // kill la timeline
    };
  }, [isMobile, isMidDesktop, showControls]);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.muted = false; // volume attivo

      // se non è mai partito, resetta il video
      if (!hasStarted) {
        videoRef.current.currentTime = 0;
        setHasStarted(true);
      }

      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section ref={sectionRef} className="relative video-mask-section">
      <div className="mask-container">
        <svg
          width="100%"
          height="100%"
          viewBox={
            isMobile
              ? "0 0 1747.32 350.78"
              : isMidDesktop
              ? "0 0 2000 400"
              : "0 0 3493.15 700"
          }
          fill="white"
          stroke="#b2b2b2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4.88px"
        >
          {" "}
          <defs>
            {" "}
            <clipPath id="myMask" ref={clipRefDesktop} className="desktop-only">
              {" "}
              <path d="M166.34,699.07c-90.54,0-164.14-73.66-164.14-164.14V166.54C2.21,75.99,75.86,2.4,166.34,2.4h23.03c90.54,0,164.14,73.66,164.14,164.14v19.17h-106.63v-19.17c0-31.16-26.37-57.57-57.57-57.57h-23.03c-31.8,0-57.57,25.77-57.57,57.57v368.44c0,31.74,25.77,57.57,57.57,57.57h23.03c31.74,0,57.57-25.77,57.57-57.57v-19.17h106.63v19.17c0,90.54-73.66,164.14-164.14,164.14h-23.03v-.04h0ZM570.46,699.07c-90.54,0-164.14-73.66-164.14-164.14V166.54c0-90.54,73.66-164.14,164.14-164.14h23.03c90.54,0,164.14,73.66,164.14,164.14v368.44c0,90.54-73.66,164.14-164.14,164.14h-23.03v-.04h0ZM570.46,108.95c-31.8,0-57.57,25.77-57.57,57.57v368.44c0,31.74,25.77,57.57,57.57,57.57h23.03c31.74,0,57.57-25.77,57.57-57.57V166.52c0-31.74-25.77-57.57-57.57-57.57,0,0-23.03,0-23.03,0ZM839.27,699.07V2.34h300.2v106.57h-193.59v188.45h148.83v106.57h-148.83v295.08h-106.57l-.04.04v.02h0ZM1400.52,699.07l-10.67-83.58h-111.75l-10.67,83.58h-107.61L1251.25,2.34h165.96l90.98,696.74h-107.67,0ZM1292.43,508.9h83.14l-41.58-319.83-41.58,319.83h.02,0ZM1724.11,699.07c-90.54,0-164.14-73.66-164.14-164.14V166.54c0-90.54,73.66-164.14,164.14-164.14h23.03c90.54,0,164.14,73.66,164.14,164.14v19.17h-106.63v-19.17c0-31.16-26.37-57.57-57.57-57.57h-23.03c-31.8,0-57.57,25.77-57.57,57.57v368.44c0,31.74,25.77,57.57,57.57,57.57h23.03c31.74,0,57.57-25.77,57.57-57.57v-19.17h106.63v19.17c0,90.54-73.66,164.14-164.14,164.14h-23.03v-.04h0ZM2045.59,699.07V108.91h-122.32V2.34h351.33v106.57h-122.38v590.16h-106.63ZM2471.66,699.07c-90.54,0-164.14-73.66-164.14-164.14V166.54c0-90.54,73.66-164.14,164.14-164.14h23.03c90.54,0,164.14,73.66,164.14,164.14v368.44c0,90.54-73.66,164.14-164.14,164.14h-23.03v-.04h0ZM2471.66,108.95c-31.8,0-57.57,25.77-57.57,57.57v368.44c0,31.74,25.77,57.57,57.57,57.57h23.03c31.74,0,57.57-25.77,57.57-57.57V166.52c0-31.74-25.77-57.57-57.57-57.57,0,0-23.03,0-23.03,0ZM2980.32,699.07l-73.76-295.08h-59.47v295.08h-106.57V2.34h187.19c90.54,0,164.14,73.66,164.14,164.14v73.38c0,55.85-27.97,107.17-74.84,137.29l-6.46,4.16,79.48,317.81h-109.71v-.04h0ZM2847.1,297.4h80.6c20.45,0,39.52-11.05,49.74-28.75,5.04-8.06,7.82-18.15,7.82-28.75v-73.38c0-31.74-25.77-57.57-57.57-57.57h-80.6v188.45h.01ZM3248.75,699.07v-286.92L3111.74,2.34h101.01l89.12,305.25L3389.82,2.48l102.07-.14-135.97,405.18-.54,291.56h-106.63Z" />{" "}
            </clipPath>{" "}
            <clipPath
              id="myMaskMid"
              ref={clipRefMid}
              className="mid-desktop-only"
            >
              {" "}
              <path d="M125.13,523.98c-67.86,0-123.03-55.21-123.03-123.03V124.84C2.1,56.99,57.31,1.82,125.13,1.82h17.27c67.86,0,123.03,55.21,123.03,123.03v14.37h-79.91v-14.37c0-23.35-19.76-43.15-43.15-43.15h-17.27c-23.83,0-43.15,19.32-43.15,43.15v276.15c0,23.79,19.32,43.15,43.15,43.15h17.27c23.79,0,43.15-19.32,43.15-43.15v-14.37h79.91v14.37c0,67.86-55.21,123.03-123.03,123.03h-17.27v-.04h0ZM428,523.98c-67.86,0-123.03-55.21-123.03-123.03V124.84c0-67.86,55.21-123.03,123.03-123.03h17.27c67.86,0,123.03,55.21,123.03,123.03v276.15c0,67.86-55.21,123.03-123.03,123.03h-17.27v-.04h0ZM428,81.69c-23.83,0-43.15,19.32-43.15,43.15v276.15c0,23.79,19.32,43.15,43.15,43.15h17.27c23.79,0,43.15-19.32,43.15-43.15V124.84c0-23.79-19.32-43.15-43.15-43.15h-17.27ZM629.47,523.98V1.78h225.01v79.87h-145.1v141.24h111.55v79.87h-111.55v221.16h-79.87l-.04.04h0ZM1050.13,523.98l-7.99-62.65h-83.77l-7.99,62.65h-80.65L938.25,1.78h124.38l68.19,522.2h-80.68,0,0ZM969.12,381.45h62.32l-31.16-239.71-31.16,239.71h0ZM1292.66,523.98c-67.86,0-123.03-55.21-123.03-123.03V124.84c0-67.86,55.21-123.03,123.03-123.03h17.27c67.86,0,123.03,55.21,123.03,123.03v14.37h-79.91v-14.37c0-23.35-19.76-43.15-43.15-43.15h-17.27c-23.83,0-43.15,19.32-43.15,43.15v276.15c0,23.79,19.32,43.15,43.15,43.15h17.27c23.79,0,43.15-19.32,43.15-43.15v-14.37h79.91v14.37c0,67.86-55.21,123.03-123.03,123.03h-17.27v-.04h0ZM1533.62,523.98V81.66h-91.68V1.78h263.32v79.87h-91.72v442.32h-79.92ZM1852.95,523.98c-67.86,0-123.03-55.21-123.03-123.03V124.84c0-67.86,55.21-123.03,123.03-123.03h17.27c67.86,0,123.03,55.21,123.03,123.03v276.15c0,67.86-55.21,123.03-123.03,123.03h-17.27v-.04ZM1852.95,81.69c-23.83,0-43.15,19.32-43.15,43.15v276.15c0,23.79,19.32,43.15,43.15,43.15h17.27c23.79,0,43.15-19.32,43.15-43.15V124.84c0-23.79-19.32-43.15-43.15-43.15h-17.27ZM2234.19,523.98l-55.28-221.16h-44.58v221.16h-79.87V1.78h140.29c67.86,0,123.03,55.21,123.03,123.03v54.99c0,41.86-20.97,80.32-56.09,102.9l-4.84,3.11,59.57,238.21h-82.23v-.04h0ZM2134.34,222.94h60.42c15.32,0,29.62-8.29,37.28-21.56,3.77-6.05,5.87-13.6,5.87-21.56v-54.99c0-23.79-19.32-43.15-43.15-43.15h-60.42v141.24h0ZM2435.38,523.98v-215.04L2332.7,1.77h75.7l66.79,228.78L2541.1,1.88l76.51-.11-101.91,303.68-.4,218.52h-79.91s0,0,0,0Z" />{" "}
            </clipPath>{" "}
            <clipPath id="myMask1" ref={clipRefMobile} className="mobile-only">
              {" "}
              <path d="M84.03,350.1c-45.25,0-82.03-36.81-82.03-82.03V83.96C2,38.71,38.81,1.93,84.03,1.93h11.51c45.25,0,82.03,36.81,82.03,82.03v9.58h-53.29v-9.58c0-15.57-13.18-28.77-28.77-28.77h-11.51c-15.89,0-28.77,12.88-28.77,28.77v184.13c0,15.86,12.88,28.77,28.77,28.77h11.51c15.86,0,28.77-12.88,28.77-28.77v-9.58h53.29v9.58c0,45.25-36.81,82.03-82.03,82.03h-11.51s0-.02,0-.02ZM285.99,350.1c-45.25,0-82.03-36.81-82.03-82.03V83.96c0-45.25,36.81-82.03,82.03-82.03h11.51c45.25,0,82.03,36.81,82.03,82.03v184.13c0,45.25-36.81,82.03-82.03,82.03h-11.51v-.02ZM285.99,55.18c-15.89,0-28.77,12.88-28.77,28.77v184.13c0,15.86,12.88,28.77,28.77,28.77h11.51c15.86,0,28.77-12.88,28.77-28.77V83.95c0-15.86-12.88-28.77-28.77-28.77,0,0-11.51,0-11.51,0ZM420.33,350.1V1.9h150.03v53.26h-96.75v94.18h74.38v53.26h-74.38v147.47h-53.26l-.02.02h0ZM700.82,350.1l-5.33-41.77h-55.85l-5.33,41.77h-53.78L626.22,1.9h82.94l45.47,348.2h-53.81ZM646.8,255.06h41.55l-20.78-159.84-20.78,159.84h.01ZM862.54,350.1c-45.25,0-82.03-36.81-82.03-82.03V83.96c0-45.25,36.81-82.03,82.03-82.03h11.51c45.25,0,82.03,36.81,82.03,82.03v9.58h-53.29v-9.58c0-15.57-13.18-28.77-28.77-28.77h-11.51c-15.89,0-28.77,12.88-28.77,28.77v184.13c0,15.86,12.88,28.77,28.77,28.77h11.51c15.86,0,28.77-12.88,28.77-28.77v-9.58h53.29v9.58c0,45.25-36.81,82.03-82.03,82.03h-11.51v-.02h0ZM1023.2,350.1V55.16h-61.13V1.9h175.58v53.26h-61.16v294.94h-53.29ZM1236.13,350.1c-45.25,0-82.03-36.81-82.03-82.03V83.96c0-45.25,36.81-82.03,82.03-82.03h11.51c45.25,0,82.03,36.81,82.03,82.03v184.13c0,45.25-36.81,82.03-82.03,82.03h-11.51v-.02ZM1236.13,55.18c-15.89,0-28.77,12.88-28.77,28.77v184.13c0,15.86,12.88,28.77,28.77,28.77h11.51c15.86,0,28.77-12.88,28.77-28.77V83.95c0-15.86-12.88-28.77-28.77-28.77,0,0-11.51,0-11.51,0ZM1490.34,350.1l-36.86-147.47h-29.72v147.47h-53.26V1.9h93.55c45.25,0,82.03,36.81,82.03,82.03v36.67c0,27.91-13.98,53.56-37.4,68.61l-3.23,2.08,39.72,158.83h-54.83v-.02h0ZM1423.76,149.36h40.28c10.22,0,19.75-5.52,24.86-14.37,2.52-4.03,3.91-9.07,3.91-14.37v-36.67c0-15.86-12.88-28.77-28.77-28.77h-40.28v94.18h0ZM1624.49,350.1v-143.39L1556.02,1.9h50.48l44.54,152.55L1694.99,1.97l51.01-.07-67.95,202.49-.27,145.71h-53.29Z" />{" "}
            </clipPath>{" "}
          </defs>{" "}
        </svg>
      </div>

      <div
        className="relative video-wrapper"
        style={{
          clipPath: isMobile
            ? "url(#myMask1)"
            : isMidDesktop
            ? "url(#myMaskMid)"
            : "url(#myMask)",
        }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onClick={() => setHovering(true)}
      >
        <video
          ref={videoRef}
          src="/assets/video/showreel.mp4"
          playsInline
          autoPlay
          loop
          muted
          controls
          className="object-cover w-full h-full video-element"
          onEnded={() => {
            if (videoRef.current) videoRef.current.muted = true;
            setIsPlaying(false);
          }}
        />

        {/* Bottone play/pause */}
        {showControls && (
          <div
            ref={controlsRef}
            onClick={togglePlay}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
              bg-[#FAB02C] rounded-full p-6 lg:p-8 cursor-pointer flex items-center justify-center z-20
              transition-opacity duration-300
              ${
                hovering
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white lg:w-16 lg:h-16"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M6 4h2v12H6V4zm6 0h2v12h-2V4z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white lg:w-16 lg:h-16"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.75 17A.75.75 0 0 1 5 16.25V3.75a.75.75 0 0 1 1.266-.57l10 6a.75.75 0 0 1 0 1.14l-10 6A.75.75 0 0 1 5.75 17z"
                />
              </svg>
            )}
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 left-6 lg:left-20 lg:bottom-10 flex items-center gap-[1.2rem]">
        <p className="text-sm text-white uppercase lg:text-lg font-raleway">
          Scroll to discover
        </p>
        <div className="relative w-[4rem] lg:w-[6rem] h-[1.5px] overflow-hidden animate-scroll-indicator"></div>
      </div>
    </section>
  );
}
