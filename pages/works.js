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

  // Layout delle righe e colonne delle immagini
  const layout = [
    { rows: 1, cols: 2 },
    { rows: 1, cols: 1 },
    { rows: 1, cols: 2 },
    { rows: 1, cols: 1 },
    { rows: 1, cols: 2 },
    { rows: 1, cols: 2 },
  ];

  // Funzione per creare il layout dei lavori
  function createLayout(cases, layout) {
    let layoutIndex = 0;
    const layoutWorks = [];

    layout.forEach(({ rows, cols }) => {
      const rowWorks = Object.values(cases).slice(
        layoutIndex,
        layoutIndex + rows * cols
      );
      layoutIndex += rows * cols;

      layoutWorks.push(rowWorks);
    });

    return layoutWorks;
  }

  // Ottieni il layout dei lavori
  const layoutWorks = createLayout(cases, layout);

  const [visibleWorks, setVisibleWorks] = useState(3);

  const handleLoadMore = () => {
    setVisibleWorks(visibleWorks + 3);
  };

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
          <div className="flex flex-col gap-6 py-10 w-[90%] mx-auto">
            {layoutWorks.slice(0, visibleWorks).map((rowWorks, rowIndex) => {
              return (
                <div
                  key={rowIndex}
                  className={`grid grid-cols-1 lg:grid-cols-${rowWorks?.length}  gap-6 `}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {rowWorks.map((work, colIndex) => (
                    <Link
                      href={`/cases/${work.button}`}
                      className="relative aspect-square w-full  lg:h-[70vh]"
                    >
                      <div key={colIndex}>
                        <Image
                          src={work.img}
                          alt=""
                          fill
                          className="object-cover rounded-lg lg:opacity-100 hover:lg:opacity-50 hover:lg:rounded-[250px] hover:transition-all hover:duration-700 opacity-50  hover:lg:grayscale"
                          priority
                        />
                        <div className="absolute top-1/2 left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col lg:flex-row items-center justify-center  transition-all duration-500  text-white text-3xl lg:text-5xl font-bold  w-full">
                          <span className={`${myFont.className}`}>
                            {work.brand1}
                          </span>{" "}
                          <span>+</span>{" "}
                          <span className={`${myFont.className}`}>
                            {work.brand2}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              );
            })}

            <div className="w-[90%] mx-auto flex justify-center items-center">
              {visibleWorks < layoutWorks.length && (
                <motion.button
                  onClick={handleLoadMore}
                  className="max-w-max dark:text-third text-white flex justify-center py-6  font-bold  px-12 uppercase gap-2 items-center "
                >
                  Load more <GoArrowDown />
                </motion.button>
              )}
            </div>
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
