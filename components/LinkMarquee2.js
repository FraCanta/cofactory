import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const myFont2 = localFont({ src: "../fonts/ClearfaceStd-Bold.woff" });
import localFont from "next/font/local";
const LinkMarquee2 = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  const fourthText = useRef(null);
  const fifthText = useRef(null);
  const sixthText = useRef(null);

  const sliderItems = useRef(null);
  let xPercent = 0;
  let direction = +1;

  useEffect(() => {
    gsap.to(sliderItems.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animation);
  }, [sliderItems]);

  const animation = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    gsap.set(thirdText.current, { xPercent: xPercent });
    gsap.set(fourthText.current, { xPercent: xPercent });
    gsap.set(fifthText.current, { xPercent: xPercent });
    gsap.set(sixthText.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div className="sliderContainer">
      <Link href="/works">
        <div ref={sliderItems} className={`${myFont2.className} sliderItems `}>
          <p
            ref={firstText}
            className="text-stroke text-transparent dark:text-stroke-dark"
          >
            tutte le storie
          </p>
          <p
            ref={secondText}
            className="text-stroke text-transparent dark:text-stroke-dark"
          >
            tutte le storie
          </p>
          <p
            ref={thirdText}
            className="text-stroke text-transparent dark:text-stroke-dark"
          >
            tutte le storie
          </p>
          <p
            ref={fourthText}
            className="text-stroke text-transparent dark:text-stroke-dark"
          >
            tutte le storie
          </p>
          <p
            ref={fifthText}
            className="text-stroke text-transparent dark:text-stroke-dark"
          >
            tutte le storie
          </p>
          <p
            ref={sixthText}
            className="text-stroke text-transparent dark:text-stroke-dark"
          >
            tutte le storie
          </p>
        </div>{" "}
      </Link>
    </div>
  );
};

export default LinkMarquee2;
