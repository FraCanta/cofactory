import { motion } from "framer-motion";
import Line from "@/components/Line";
import Hero from "@/components/layout/Hero";
import React, { useState } from "react";
import localFont from "next/font/local";
import { IoChevronDownOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import casesIT from "../public/locales/it/cases.json";
import casesEN from "../public/locales/en/cases.json";
import { GoArrowDown } from "react-icons/go";
import { MaskText } from "@/components/MaskText";
import Head from "next/head";
import BlurryLights from "@/components/layout/BlurryLights";
import { PiArrowUpRightThin } from "react-icons/pi";
const myFont = localFont({ src: "../fonts/ClearfaceStd-Bold.woff" });
const myFont2 = localFont({ src: "../fonts/Raleway-Regular.ttf" });

const Works = ({ translation }) => {
  // Estrai i casi dal tuo oggetto di traduzione
  const cases = translation.cards;
  const [showList, setShowList] = useState(false);
  const [isArrowRotated, setIsArrowRotated] = useState(false); // Stato per la rotazione della freccia
  const [isTuttiClicked, setIsTuttiClicked] = useState(false); // Stato per il colore del testo "Tutti"
  const [selectedCategory, setSelectedCategory] = useState("All");
  const toggleList = () => {
    setShowList(!showList);
    setIsArrowRotated(!isArrowRotated);
    setIsTuttiClicked(!isTuttiClicked);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    toggleList(); // Chiudi il menu a tendina quando viene selezionata una categoria
  };
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <>
      <Head>
        <title>Cofactory - Works</title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="absolute top-0 left-0 flex items-center w-full">
          <BlurryLights />
        </div>
        <main>
          <div className="flex justify-between w-[90%] mx-auto mt-32 lg:mt-40 ">
            <div className="relative w-full " onClick={toggleList}>
              <div className="flex items-center gap-6 justify-between lg:justify-end">
                <label
                  className={`${myFont.className} text-white dark:text-third font-regular text-xl lg:text-2xl hidden lg:flex`}
                >
                  Ordina per:
                </label>
                <div
                  className={
                    showList
                      ? "min-w-[300px] h-[50px] px-[18px] py-2.5 rounded-[30px] border text-third bg-white border-white justify-between items-center inline-flex z-[99] font-regular transition-colors duration-300"
                      : "text-white min-w-[300px] h-[50px] px-[18px] py-2.5 rounded-[30px] border   border-white justify-between items-center inline-flex transition-colors duration-300"
                  }
                >
                  <button className="  w-full max-w-xs flex items-center justify-between text-2xl ">
                    {selectedCategory === "All" ? "All" : selectedCategory}
                    {/* Testo "Tutti" */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 28 28"
                      className={
                        isArrowRotated
                          ? "origin-[50% 55%] rotate-180 transition-all duration-300"
                          : "transition-all duration-300"
                      } // Applica la classe per la rotazione
                    >
                      <path
                        fill="currentColor"
                        d="M4.22 9.47a.75.75 0 0 1 1.06 0L14 18.19l8.72-8.72a.75.75 0 1 1 1.06 1.06l-9.25 9.25a.75.75 0 0 1-1.06 0l-9.25-9.25a.75.75 0 0 1 0-1.06"
                      />
                    </svg>
                  </button>
                </div>
                {/* Posiziona l'ul in modo assoluto sotto il div con sfondo bianco */}
                {showList && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }} // Aggiungi la transizione qui
                    className="absolute top-0 lg:right-0  bg-white min-w-[300px] rounded-[30px] text-2xl lg:text-[25px] z-10 transition-colors duration-300 flex flex-col gap-8"
                    style={{
                      padding: "59px 0 28px",
                    }}
                  >
                    <li
                      className="hover:bg-pink hover:text-white cursor-pointer"
                      style={{
                        padding: "6px 24px",
                      }}
                      onClick={() => handleCategorySelect("All")}
                    >
                      All
                    </li>
                    <li
                      className="hover:bg-pink hover:text-white cursor-pointer"
                      style={{
                        padding: "6px 24px",
                      }}
                      onClick={() => handleCategorySelect("Brand")}
                    >
                      Brand
                    </li>
                    <li
                      className="hover:bg-pink hover:text-white cursor-pointer"
                      style={{
                        padding: "6px 24px",
                      }}
                      onClick={() => handleCategorySelect("Box")}
                    >
                      Box
                    </li>
                    <li
                      className="hover:bg-pink hover:text-white cursor-pointer"
                      style={{
                        padding: "6px 24px",
                      }}
                      onClick={() => handleCategorySelect("Movie")}
                    >
                      Movie
                    </li>
                  </motion.ul>
                )}
              </div>
            </div>
          </div>
          <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-4 py-8">
            {cases
              .filter(
                (el) =>
                  selectedCategory === "All" ||
                  el.categories.some((cat) => cat.name === selectedCategory)
              )
              .map((el, i) => {
                const isHovered = hoveredIndex === i;
                if (i === 2 || i === 5) {
                  return (
                    <div
                      key={i}
                      className="w-full lg:col-span-2"
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <Link href={`/cases/${el.button}`}>
                        <div
                          className="w-full aspect-square h-[60vh] relative"
                          data-aos="fade-up"
                          data-aos-delay="100"
                        >
                          <Image
                            src={el.img}
                            alt={el.name}
                            fill
                            className="object-cover rounded-lg lg:opacity-100 hover:lg:opacity-50 hover:lg:rounded-[250px] hover:transition-all hover:duration-700  hover:lg:grayscale"
                          />
                          {isHovered && (
                            <div className="hidden absolute top-1/2 left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 lg:flex flex-col lg:flex-row items-center justify-center  transition-all duration-1000 ease-in  text-white dark:text-third text-3xl lg:text-4xl font-bold  w-full">
                              <span className={`${myFont.className}`}>
                                {el.brand1}
                              </span>{" "}
                              <span className="relative h-8 w-8 mx-6">
                                <Image
                                  src="/assets/logo/per.svg"
                                  fill
                                  className="h-full w-full object-cover"
                                />
                              </span>{" "}
                              <span className={`${myFont.className}`}>
                                {el.brand2}
                              </span>
                            </div>
                          )}
                        </div>
                        <div
                          className="py-6 text-white text-lg flex flex-wrap lg:hidden items-center font-bold"
                          data-aos="fade-up"
                          data-aos-delay="100"
                        >
                          <span className={`${myFont2.className}`}>
                            {el.brand1}
                          </span>{" "}
                          <span className="relative h-5 w-5 mx-4">
                            <Image
                              src="/assets/logo/per.svg"
                              fill
                              className="h-full w-full object-cover"
                            />
                          </span>{" "}
                          <span className={`${myFont2.className}`}>
                            {el.brand2}
                          </span>
                        </div>
                        <div
                          className="text-white text-sm uppercase flex justify-between w-full lg:hidden"
                          data-aos="fade-up"
                          data-aos-delay="100"
                        >
                          <div>
                            {el.categories.map((cat, index) => (
                              <span
                                key={index}
                                className={`${myFont2.className} ${
                                  index > 0 ? "ml-1" : ""
                                }`}
                              >
                                {cat.name}
                                {index !== el.categories.length - 1 && " , "}
                              </span>
                            ))}
                          </div>
                          <div>
                            <Link href={`/cases/${el.button}`}>
                              {" "}
                              <PiArrowUpRightThin className="w-6 h-6" />
                            </Link>
                          </div>
                        </div>
                        <div className="w-full h-[0.2px] bg-white my-4 block lg:hidden"></div>
                      </Link>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={i}
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <Link href={`/cases/${el.button}`}>
                        <div
                          className="w-full aspect-square h-[40vh] sm:h-[50vh] lg:h-[60vh] relative"
                          data-aos="fade-up"
                          data-aos-delay="100"
                        >
                          <Image
                            src={el.img}
                            alt={el.name}
                            fill
                            className="object-cover rounded-lg lg:opacity-100 hover:lg:opacity-50 hover:lg:rounded-[250px] hover:transition-all hover:duration-700 hover:lg:grayscale"
                          />
                          {isHovered && (
                            <div className="absolute hidden top-1/2 left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 lg:flex flex-col lg:flex-row items-center justify-center  transition-all duration-1000 ease-in  text-white dark:text-third text-3xl lg:text-4xl font-bold  w-full">
                              <span className={`${myFont.className}`}>
                                {el.brand1}
                              </span>{" "}
                              <span className="relative h-8 w-8 mx-6">
                                <Image
                                  src="/assets/logo/per.svg"
                                  fill
                                  className="h-full w-full object-cover"
                                />
                              </span>{" "}
                              <span className={`${myFont.className}`}>
                                {el.brand2}
                              </span>
                            </div>
                          )}
                        </div>
                        <div
                          className="py-6 text-white text-lg font-bold flex flex-wrap items-center lg:hidden"
                          data-aos="fade-up"
                          data-aos-delay="100"
                        >
                          <span className={`${myFont2.className}`}>
                            {el.brand1}
                          </span>{" "}
                          <span className="relative h-5 w-5 mx-4">
                            <Image
                              src="/assets/logo/per.svg"
                              fill
                              className="h-full w-full object-cover"
                            />
                          </span>{" "}
                          <span className={`${myFont2.className}`}>
                            {el.brand2}
                          </span>
                        </div>
                        <div
                          className="text-white text-sm uppercase flex justify-between w-full lg:hidden"
                          data-aos="fade-up"
                          data-aos-delay="100"
                        >
                          <div>
                            {el.categories.map((cat, index) => (
                              <span
                                key={index}
                                className={`${myFont2.className} ${
                                  index > 0 ? "ml-1" : ""
                                }`}
                              >
                                {cat.name}
                                {index !== el.categories.length - 1 && " , "}
                              </span>
                            ))}
                          </div>
                          <div>
                            <Link href={`/cases/${el.button}`}>
                              {" "}
                              <PiArrowUpRightThin className="w-6 h-6" />
                            </Link>
                          </div>
                        </div>
                        <div className="w-full h-[0.2px] bg-white my-4 block lg:hidden"></div>
                      </Link>
                    </div>
                  );
                }
              })}
          </div>
        </main>
      </motion.div>
    </>
  );
};

export default Works;

export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
    case "it":
      obj = casesIT;
      break;

    case "en":
      obj = casesEN;
      break;

    default:
      obj = casesIT;
      break;
  }

  return {
    props: {
      translation: obj?.works,
    },
    revalidate: 60,
  };
}
