import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Marquee from "../Marquee/Marquee";
import CofactoryButton from "../layout/CofactoryButton/CofactoryButton";
import Link from "next/link";

function TimbroMarquee() {
  const [marqueeVisible, setMarqueeVisible] = useState(false);
  const marqueeRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // useEffect(() => {
  //   // Create a GSAP context for managing animations related to this component
  //   const context = gsap.context(() => {
  //     if (marqueeVisible && marqueeRef.current) {
  //       gsap.to(marqueeRef.current, {
  //         x: 0,
  //         width: "100%",
  //         opacity: 1,
  //         duration: 3,
  //         ease: "power4",
  //         onStart: () => {
  //           marqueeRef.current.style.display = "flex";
  //         },
  //       });
  //     } else {
  //       gsap.to(marqueeRef.current, {
  //         width: 0,
  //         opacity: 0,
  //         duration: 0.5,
  //         ease: "power4",
  //         onComplete: () => {
  //           marqueeRef.current.style.display = "none";
  //         },
  //       });
  //     }
  //   }, marqueeRef); // Pass marqueeRef to the context to manage animations related to it

  //   // Cleanup function to be executed when the component is unmounted
  //   return () => context.revert();
  // }, [marqueeVisible]); // Depend on marqueeVisible for changes to trigger the effect

  const handleToggleMarquee = () => {
    setMarqueeVisible((prevVisible) => !prevVisible);
    togglePlayPause(); // Assuming togglePlayPause manages isPlaying state for animation controls
  };

  const togglePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div className="relative flex items-center w-full overflow-hidden">
      {/* <div
        ref={marqueeRef}
        style={{ width: 0, opacity: 0, display: "none" }}
        className="absolute z-0 right-10 xl:right-32"
      >
        <Marquee marqueeVisible={marqueeVisible} />
      </div> */}
      <Link
        href="/stories"
        passHref
        className="relative z-20 w-24 cursor-pointer lg:w-28 2xla:w-32 aspect-square animate-spin" // onClick={handleToggleMarquee}
        style={{ marginLeft: "auto" }}
      >
        <CofactoryButton isPlaying={isPlaying} />
      </Link>
    </div>
  );
}

export default TimbroMarquee;
