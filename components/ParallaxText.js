import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import localFont from "next/font/local";
import useLayoutEffect from "../utils/use-isomorphic-layout-effect";

import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ParallaxText({ marqueeText, onToggle }) {
  const parallaxContainer = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  const fourthText = useRef(null);
  const fifthText = useRef(null);
  const sixthText = useRef(null);

  const sliderItems = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxContainer,
    offset: ["start end", "end start"],
  });

  let xPercent = 0;
  let direction = +1;

  useLayoutEffect(() => {
    if (!sliderItems.current) return;

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
  }, []); // ← dipendenze vuote

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
    <div ref={parallaxContainer}>
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
        marqueeText={marqueeText}
        onToggle={onToggle} // ✅ passaggio corretto
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
  marqueeText,
  onToggle, // ✅ riceve qui
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
    <motion.div style={{ x: translateX, left }} className="sliderContainer ">
      <Phrase
        sliderItems={sliderItems}
        firstText={firstText}
        secondText={secondText}
        thirdText={thirdText}
        fourthText={fourthText}
        fifthText={fifthText}
        sixthText={sixthText}
        marqueeText={marqueeText}
        onToggle={onToggle} // ✅ propagato anche qui
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
  marqueeText,
  onToggle, // ✅ riceve infine qui
}) => {
  return (
    <button onClick={onToggle}>
      <div ref={sliderItems} className={`font-raleway sliderItems uppercase`}>
        <p
          ref={firstText}
          className="text-transparent text-stroke dark:text-stroke-dark"
        >
          {marqueeText.text1}
        </p>
        <p
          ref={secondText}
          className="text-transparent text-stroke dark:text-stroke-dark"
        >
          {marqueeText.text2}
        </p>
        <p
          ref={thirdText}
          className="text-transparent text-stroke dark:text-stroke-dark"
        >
          {marqueeText.text3}
        </p>
        <p
          ref={fourthText}
          className="text-transparent text-stroke dark:text-stroke-dark"
        >
          {marqueeText.text4}
        </p>
        <p
          ref={fifthText}
          className="text-transparent text-stroke dark:text-stroke-dark"
        >
          {marqueeText.text5}
        </p>
        <p
          ref={sixthText}
          className="text-transparent text-stroke dark:text-stroke-dark"
        >
          {marqueeText.text6}
        </p>
      </div>
    </button>
  );
};
