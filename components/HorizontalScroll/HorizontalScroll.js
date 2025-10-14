import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const sections = [
  { title: "Sezione 1", text: "Contenuto 1" },
  { title: "Sezione 2", text: "Contenuto 2" },
  { title: "Sezione 3", text: "Contenuto 3" },
];

export default function HorizontalScroll() {
  const containerRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    setViewportWidth(window.innerWidth);
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const distanceToScroll = (sections.length - 1) * viewportWidth;
  const rawX = useTransform(scrollYProgress, [0, 1], [0, -distanceToScroll]);
  const x = useSpring(rawX, { stiffness: 80, damping: 10 }); // Smooth easing

  return (
    <div ref={containerRef} style={{ height: `${600 * sections.length}vh` }}>
      <motion.div
        style={{
          position: "sticky",
          top: 0,
          height: "60vh",
          display: "flex",
          width: `${sections.length * 100}vw`,
          x,
        }}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 100vw",
              height: "100vh",
              backgroundColor: section.color,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              color: "#fff",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
              {section.title}
            </h1>
            <p style={{ fontSize: "1.5rem", maxWidth: "600px" }}>
              {section.text}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
