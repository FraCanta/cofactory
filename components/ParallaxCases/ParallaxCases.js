import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MaskText } from "../MaskText";
import BlurryLights from "../layout/BlurryLights";

const ParallaxCases = ({ cases = [], selectedCategory, onCategoryChange }) => {
  const galleryRef = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setDimension({ width, height: window.innerHeight });
      setIsMobile(width < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  // Filtra i cases
  const filteredCases = cases.filter(
    (el) =>
      selectedCategory === "All" ||
      el.categories.some((cat) => cat.name === selectedCategory)
  );

  const numberOfColumns = isMobile ? 2 : selectedCategory === "All" ? 3 : 2;

  const columns = Array.from({ length: numberOfColumns }, () => []);
  const columnHeights = Array.from({ length: numberOfColumns }, () => 0);

  filteredCases.forEach((item) => {
    const itemHeight = 1;
    const shortestColumnIndex = columnHeights.indexOf(
      Math.min(...columnHeights)
    );
    columns[shortestColumnIndex].push(item);
    columnHeights[shortestColumnIndex] += itemHeight;
  });

  // Calcolo trasformazioni di parallax per il contenuto interno
  const getParallax = (baseStart, baseEnd) =>
    useTransform(scrollYProgress, [0, 1], [baseStart, baseEnd]);

  const contentY = [
    getParallax(isMobile ? 0 : -150, isMobile ? 0 : dimension.height * 1.5),
    getParallax(isMobile ? 0 : -250, isMobile ? 0 : dimension.height * 1.6),
    getParallax(isMobile ? 0 : -150, isMobile ? 0 : dimension.height * 1.5),
  ];

  const allCategories = [
    "All",
    ...new Set(cases.flatMap((c) => c.categories.map((cat) => cat.name))),
  ];

  return (
    <div
      ref={galleryRef}
      className="w-full mt-0 mb-0 overflow-hidden lg:mb-20 lg:mt-10 2xla:mt-0 z-[999999]"
    >
      <div className="flex items-start justify-center gap-3 md:gap-4">
        {columns.map((columnCases, colIndex) => (
          <div
            key={colIndex}
            className={`flex flex-col gap-y-3 lg:gap-y-8 ${
              numberOfColumns === 3 ? "w-1/2 md:w-1/3" : "w-1/2 md:w-1/2"
            }`}
          >
            {columnCases.map((el, i) => (
              <motion.div
                key={i}
                style={{ y: contentY[colIndex] || 0 }}
                className="relative block overflow-hidden group aspect-square rounded-xs"
              >
                <Image
                  src={el.img}
                  alt={el.name}
                  fill
                  className="object-cover"
                />
                {/* <div
                  className={`absolute inset-0 flex flex-col items-center justify-center gap-y-2 transition-opacity duration-500`}
                >
                  <h2 className="flex flex-col items-center justify-center gap-2 text-center uppercase">
                    <MaskText>
                      <span
                        dangerouslySetInnerHTML={{ __html: el.brand1 }}
                        className={`text-raleway font-regular leading-none text-sm lg:text-[2.5rem] text-white`}
                      ></span>
                    </MaskText>
                    <span className="relative w-2 h-4 mx-2 lg:h-8 lg:w-8 2xl:w-[5rem]">
                      <Image
                        src="/assets/cofactory_nuovaX_green.svg"
                        fill
                        className="object-cover"
                        alt="logo"
                      />
                    </span>
                    <MaskText>
                      <span
                        dangerouslySetInnerHTML={{ __html: el.brand2 }}
                        className={`text-raleway font-regular leading-tight text-sm lg:text-[2.5rem] text-white`}
                      ></span>
                    </MaskText>
                  </h2>
                </div> */}
                {/* </Link> */}
              </motion.div>
            ))}
          </div>
        ))}
      </div>
      <div className="h-auto lg:h-[138vh] "></div>
    </div>
  );
};

export default ParallaxCases;
