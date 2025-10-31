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
import BlurryLights from "@/components/layout/BlurryLights";
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative z-[1] pb-20 md:pb-40 lg:pb-0"
      >
        <div className="absolute inset-0 -z-10">
          <BlurryLights />
        </div>
        <div className="w-[90%] mx-auto md:mt-[200px] mt-[120px] ">
          <div className="relative flex flex-wrap items-center justify-center w-full my-24 lg:justify-between gap-y-6">
            <div className="hidden lg:block">
              {/* <label className="text-xl text-white/60">Filter: </label>
              <span className="ml-2 text-xl text-white">
                {selectedCategory}
              </span> */}
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
