import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";
import ParallaxText from "../ParallaxText";

const images = [
  "../assets/cases/american/cover_american_new.jpg",
  "../assets/cases/bobble/cover_bobble_new.jpg",
  "../assets/cases/citrus/citrus.jpeg",
  "../assets/cases/milka/cover_milka2.jpg",
  "../assets/cases/nestle/nestle.jpg",
  "../assets/cases/orociok/cover_orociok.jpg",
  "../assets/cases/rossopomodoro/cover_rossopomodoro_new.jpg",
  "../assets/cases/treccani/cover_treccani_new.jpg",
  "../assets/cases/yummers/cover_yummers.jpg",
];

console.log(images);
function SmoothParallaxImage({ translation }) {
  console.log(translation);
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

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
      lenis.destroy();
    };
  }, []);
  return (
    <main className="main">
      <div className="spacer"></div>
      <div ref={gallery} className="gallery">
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
      </div>
      <div className="w-full ">
        <ParallaxText marqueeText={translation.marqueeLink} />
      </div>
      <div className="spacer"></div>
    </main>
  );
}

export default SmoothParallaxImage;

const Column = ({ images, y }) => {
  return (
    <motion.div className="column" style={{ y }}>
      {images.map((src, i) => {
        return (
          <div key={i} className="imageContainer">
            <Image src={`/images/${src}`} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};
