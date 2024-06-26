import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";
import ParallaxText from "../ParallaxText";

// const images = [
//   "../assets/cases/american/cover_american_new.jpg",
//   "../assets/cases/bobble/cover_bobble_new.jpg",
//   "../assets/cases/citrus/citrus.jpeg",
//   "../assets/cases/milka/cover_milka2.jpg",
//   "../assets/cases/nestle/nestle.jpg",
//   "../assets/cases/orociok/cover_orociok.jpg",
//   "../assets/cases/rossopomodoro/cover_rossopomodoro_new.jpg",
//   "../assets/cases/treccani/cover_treccani_new.jpg",
//   "../assets/cases/yummers/cover_yummers.jpg",
// ];

function SmoothParallaxImage({ translation }) {
  console.log(typeof translation?.images);
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
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
      <div className="w-full ">
        <ParallaxText marqueeText={translation.marqueeLink} />
      </div>
      <div className="spacer"></div>
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
            <Image src={`${src}`} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};
