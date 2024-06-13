import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const Card = ({ i, img, button, name, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
    smooth: true,
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <Link href={`/cases/${button}`} className="relative">
      <div className="cardContainer" ref={container}>
        <motion.div
          className="card"
          style={{ scale, top: `calc(-25% + ${i * 25}px )` }}
        >
          <div className="body">
            <div className="imageContainer">
              <motion.div style={{ scale: imageScale }} className="inner">
                <Image fill src={img} alt="image" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </Link>
  );
};

export default Card;
