import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroLogo() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const controlsRef = useRef(null);

  const clipRefDesktop = useRef(null);
  const clipRefMid = useRef(null);
  const clipRefExtra = useRef(null); // ✅ nuovo ref per >2560px
  const clipRefLarge = useRef(null); // ✅ nuovo ref per >4000px

  const [windowWidth, setWindowWidth] = useState(null);
  const [showControls, setShowControls] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useLayoutEffect(() => {
    if (!sectionRef.current || windowWidth === null) return;

    const section = sectionRef.current;

    const clip =
      windowWidth < 768 || (windowWidth >= 901 && windowWidth <= 1600)
        ? clipRefMid.current
        : windowWidth > 3999
        ? clipRefLarge.current
        : windowWidth > 2559
        ? clipRefExtra.current
        : clipRefDesktop.current;

    if (!clip) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "600% top",
        scrub: 2,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          // mostra i controlli a fine animazione
          if (!showControls && self.progress >= 0.95) setShowControls(true);

          // segna quando l’animazione è effettivamente partita
          if (!hasStarted && self.progress > 0.05) setHasStarted(true);
        },
        onLeaveBack: () => {
          if (videoRef.current) videoRef.current.muted = true;
          setIsPlaying(false);
          setHasStarted(false);
        },
      },
    });

    // valori dinamici per breakpoints
    let xInitial, xFinal, scaleFinal;

    if (windowWidth < 768) {
      xInitial = "-115%";
      xFinal = "160%";
      scaleFinal = 60;
    } else if (windowWidth >= 768 && windowWidth <= 900) {
      xInitial = "-80%";
      xFinal = "140%";
      scaleFinal = 55;
    } else if (windowWidth >= 901 && windowWidth <= 1600) {
      xInitial = "-90%";
      xFinal = "160%";
      scaleFinal = 60;
    } else if (windowWidth > 3999) {
      // ✅ nuova condizione per 4K+
      xInitial = "-72%";
      xFinal = "140%";
      scaleFinal = 40;
    } else if (windowWidth > 2559) {
      xInitial = "-70%";
      xFinal = "180%";
      scaleFinal = 45;
    } else {
      xInitial = "-68%";
      xFinal = "200%";
      scaleFinal = 50;
    }

    // animazioni
    tl.to(clip, {
      x: xInitial,
      ease: "power1.out",
      duration: 1,
    });

    tl.to(
      clip,
      {
        scale: scaleFinal,
        x: xFinal,
        transformOrigin: "right center",
        ease: "power2.out",
      },
      ">0"
    );

    return () => ScrollTrigger.killAll();
  }, [windowWidth, showControls, hasStarted]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.muted = false;
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

  // ✅ Scelta clipPath dinamica anche nel render
  const currentClipId =
    windowWidth < 768 || (windowWidth >= 901 && windowWidth <= 1600)
      ? "myMaskMid"
      : windowWidth > 3999
      ? "myMaskLarge"
      : windowWidth > 2559
      ? "myMaskExtra"
      : "myMask";

  return (
    <section ref={sectionRef} className="relative video-mask-section">
      <div className="mask-container">
        <svg
          width="100%"
          height="100%"
          viewBox={
            currentClipId === "myMaskMid"
              ? "0 0 2000 400"
              : currentClipId === "myMaskExtra"
              ? "0 0 5002.5 1000"
              : currentClipId === "myMaskLarge"
              ? "0 0 9964.54 2000"
              : "0 0 3493.15 700"
          }
          fill="white"
          stroke="#b2b2b2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4.88px"
        >
          <defs>
            {/* Clip desktop grande */}{" "}
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
            </clipPath>
            <clipPath
              id="myMaskExtra"
              ref={clipRefExtra}
              className="extra-desktop-only"
            >
              {" "}
              <path d="M240.05,998.1c-129.37,0-234.53-105.25-234.53-234.53V237.2C5.53,107.82,110.77,2.67,240.05,2.67h32.91c129.37,0,234.53,105.25,234.53,234.53v27.39h-152.36v-27.39c0-44.52-37.68-82.26-82.26-82.26h-32.91c-45.44,0-82.26,36.82-82.26,82.26v526.44c0,45.35,36.82,82.26,82.26,82.26h32.91c45.35,0,82.26-36.82,82.26-82.26v-27.39h152.36v27.39c0,129.37-105.25,234.53-234.53,234.53h-32.91v-.06h0ZM817.47,998.1c-129.37,0-234.53-105.25-234.53-234.53V237.2c0-129.37,105.25-234.53,234.53-234.53h32.91c129.37,0,234.53,105.25,234.53,234.53v526.44c0,129.37-105.25,234.53-234.53,234.53h-32.91v-.06h0ZM817.47,154.91c-45.44,0-82.26,36.82-82.26,82.26v526.44c0,45.35,36.82,82.26,82.26,82.26h32.91c45.35,0,82.26-36.82,82.26-82.26V237.17c0-45.35-36.82-82.26-82.26-82.26,0,0-32.91,0-32.91,0ZM1201.56,998.1V2.59h428.94v152.27h-276.61v269.26h212.65v152.27h-212.65v421.62h-152.27l-.06.06v.03h0ZM2003.49,998.1l-15.25-119.42h-159.67l-15.25,119.42h-153.76L1790.21,2.59h237.13l130,995.53h-153.84,0ZM1849.05,726.38h118.79l-59.41-456.99-59.41,456.99h.03,0ZM2465.85,998.1c-129.37,0-234.53-105.25-234.53-234.53V237.2c0-129.37,105.25-234.53,234.53-234.53h32.91c129.37,0,234.53,105.25,234.53,234.53v27.39h-152.36v-27.39c0-44.52-37.68-82.26-82.26-82.26h-32.91c-45.44,0-82.26,36.82-82.26,82.26v526.44c0,45.35,36.82,82.26,82.26,82.26h32.91c45.35,0,82.26-36.82,82.26-82.26v-27.39h152.36v27.39c0,129.37-105.25,234.53-234.53,234.53h-32.91v-.06h0ZM2925.19,998.1V154.86h-174.78V2.59h501.99v152.27h-174.86v843.24h-152.36ZM3533.98,998.1c-129.37,0-234.53-105.25-234.53-234.53V237.2c0-129.37,105.25-234.53,234.53-234.53h32.91c129.37,0,234.53,105.25,234.53,234.53v526.44c0,129.37-105.25,234.53-234.53,234.53h-32.91v-.06h0ZM3533.98,154.91c-45.44,0-82.26,36.82-82.26,82.26v526.44c0,45.35,36.82,82.26,82.26,82.26h32.91c45.35,0,82.26-36.82,82.26-82.26V237.17c0-45.35-36.82-82.26-82.26-82.26,0,0-32.91,0-32.91,0ZM4260.77,998.1l-105.39-421.62h-84.97v421.62h-152.27V2.59h267.46c129.37,0,234.53,105.25,234.53,234.53v104.85c0,79.8-39.96,153.13-106.93,196.17l-9.23,5.94,113.56,454.1h-156.76v-.06h0ZM4070.42,424.18h115.16c29.22,0,56.47-15.79,71.07-41.08,7.2-11.52,11.17-25.93,11.17-41.08v-104.85c0-45.35-36.82-82.26-82.26-82.26h-115.16v269.26h.01ZM4644.32,998.1v-409.96L4448.55,2.59h144.33l127.34,436.15L4845.88,2.79l145.84-.2-194.28,578.94-.77,416.59h-152.36Z" />
            </clipPath>
            <clipPath
              id="myMaskLarge"
              ref={clipRefLarge}
              className="large-desktop-only"
            >
              {" "}
              <path
                class="st0"
                d="M471.86,1994.11c-258.34,0-468.34-210.17-468.34-468.34V474.65C3.55,216.28,213.69,6.31,471.86,6.31h65.71c258.34,0,468.34,210.17,468.34,468.34v54.7h-304.25v-54.7c0-88.91-75.24-164.26-164.26-164.26h-65.71c-90.73,0-164.26,73.53-164.26,164.26v1051.27c0,90.56,73.53,164.26,164.26,164.26h65.71c90.56,0,164.26-73.53,164.26-164.26v-54.7h304.25v54.7c0,258.34-210.17,468.34-468.34,468.34h-65.71v-.11h0v-.03ZM1624.93,1994.11c-258.34,0-468.34-210.17-468.34-468.34V474.65c0-258.34,210.17-468.34,468.34-468.34h65.71c258.34,0,468.34,210.17,468.34,468.34v1051.27c0,258.34-210.17,468.34-468.34,468.34h-65.71v-.11h0v-.03ZM1624.93,310.33c-90.73,0-164.26,73.53-164.26,164.26v1051.27c0,90.56,73.53,164.26,164.26,164.26h65.71c90.56,0,164.26-73.53,164.26-164.26V474.59c0-90.56-73.53-164.26-164.26-164.26,0,0-65.71,0-65.71,0ZM2391.92,1994.11V6.14h856.56v304.08h-552.37v537.7h424.66v304.08h-424.66v841.95h-304.08l-.11.11v.06h0ZM3993.33,1994.11l-30.44-238.48h-318.86l-30.44,238.48h-307.04L3567.42,6.14h473.53l259.59,1988h-307.21v-.03ZM3684.92,1451.5h237.22l-118.64-912.57-118.64,912.57h.06,0ZM4916.63,1994.11c-258.34,0-468.34-210.17-468.34-468.34V474.65c0-258.34,210.17-468.34,468.34-468.34h65.71c258.34,0,468.34,210.17,468.34,468.34v54.7h-304.25v-54.7c0-88.91-75.24-164.26-164.26-164.26h-65.71c-90.73,0-164.26,73.53-164.26,164.26v1051.27c0,90.56,73.53,164.26,164.26,164.26h65.71c90.56,0,164.26-73.53,164.26-164.26v-54.7h304.25v54.7c0,258.34-210.17,468.34-468.34,468.34h-65.71v-.11h0v-.03ZM5833.91,1994.11V310.21h-349.01V6.14h1002.45v304.08h-349.19v1683.9h-304.25ZM7049.61,1994.11c-258.34,0-468.34-210.17-468.34-468.34V474.65c0-258.34,210.17-468.34,468.34-468.34h65.71c258.34,0,468.34,210.17,468.34,468.34v1051.27c0,258.34-210.17,468.34-468.34,468.34h-65.71v-.11h0v-.03ZM7049.61,310.33c-90.73,0-164.26,73.53-164.26,164.26v1051.27c0,90.56,73.53,164.26,164.26,164.26h65.71c90.56,0,164.26-73.53,164.26-164.26V474.59c0-90.56-73.53-164.26-164.26-164.26,0,0-65.71,0-65.71,0ZM8500.96,1994.11l-210.46-841.95h-169.69v841.95h-304.08V6.14h534.11c258.34,0,468.34,210.17,468.34,468.34v209.37c0,159.36-79.81,305.79-213.54,391.73l-18.43,11.87,226.78,906.8h-313.03v-.11h0v-.03ZM8120.85,848.03h229.98c58.35,0,112.76-31.53,141.92-82.03,14.38-23,22.31-51.79,22.31-82.03v-209.37c0-90.56-73.53-164.26-164.26-164.26h-229.98v537.7h.03ZM9266.87,1994.11v-818.67L8875.94,6.14h288.21l254.29,870.97L9669.39,6.54l291.24-.4-387.96,1156.1-1.54,831.91h-304.25v-.03Z"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div
        className="relative video-wrapper"
        style={{
          clipPath: `url(#${currentClipId})`,
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
      <div className="absolute bottom-10 2xs:bottom-4 sm:bottom-10 left-6 lg:left-20 flex items-center gap-[1.2rem]">
        <p className="text-sm text-white uppercase lg:text-lg 3xl:text-2xl 4xl:text-5xl font-raleway">
          Scroll to discover
        </p>
        <div className="relative w-[4rem] lg:w-[6rem] h-[1.5px] 4xl:w-[12rem] 4xl:h-[3px] overflow-hidden animate-scroll-indicator"></div>
      </div>
    </section>
  );
}
