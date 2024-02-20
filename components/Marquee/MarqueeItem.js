"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const imagePaths = [
  "/assets/logos/logo.png",
  "/assets/logos/logo2.png",
  "/assets/logos/logo3.png",
  "/assets/logos/logo4.png",
  "/assets/logos/logo5.png",
  "/assets/logos/logo6.png",
  "/assets/logos/logo7.png",
  "/assets/logos/logo8.png",
  "/assets/logos/logo9.png",
  "/assets/logos/logo10.png",
  "/assets/logos/logo11.png",
  "/assets/logos/logo12.png",
  "/assets/logos/logo13.png",
  "/assets/logos/logo14.png",
  "/assets/logos/logo15.png",
  "/assets/logos/logo16.png",
  "/assets/logos/logo17.png",
  "/assets/logos/logo18.png",
  "/assets/logos/logo19.png",
  "/assets/logos/logo20.png",
  "/assets/logos/logo21.png",
  "/assets/logos/logo22.png",
];

const MarqueeItem = () => {
  const [hovered, setHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (hovered) {
      controls.stop();
    } else {
      controls.start({
        x: [0, -1036],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
          },
        },
      });
    }
  }, [hovered]);
  return (
    <motion.div
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        position: "relative",
        zIndex: "6",
      }}
      className="w-[90%] mx-auto py-10"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {imagePaths.map((imagePath, index) => (
        <motion.img
          key={index}
          src={imagePath}
          alt={`Image ${index + 1}`}
          className="inline-block mr-[64px] w-[150px] h-[100px] object-contain"
          animate={controls}
          custom={index} // Aggiungi un valore custom per distinguere le immagini
          transition={{ duration: 30, ease: "easeOut" }} // Transizione fluida durante la pausa
        />
      ))}
    </motion.div>
  );
};

export default MarqueeItem;
