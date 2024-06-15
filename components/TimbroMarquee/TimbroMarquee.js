import React, { useState, useRef } from "react";
import Marquee from "../Marquee/Marquee";
import Image from "next/image";
import gsap from "gsap";
import CofactoryButton from "../layout/CofactoryButton/CofactoryButton";

function TimbroMarquee() {
  const [marqueeVisible, setMarqueeVisible] = useState(false);
  const marqueeRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handleToggleMarquee = () => {
    setMarqueeVisible(!marqueeVisible);

    if (!marqueeVisible) {
      gsap.to(marqueeRef.current, {
        width: "auto",
        opacity: 1,
        duration: 0.5,
        display: "flex",
      });
    } else {
      gsap.to(marqueeRef.current, {
        width: 0,
        opacity: 0,
        duration: 0.5,
        display: "none",
      });
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative flex items-center">
      <div
        ref={marqueeRef}
        style={{ overflow: "hidden", width: 0, opacity: 0, display: "none" }}
        className="absolute right-20 z-0 "
      >
        <Marquee />
      </div>
      <div
        className="relative w-24 lg:w-28 2xla:w-32 aspect-square z-20 cursor-pointer animate-spin"
        onClick={() => {
          handleToggleMarquee();
          togglePlayPause(); // Cambia lo stato di play/pause
        }}
        style={{ marginLeft: "auto" }}
      >
        {/* <Image
          src="/assets/bollino_lovers.png"
          alt=""
          fill
          className="object-cover rounded-lg"
        /> */}
        <CofactoryButton isPlaying={isPlaying} />
      </div>
    </div>
  );
}

export default TimbroMarquee;
