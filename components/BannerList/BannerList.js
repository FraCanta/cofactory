import Image from "next/image";
import localFont from "next/font/local";
import { MaskText } from "../MaskText";
import { useRef, useState, useEffect } from "react";
import ParallaxText from "../ParallaxText";
import { Icon } from "@iconify/react";

function BannerList({ translation, id }) {
  return (
    <div className="flex flex-col w-full" id={id}>
      {translation.cases.map((item, index) => (
        <HoverBanner key={index} item={item} />
      ))}
      <div className="z-50 w-full mx-auto mb-20 overflow-hidden bg-third dark:bg-white">
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

  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // inizializza audio una sola volta
  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.volume = volume;
    videoRef.current.muted = true;
  }, []);

  // auto-mute quando esce dalla viewport
  useEffect(() => {
    if (!containerRef.current || !videoRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          videoRef.current.muted = true;
          setIsMuted(true);
        }
      },
      { threshold: 0.25 }
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

  // ---------------- VOLUME SLIDER ----------------
  const handleVolumeChange = (e) => {
    const v = parseFloat(e.target.value);
    setVolume(v);

    if (!videoRef.current) return;

    videoRef.current.volume = v;

    if (v === 0) {
      setPreviousVolume(previousVolume || 0.5);
      videoRef.current.muted = true;
      setIsMuted(true);
    } else {
      videoRef.current.muted = false;
      setIsMuted(false);
      setPreviousVolume(v);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative z-50 w-full overflow-hidden lg:h-screen aspect-square lg:aspect-video group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute bottom-0 right-0 z-50 p-3 transform -translate-x-1/2 -translate-y-1/2 lg:bottom-10 lg:right-2 lg:p-2 hover:cursor-pointer">
            <div className="relative group">
              <div className="flex items-center w-10 h-10 overflow-hidden transition-all duration-300 rounded-full bg-white/50 backdrop-blur-lg">
                {/* MUTE BUTTON */}
                <button
                  onClick={toggleMute}
                  className="p-2 ml-[2px] rounded-full"
                >
                  <Icon
                    icon={
                      isMuted ? "mage:volume-mute" : "mage:volume-down-fill"
                    }
                    width="22"
                    className="transition-all duration-500"
                  />
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Image
          src={item.media}
          alt={item.name}
          fill
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
      )}

      {/* OVERLAY sempre presente */}
      <div
        className={`absolute inset-0 bg-third/50 transition-opacity duration-700 ${
          hovered ? "opacity-0" : "opacity-40"
        }`}
      />

      {/* SFONDO TESTO con blur visibile solo in hover */}
      <div
        className={`hidden absolute bottom-0 left-0 w-full lg:flex items-center p-6 lg:p-10 transition-all duration-700 h-[20vh] ${
          hovered
            ? "opacity-100 bg-[linear-gradient(359.99deg,rgba(0,0,0,0.9)_15%,rgba(0,0,0,0)_75%)]"
            : "opacity-0 backdrop-blur-none bg-transparent"
        }`}
      >
        <h2 className="flex items-center uppercase">
          <MaskText trigger={hovered}>
            <span className="text-raleway font-regular text-[0.85rem] lg:text-3xl text-white fxl:text-4xl 3xl:text-6xl">
              {item.brand1}
            </span>
          </MaskText>

          <span className="relative w-2 h-4 lg:h-8 lg:w-8 2xl:w-[2rem] 2xl:h-20 3xl:w-32 3xl:h-32 fxl:w-16 fxl:h-32">
            <Image
              src="/assets/cofactory_nuovaX_green.svg"
              fill
              className="object-cover"
              alt="logo"
            />
          </span>

          <MaskText trigger={hovered}>
            <span className="text-raleway font-regular leading-none text-[0.85rem] lg:text-3xl text-white fxl:text-4xl 3xl:text-6xl">
              {item.brand2}
            </span>
          </MaskText>
        </h2>
      </div>
    </div>
  );
}

export default BannerList;
