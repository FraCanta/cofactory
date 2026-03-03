import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import localFont from "next/font/local";
import useLayoutEffect from "../utils/use-isomorphic-layout-effect";

import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Icon } from "@iconify/react";
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
    offset: ["start 0.9", "end 0.1"],
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
      100 * (direction === "left" ? -1 : 1),
      -100 * (direction === "left" ? -1 : 1),
    ],
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
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // alternanza automatica
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 6);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const texts = [
    { ref: firstText, value: marqueeText.text1 },
    { ref: secondText, value: marqueeText.text2 },
    { ref: thirdText, value: marqueeText.text3 },
    { ref: fourthText, value: marqueeText.text4 },
    { ref: fifthText, value: marqueeText.text5 },
    { ref: sixthText, value: marqueeText.text6 },
  ];

  return (
    <Link href="/stories">
      <div ref={sliderItems} className="uppercase font-raleway sliderItems">
        {texts.map((item, index) => (
          <motion.p
            key={index}
            ref={item.ref}
            className="cursor-pointer"
            animate={{
              opacity: activeIndex === index ? 1 : 0.35,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
          >
            <span
              className={`flex items-center gap-4 transition-colors duration-500 ${
                activeIndex === index
                  ? "text-white dark:text-black"
                  : "text-white/90 dark:text-black/90"
              }`}
            >
              {item.value}

              <motion.span
                animate={{
                  x: activeIndex === index ? 4 : 0,
                  y: activeIndex === index ? -4 : 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
              >
                <Icon icon="ph:arrow-up-right-light" />
              </motion.span>
            </span>
          </motion.p>
        ))}
      </div>
    </Link>
  );
};
