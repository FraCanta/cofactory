import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ParallaxCases = ({
  cases = [],
  myFont,
  selectedCategory,
  onCategoryChange,
}) => {
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

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? 0 : -100, isMobile ? 0 : dimension.height * 1.5]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? 0 : -250, isMobile ? 0 : dimension.height * 2.5]
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
      className="w-full mt-10 mb-10 overflow-hidden lg:mb-20 lg:mt-0"
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
                  className="object-cover transition-all duration-700 group-hover:grayscale group-hover:opacity-50 group-hover:scale-105"
                />
                <div className="absolute z-10 flex items-center text-white transition-opacity duration-500 opacity-0 bottom-4 left-4 group-hover:opacity-100">
                  <span
                    className={`text-sm lg:text-xl font-semibold uppercase ${myFont.className}`}
                  >
                    {el.brand1}
                  </span>
                  <span className="relative w-[1.5rem] h-8 mx-2 lg:h-8 lg:w-8 2xl:w-[3rem] 2xl:h-20 3xl:w-32 3xl:h-32 fxl:w-24 fxl:h-24">
                    <Image
                      src="/assets/cofactory_nuovaX_green.svg"
                      alt="Logo"
                      fill
                      className="object-contain"
                    />
                  </span>
                  <span
                    className={`text-sm lg:text-xl font-semibold uppercase ${myFont.className}`}
                  >
                    {el.brand2}
                  </span>
                </div>
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
