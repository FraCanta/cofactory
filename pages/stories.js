import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import localFont from "next/font/local";
import Head from "next/head";
import casesIT from "../public/locales/it/cases.json";
import casesEN from "../public/locales/en/cases.json";
// import Lenis from "@studio-freight/lenis";
const myFont = localFont({ src: "../fonts/Raleway-Regular.ttf" });

const myFont2 = localFont({ src: "../fonts/Raleway-Regular.ttf" });
import cx from "clsx";
import ParallaxCases from "@/components/ParallaxCases/ParallaxCases";
const Stories = ({ translation }) => {
  const cases = translation.cards;
  const [showDrawer, setShowDrawer] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeButton, setActiveButton] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setActiveButton(category);
    setShowDrawer(false); // Close the drawer when a category is selected
  };

  const [checkedItems, setCheckedItems] = useState({
    all: true,
    brand: false,
    movie: false,
    box: false,
  });

  const toggleCheck = (key) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <Head>
        <title>Cofactory - Stories</title>
      </Head>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="h-[75vh]  flex items-center flex-col justify-center w-full mx-auto gap-6 bg-pink/20 dark:bg-pink/30"
      >
        <h1
          className={`${myFont.className} text-5xl py-1 md:text-[6rem] text-white dark:text-third lg:text-center 2xl:text-8xl w-[90%] mx-auto `}
        >
          <span>Happy</span>
          <span className="ml-4 text-white/60 dark:text-third/60">
            stories
          </span>{" "}
          for happy clients.
        </h1>
        <div className="w-[90%] lg:w-[65%] mx-auto">
          <p
            className={`${myFont2.className} text-[20px] md:text-[25px] text-white dark:text-third lg:text-center `}
          >
            Ideiamo e realizziamo campagne di comunicazione congiunta.
          </p>
        </div>
      </motion.div> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="w-[90%] mx-auto mt-[120px]">
          <div className="relative flex flex-wrap items-center justify-between w-full gap-y-6">
            <div>
              <label className="text-xl text-white/60">Filter: </label>
              <span className="ml-2 text-xl text-white">
                {selectedCategory}
              </span>
            </div>
            <div className="flex items-start gap-6 lg:gap-10 ">
              <label className="flex items-center gap-2 text-white uppercase cursor-pointer">
                <div className="grid place-items-center">
                  <input
                    type="radio"
                    className="w-4 h-4 col-start-1 row-start-1 border-2 border-white rounded-full appearance-none peer shrink-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-second "
                    onChange={() => handleCategorySelect("All")}
                    value="All"
                    name="category" // 🔁 assicurati che tutte le radio abbiano lo stesso name
                    checked={selectedCategory === "All"}
                  />
                  <div
                    className={cx(
                      "col-start-1 row-start-1",
                      "w-full h-full rounded-full peer-checked:bg-white"
                    )}
                  />
                </div>
                All
              </label>

              <label className="flex items-center gap-2 text-white uppercase cursor-pointer">
                <div className="grid place-items-center">
                  <input
                    type="radio"
                    className="w-4 h-4 col-start-1 row-start-1 border-2 border-white rounded-full appearance-none peer shrink-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-second "
                    onChange={() => handleCategorySelect("Brand")}
                    value="Brand"
                    name="category" // 🔁 assicurati che tutte le radio abbiano lo stesso name
                    checked={selectedCategory === "Brand"}
                  />
                  <div
                    className={cx(
                      "col-start-1 row-start-1",
                      "w-full h-full rounded-full peer-checked:bg-white"
                    )}
                  />
                </div>
                Brand
              </label>
              <label className="flex items-center gap-2 text-white uppercase cursor-pointer">
                <div className="grid place-items-center">
                  <input
                    type="radio"
                    className="w-4 h-4 col-start-1 row-start-1 border-2 border-white rounded-full appearance-none peer shrink-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-second "
                    onChange={() => handleCategorySelect("Box")}
                    value="Box"
                    name="category" // 🔁 assicurati che tutte le radio abbiano lo stesso name
                    checked={selectedCategory === "Box"}
                  />
                  <div
                    className={cx(
                      "col-start-1 row-start-1",
                      "w-full h-full rounded-full peer-checked:bg-white"
                    )}
                  />
                </div>
                Box
              </label>
              <label className="flex items-center gap-2 text-white uppercase cursor-pointer">
                <div className="grid place-items-center">
                  <input
                    type="radio"
                    className="w-4 h-4 col-start-1 row-start-1 border-2 border-white rounded-full appearance-none peer shrink-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-second "
                    onChange={() => handleCategorySelect("Movie")}
                    value="Movie"
                    name="category" // 🔁 assicurati che tutte le radio abbiano lo stesso name
                    checked={selectedCategory === "Movie"}
                  />
                  <div
                    className={cx(
                      "col-start-1 row-start-1",
                      "w-full h-full rounded-full peer-checked:bg-white"
                    )}
                  />
                </div>
                Movie
              </label>
            </div>
          </div>
        </div>

        <ParallaxCases
          cases={cases}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategorySelect}
          myFont={myFont}
          myFont2={myFont2}
        />
      </motion.div>
    </>
  );
};

export default Stories;

export async function getStaticProps({ locale }) {
  let obj;
  switch (locale) {
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
