import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";

function SmoothParallaxImage({ translation }) {
  const gallery = useRef();
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setDimension({ width, height: window.innerHeight });
      setIsMobile(width < 768); // Consider mobile if width is less than 768px
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  // Adjust parallax intensity based on screen size
  const intensity = isMobile ? 0.8 : 1; // Reduce parallax effect by half on mobile

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, dimension.height * 2 * intensity]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, dimension.height * 3.3 * intensity]
  );
  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, dimension.height * 1.25 * intensity]
  );
  const y4 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, dimension.height * 3 * intensity]
  );

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="main">
      <div className="spacer"></div>
      <div ref={gallery} className="gallery">
        <Column
          translation={[
            translation?.images[0],
            translation?.images[1],
            translation?.images[2],
          ]}
          y={y}
        />
        <Column
          translation={[
            translation?.images[3],
            translation?.images[4],
            translation?.images[5],
          ]}
          y={y2}
        />
        <Column
          translation={[
            translation?.images[6],
            translation?.images[7],
            translation?.images[8],
          ]}
          y={y3}
        />
      </div>
    </main>
  );
}

export default SmoothParallaxImage;

const Column = ({ translation, y }) => {
  return (
    <motion.div className="column" style={{ y }}>
      {translation?.map((src, i) => {
        return (
          <div key={i} className="imageContainer">
            <Image
              src={`${src}`}
              alt="gallery img"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        );
      })}
    </motion.div>
  );
};
