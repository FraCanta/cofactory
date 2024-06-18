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
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
    smooth: true,
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/stories/${button}`} className="relative">
      <div
        className="cardContainer"
        ref={container}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          className="card"
          style={{ scale, top: `calc(-25% + ${i * 15}px )` }}
        >
          <div className="body">
            <div className="imageContainer">
              <motion.div style={{ scale: imageScale }} className="inner">
                <Image
                  fill
                  src={img}
                  alt="image"
                  className="object-cover rounded-lg"
                />
              </motion.div>
              <div
                className={`absolute top-0 h-full w-full flex flex-col items-center justify-center text-3xl lg:text-6xl  text-white transition-opacity duration-300 gap-4 lg:gap-8 ${
                  hovered
                    ? "bg-third/80 opacity-100 h-full w-full"
                    : "opacity-0"
                }`}
              >
                <MaskText>
                  <span
                    className={`${myFont.className} font-bold tracking-widest`}
                  >
                    {brand1}
                  </span>
                </MaskText>

                <span className="relative h-6 w-6 lg:h-12 lg:w-12 mx-6">
                  <Image
                    src="/assets/logo/new_logo_intro.svg"
                    fill
                    className="object-cover contrast-125"
                  />
                </span>
                <MaskText>
                  <span
                    className={`${myFont.className} font-bold tracking-widest`}
                  >
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
