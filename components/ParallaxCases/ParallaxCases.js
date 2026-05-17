import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const ParallaxCases = ({ cases = [], selectedCategory }) => {
  const galleryRef = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setDimension({ width, height: window.innerHeight });
      setIsMobile(width < 900);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  const numberOfColumns = isMobile ? 1 : selectedCategory === "All" ? 3 : 2;

  const columns = useMemo(() => {
    const filteredCases = cases.filter(
      (el) =>
        selectedCategory === "All" ||
        el.categories.some((cat) => cat.name === selectedCategory),
    );

    const nextColumns = Array.from({ length: numberOfColumns }, () => []);
    const columnHeights = Array.from({ length: numberOfColumns }, () => 0);

    filteredCases.forEach((item) => {
      const shortestColumnIndex = columnHeights.indexOf(
        Math.min(...columnHeights),
      );
      nextColumns[shortestColumnIndex].push(item);
      columnHeights[shortestColumnIndex] += 1;
    });

    return nextColumns;
  }, [cases, numberOfColumns, selectedCategory]);

  // Calcolo trasformazioni di parallax per il contenuto interno
  const getParallax = (baseStart, baseEnd) =>
    useTransform(scrollYProgress, [0, 1], [baseStart, baseEnd]);

  const contentY = [
    getParallax(isMobile ? 0 : -150, isMobile ? 0 : dimension.height * 1.5),
    getParallax(isMobile ? 0 : -250, isMobile ? 0 : dimension.height * 1.6),
    getParallax(isMobile ? 0 : -150, isMobile ? 0 : dimension.height * 1.5),
  ];

  return (
    <div
      ref={galleryRef}
      className="w-full mt-0 mb-0 overflow-hidden lg:mb-0 lg:mt-10 2xla:mt-0 z-[999999]"
    >
      <div className="flex items-start justify-center gap-3 md:gap-4">
        {columns.map((columnCases, colIndex) => (
          <motion.div
            key={colIndex}
            style={{ y: contentY[colIndex] || 0 }}
            className={`flex flex-col gap-y-3 lg:gap-y-8 ${
              numberOfColumns === 3
                ? "w-full md:w-1/3"
                : numberOfColumns === 2
                  ? "w-full md:w-1/2"
                  : "w-full"
            } will-change-transform`}
          >
            {columnCases.map((el, i) => (
              <div
                key={`${el.button || el.img}-${i}`}
                className="relative block overflow-hidden group aspect-square rounded-xs"
              >
                <Image
                  src={el.img}
                  alt={el.name || `${el.brand1} ${el.brand2}`}
                  fill
                  sizes={
                    numberOfColumns === 3
                      ? "(min-width: 768px) 30vw, 90vw"
                      : numberOfColumns === 2
                        ? "(min-width: 768px) 45vw, 90vw"
                        : "90vw"
                  }
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>
        ))}
      </div>
      <div className="h-auto lg:h-[138vh] "></div>
    </div>
  );
};

export default ParallaxCases;
