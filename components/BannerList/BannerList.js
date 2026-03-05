import Image from "next/image";
import { MaskText } from "../MaskText";
import { useRef, useState, useEffect } from "react";
import ParallaxText from "../ParallaxText";
import { Icon } from "@iconify/react";
import CtaMarquee from "../Cta/CtaMarquee";

function BannerList({ translation, id }) {
  return (
    <div className="flex flex-col w-full" id={id}>
      <div className="z-50 w-full py-10 mx-auto overflow-hidden bg-third dark:bg-white">
        {" "}
        <ParallaxText marqueeText={translation.marqueeLink} />
      </div>

      {translation.cases.map((item, index) => (
        <HoverBanner key={index} item={item} />
      ))}
      <div className="z-50 w-full py-10 mx-auto overflow-hidden bg-third dark:bg-white">
        {" "}
        <ParallaxText marqueeText={translation.marqueeLink} />
      </div>
    </div>
  );
}

function HoverBanner({ item }) {
  const [hovered, setHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [previousVolume, setPreviousVolume] = useState(0.5);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);

  const videoRef = useRef(null);
  const containerRef = useRef(null);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // sotto lg
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // init audio
  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.volume = volume;
    videoRef.current.muted = true;
  }, []);

  // auto mute fuori viewport
  useEffect(() => {
    if (!containerRef.current || !videoRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          videoRef.current.muted = true;
          setIsMuted(true);
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;

    if (videoRef.current.muted || videoRef.current.volume === 0) {
      const restoreVolume = previousVolume || 0.5;
      videoRef.current.muted = false;
      videoRef.current.volume = restoreVolume;
      setVolume(restoreVolume);
      setIsMuted(false);
    } else {
      setPreviousVolume(videoRef.current.volume);
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative z-50 w-full overflow-hidden h-[70vh] lg:h-screen lg:aspect-video group"
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      onClick={() => {
        if (isMobile) setMobileActive((prev) => !prev);
      }}
    >
      {/* MEDIA */}
      {item.type === "video" ? (
        <>
          <video
            ref={videoRef}
            src={item.media}
            autoPlay
            loop
            playsInline
            className="object-cover w-full h-full transition-transform duration-700 lg:group-hover:scale-105"
          />

          {/* MUTE */}
          <div className="absolute z-50 bottom-6 right-6 lg:bottom-10 lg:right-10">
            <button
              onClick={toggleMute}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/50 backdrop-blur-lg"
            >
              <Icon
                icon={isMuted ? "mage:volume-mute" : "mage:volume-down-fill"}
                width="22"
              />
            </button>
          </div>
        </>
      ) : (
        <Image
          src={item.media}
          alt={item.name}
          fill
          className="object-cover w-full h-full transition-transform duration-700 lg:group-hover:scale-105"
        />
      )}

      {/* OVERLAY */}
      <div
        className={`
    absolute inset-0 bg-third/40 transition-opacity duration-700
    ${
      isMobile
        ? mobileActive
          ? "opacity-0"
          : "opacity-100"
        : hovered
          ? "opacity-0"
          : "opacity-100"
    }
  `}
      />

      {/* TESTO */}
      <div
        className={`
    absolute inset-0 flex items-center justify-center
    lg:items-end lg:justify-start
    p-1 lg:p-10 transition-all duration-700
    ${
      isMobile
        ? mobileActive
          ? "opacity-0"
          : "opacity-100"
        : hovered
          ? "lg:opacity-100"
          : "lg:opacity-100"
    }
    lg:bg-[linear-gradient(359.99deg,rgba(0,0,0,0.9)_15%,rgba(0,0,0,0)_75%)]
  `}
      >
        <div className="flex flex-col items-center gap-10 text-center lg:items-start lg:text-left">
          {/* TITLE */}
          <h2 className="flex flex-col items-center uppercase lg:flex-row lg:items-center">
            <MaskText trigger={hovered}>
              <span className="text-[1.5rem] leading-none text-white text-raleway font-regular lg:text-3xl fxl:text-4xl 3xl:text-6xl">
                {item.brand1.includes(":") ? (
                  <>
                    {item.brand1.split(":")[0]}:{/* mantiene i due punti */}
                    <br className="lg:hidden" />
                    {item.brand1.split(":")[1].trim()}
                  </>
                ) : (
                  item.brand1
                )}
              </span>
            </MaskText>

            <span className="hidden lg:block relative w-14 h-10 lg:h-8 lg:w-8 2xl:w-[4.2rem] 2xl:h-[4.2rem] 3xl:w-32 3xl:h-32 fxl:w-16 fxl:h-20">
              {" "}
              <Image
                src="/assets/cofactory_nuovaX_green.svg"
                fill
                className="object-cover rotate-90 lg:rotate-0 lg:object-contain"
                alt="logo"
              />
            </span>
            <span className="relative block w-8 h-6 my-4 lg:hidden">
              {" "}
              <Image
                src="/assets/cofactory_nuovaX_green_bold.png"
                fill
                className="object-contain "
                alt="logo"
              />
            </span>

            <MaskText trigger={hovered}>
              <span className="text-[1.5rem] leading-none text-white text-raleway font-regular lg:text-3xl fxl:text-4xl 3xl:text-6xl">
                {item.brand2 === "Aquaman e Il Regno Perduto" ? (
                  <>
                    Aquaman e <br className="lg:hidden" />
                    Il Regno Perduto
                  </>
                ) : item.brand2 === "I Puffi: Il Film" ? (
                  item.brand2
                ) : item.brand2.includes(":") ? (
                  <>
                    {item.brand2.split(":")[0]}: <br className="lg:hidden" />
                    {item.brand2.split(":")[1].trim()}
                  </>
                ) : (
                  item.brand2
                )}
              </span>
            </MaskText>
          </h2>

          {/* FEATURES */}
          {item.casesItemFeatured && (
            <div className="flex flex-wrap justify-center gap-2 lg:justify-start 2xl:-mt-6 fxl:-mt-10">
              {item.casesItemFeatured.map((feature, index) => (
                <MaskText key={index} trigger={true}>
                  <span className="uppercase text-[10.5px] lg:text-xs font-raleway text-white/80 flex items-center ">
                    {index !== 0 && (
                      <span className="mb-[0.2rem] mr-2 text-second">&gt;</span>
                    )}
                    {feature}
                  </span>
                </MaskText>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BannerList;
