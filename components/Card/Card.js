import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import localFont from "next/font/local";
import { MaskText } from "../MaskText";

const myFont = localFont({ src: "../../fonts/ClearfaceStd-Bold.woff" });

const Card = ({
  i,
  img,
  button,
  brand1,
  brand2,
  progress,
  range,
  targetScale,
}) => {
  const cardContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardContainer,
    offset: ["start end", "start start"],
    smooth: true,
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/stories/${button}`} className="relative w-full">
      <div
        className="cardContainer"
        ref={cardContainer}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          className="card"
          style={{ scale, top: `calc(-25% + ${i * 15}px )` }}
        >
          <div className="body">
            <div className="imageContainer">
              <motion.div className="inner">
                <Image
                  fill
                  src={img}
                  alt="cover stories"
                  className="object-cover rounded-lg"
                />
              </motion.div>
              <div
                className={`absolute top-0 h-full w-full flex flex-col items-center justify-center text-3xl lg:text-6xl text-white transition-opacity duration-300 gap-4 lg:gap-6 ${
                  hovered ? "bg-third/80 opacity-100" : "opacity-0"
                }`}
              >
                <MaskText>
                  <span className={`${myFont.className} leading-snug`}>
                    {brand1}
                  </span>
                </MaskText>
                <span className="relative w-6 h-6 mx-6 lg:h-8 lg:w-8">
                  <Image
                    src="/assets/logo/new_logo_intro.svg"
                    fill
                    className="object-cover rotate-90 contrast-125"
                    alt="logo"
                  />
                </span>
                <MaskText>
                  <span className={`${myFont.className} leading-snug`}>
                    {brand2}
                  </span>
                </MaskText>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Link>
  );
};

export default Card;
