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
    { rows: 1, cols: 1 },
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <main>
        <Hero>
          <MaskText>
            <h1
              className={`${myFont.className} text-[60px] leading-[75px] md:text-[90px] md:leading-[100px] md:w-[100%]  text-white dark:text-third md:text-center lg:w-[70%] mx-auto  2xl:text-[100px] 2xl:leading-[120px] 2xla:text-[120px] 2xla:leading-[130px]`}
            >
              Happy stories about happy clients.
            </h1>
          </MaskText>
        </Hero>
        <div className="w-[90%] mx-auto">
          <Line />
        </div>
        <div className="flex justify-between w-[90%] mx-auto">
          <div></div>
          <div className="w-[298px] h-[50px] px-[18px] py-2.5 rounded-[30px] border border-white justify-between items-center inline-flex">
            <div className="text-white text-xl font-normal font-['Raleway']">
              Tutti
            </div>
            <IoChevronDownOutline className="dark:text-third text-white" />
          </div>
        </div>
        <div className="flex flex-col gap-6 py-10 w-[90%] mx-auto">
          {layoutWorks.slice(0, visibleWorks).map((rowWorks, rowIndex) => {
            console.log("Row works length:", rowWorks.length);
            return (
              <div
                key={rowIndex}
                className={`grid grid-cols-1 lg:grid-cols-${rowWorks?.length}  gap-6 `}
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
                        className="object-cover rounded-[15px] "
                        priority
                      />
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
