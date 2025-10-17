import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const sections = [
  { title: "Sezione 1", text: "Contenuto 1", color: "rgba(187, 84, 113, 0.5)" },
  { title: "Sezione 2", text: "Contenuto 2", color: "rgba(218, 164, 68, 0.5)" },
  { title: "Sezione 3", text: "Contenuto 3", color: "rgba(54, 139, 144, 0.5)" },
];

export default function HorizontalScroll() {
  const containerRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const sectionHeight = 0.7; // ogni sezione occupa 100vh

  useEffect(() => {
    const updateWidth = () => setViewportWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // distanza totale da scorrere in orizzontale
  const distanceToScroll = (sections.length - 1) * viewportWidth;

  // posizione orizzontale interpolata
  const rawX = useTransform(scrollYProgress, [0, 1], [0, -distanceToScroll]);
  const x = useSpring(rawX, { stiffness: 100, damping: 20 });

  return (
    <div
      ref={containerRef}
      style={{
        height: `${
          window.innerWidth * (sections.length - 1) + window.innerHeight
        }px`,
        position: "relative",
      }}
    >
      <motion.div
        style={{
          position: "sticky",
          top: "20vh",
          height: `${sectionHeight * 100}vh`,
          display: "flex",
          width: `${sections.length * 100}vw`,
          x,
        }}
      >
        {sections.map((section, index) => (
          <section
            key={index}
            style={{
              flex: "0 0 100vw",
              height: `${sectionHeight * 100}vh`,
              backgroundColor: section.color,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
              {section.title}
            </h1>
            <p style={{ fontSize: "1.5rem", maxWidth: "600px" }}>
              {section.text}
            </p>
          </section>
        ))}
      </motion.div>
    </div>
  );
}
