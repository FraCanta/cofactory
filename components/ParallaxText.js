import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect } from "react";
import localFont from "next/font/local";
const myFont = localFont({ src: "../fonts/ClearfaceStd-Bold.woff" });

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ParallaxText() {
  const container = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  const fourthText = useRef(null);
  const fifthText = useRef(null);
  const sixthText = useRef(null);

  const sliderItems = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  let xPercent = 0;
  let direction = +1;

  useEffect(() => {
    if (sliderItems.current) {
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
    }
  }, [sliderItems]);

  const animation = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    if (
      firstText.current &&
      secondText.current &&
      thirdText.current &&
      fourthText.current &&
      fifthText.current &&
      sixthText.current
    ) {
      gsap.set(firstText.current, { xPercent: xPercent });
      gsap.set(secondText.current, { xPercent: xPercent });
      gsap.set(thirdText.current, { xPercent: xPercent });
      gsap.set(fourthText.current, { xPercent: xPercent });
      gsap.set(fifthText.current, { xPercent: xPercent });
      gsap.set(sixthText.current, { xPercent: xPercent });
    }

    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div ref={container}>
      <Slide
        direction={"left"}
        left={"-10%"}
        progress={scrollYProgress}
        sliderItems={sliderItems}
        firstText={firstText}
        secondText={secondText}
        thirdText={thirdText}
        fourthText={fourthText}
        fifthText={fifthText}
        sixthText={sixthText}
      />
    </div>
  );
}

export default ParallaxText;

const Slide = ({
  direction,
  left,
  progress,
  sliderItems,
  firstText,
  secondText,
  thirdText,
  fourthText,
  fifthText,
  sixthText,
}) => {
  const translateX = useTransform(
    progress,
    [0, 1],
    [
      150 * (direction === "left" ? -1 : 1),
      -150 * (direction === "left" ? -1 : 1),
    ]
  );
  return (
    <motion.div style={{ x: translateX, left }} className="sliderContainer">
      <Phrase
        sliderItems={sliderItems}
        firstText={firstText}
        secondText={secondText}
        thirdText={thirdText}
        fourthText={fourthText}
        fifthText={fifthText}
        sixthText={sixthText}
      />
    </motion.div>
  );
};

const Phrase = ({
  sliderItems,
  firstText,
  secondText,
  thirdText,
  fourthText,
  fifthText,
  sixthText,
}) => {
  return (
    <Link href="/stories">
      <div ref={sliderItems} className={`${myFont.className} sliderItems`}>
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
      </div>
    </Link>
  );
};
