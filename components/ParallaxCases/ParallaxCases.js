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

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? 0 : -150, isMobile ? 0 : dimension.height * 1.5]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? 0 : -275, isMobile ? 0 : dimension.height * 2.5]
  );
  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? 0 : -100, isMobile ? 0 : dimension.height * 1.1]
  );

  // Filtra i cases in base alla categoria selezionata
  const filteredCases = cases.filter(
    (el) =>
      selectedCategory === "All" ||
      el.categories.some((cat) => cat.name === selectedCategory)
  );

  // Se la categoria è "All" usa 3 colonne, altrimenti 2 colonne
  const numberOfColumns = isMobile ? 2 : selectedCategory === "All" ? 3 : 2;

  // Inizializza colonne dinamicamente
  const columns = Array.from({ length: numberOfColumns }, () => []);

  filteredCases.forEach((item, index) => {
    columns[index % numberOfColumns].push(item);
  });

  // Prendi solo i primi n trasform per non errori
  const transforms = [y, y2, y3];

  // Ricava la lista unica delle categorie per il filtro (se vuoi puoi passare da props)
  const allCategories = [
    "All",
    ...new Set(cases.flatMap((c) => c.categories.map((cat) => cat.name))),
  ];

  return (
    <div
      ref={galleryRef}
      className="w-full mt-10 mb-0 overflow-hidden lg:mb-20 lg:mt-10 2xla:mt-0 z-[999999] "
    >
      <div className="flex items-start justify-center gap-3 md:gap-4">
        {columns.map((columnCases, colIndex) => (
          <motion.div
            key={colIndex}
            style={{ y: transforms[colIndex] || y }}
            className={`flex flex-col gap-y-3 lg:gap-y-8 ${
              numberOfColumns === 3 ? "w-1/2 md:w-1/3" : "w-1/2 md:w-1/2"
            }`}
          >
            {columnCases.map((el, i) => (
              // <Link
              //   key={i}
              //   href={`/stories/${el.button}`}
              //   className="relative block overflow-hidden group aspect-square rounded-xs"
              // >
              <div
                className="relative block overflow-hidden group aspect-square rounded-xs"
                key={i}
              >
                <Image
                  src={el.img}
                  alt={el.name}
                  fill
                  className="object-cover "
                />
                {/* <div
                  className={`absolute inset-0 flex flex-col items-center justify-center gap-y-2 transition-opacity duration-500 
                   
                  `}
                >
                  <h2 className="flex flex-col items-center justify-center gap-2 text-center uppercase">
                    <MaskText>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: el.brand1,
                        }}
                        className={`text-raleway font-regular leading-none text-sm lg:text-[2.5rem] text-white `}
                      ></span>
                    </MaskText>

                    <span className="relative w-2 h-4 mx-2 lg:h-8 lg:w-8 2xl:w-[5rem] ">
                      <Image
                        src="/assets/cofactory_nuovaX_green.svg"
                        fill
                        className="object-cover"
                        alt="logo"
                      />
                    </span>

                    <MaskText>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: el.brand2,
                        }}
                        className={`text-raleway font-regular leading-tight text-sm lg:text-[2.5rem] text-white`}
                      ></span>
                    </MaskText>
                  </h2>
                </div> */}
                {/* </Link> */}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
      <div className="h-auto lg:h-[220vh]"></div>
    </div>
  );
};

export default ParallaxCases;
