import { useLayoutEffect } from "react";

import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
const AnimatedX = () => {
  useLayoutEffect(() => {
    gsap.to(".c", {
      scrollTrigger: {
        trigger: ".c",
        markers: true,
        start: "top center",
        end: () => "+=" + document.querySelector(".c").offsetWidth,
        scrub: 3,
        // pin: true,
        toggleActions: "restart pause reverse pause",
      },
      x: 400,
      rotation: 360,
      duration: 3,
    });
  }, []);

  return (
    <div className="h-screen w-[90%] mx-auto flex flex-col items-center justify-center gap-20">
      <div className="w-20 h-20 bg-second a ">a</div>
      <div className="w-20 h-20 bg-second b">b</div>
      <div className="w-20 h-20 bg-second c">c</div>
    </div>
  );
};

export default AnimatedX;
