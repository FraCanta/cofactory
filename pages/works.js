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
const myFont = localFont({ src: "../fonts/ClearfaceStd-Bold.woff" });

const Works = ({ translation }) => {
  // Estrai i casi dal tuo oggetto di traduzione
  const cases = translation.cards;

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
        <main>
          <div className="flex justify-between w-[90%] mx-auto mt-40">
            <div></div>
            <div className="w-[298px] h-[50px] px-[18px] py-2.5 rounded-[30px] border border-white justify-between items-center inline-flex z-10">
              <select className="select w-full max-w-xs !bg-transparent">
                <option value="tutti" defaultValue>
                  Tutti
                </option>
                <option value="brand">Brand</option>
                <option value="box">Box</option>
                <option value="movie">Movie</option>
              </select>
            </div>
          </div>
          <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-4 py-8">
            {cases.map((el, i) => {
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
                          className="object-cover rounded-lg lg:opacity-100 hover:lg:opacity-50 hover:lg:rounded-[250px] hover:transition-all hover:duration-700 opacity-50  hover:lg:grayscale"
                        />
                        {isHovered && (
                          <div className="absolute top-1/2 left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col lg:flex-row items-center justify-center  transition-all duration-1000 ease-in  text-white text-3xl lg:text-4xl font-bold  w-full">
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
                          className="object-cover rounded-lg lg:opacity-100 hover:lg:opacity-50 hover:lg:rounded-[250px] hover:transition-all hover:duration-700 opacity-50  hover:lg:grayscale"
                        />
                        {isHovered && (
                          <div className="absolute top-1/2 left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col lg:flex-row items-center justify-center  transition-all duration-1000 ease-in  text-white text-3xl lg:text-4xl font-bold  w-full">
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
