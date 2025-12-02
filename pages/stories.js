import { motion } from "framer-motion";
import { useState } from "react";
import Head from "next/head";
import casesIT from "../public/locales/it/cases.json";
import casesEN from "../public/locales/en/cases.json";

import cx from "clsx";
import ParallaxCases from "@/components/ParallaxCases/ParallaxCases";
import BlurryLights from "@/components/layout/BlurryLights";
const Stories = ({ translation }) => {
  const cases = translation.cards;
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
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
        className="relative z-[1] pb-20 md:pb-40 lg:pb-0 bg-third dark:bg-white"
      >
        <div className="absolute inset-0 -z-10">
          <BlurryLights />
        </div>
        <div className="w-[90%] mx-auto ">
          <div className="relative flex flex-wrap items-center justify-center w-full pb-10 pt-[10rem] lg:justify-between gap-y-6">
            <div className="hidden lg:block"></div>
            <div className="flex items-start gap-6 lg:gap-10 ">
              <label className="flex items-center gap-2 text-white uppercase cursor-pointer dark:text-third">
                <div className="grid place-items-center">
                  <input
                    type="radio"
                    className="w-4 h-4 col-start-1 row-start-1 border-2 border-white rounded-full appearance-none dark:border-third peer shrink-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-second "
                    onChange={() => handleCategorySelect("All")}
                    value="All"
                    name="category" // 🔁 assicurati che tutte le radio abbiano lo stesso name
                    checked={selectedCategory === "All"}
                  />
                  <div
                    className={cx(
                      "col-start-1 row-start-1",
                      "w-full h-full rounded-full peer-checked:bg-white dark:peer-checked:bg-third "
                    )}
                  />
                </div>
                All
              </label>

              <label className="flex items-center gap-2 text-white uppercase cursor-pointer dark:text-third ">
                <div className="grid place-items-center">
                  <input
                    type="radio"
                    className="w-4 h-4 col-start-1 row-start-1 border-2 border-white rounded-full appearance-none dark:border-third peer shrink-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-second "
                    onChange={() => handleCategorySelect("Brand")}
                    value="Brand"
                    name="category" // 🔁 assicurati che tutte le radio abbiano lo stesso name
                    checked={selectedCategory === "Brand"}
                  />
                  <div
                    className={cx(
                      "col-start-1 row-start-1",
                      "w-full h-full rounded-full peer-checked:bg-white dark:peer-checked:bg-third"
                    )}
                  />
                </div>
                Brand
              </label>
              <label className="flex items-center gap-2 text-white uppercase cursor-pointer dark:text-third">
                <div className="grid place-items-center">
                  <input
                    type="radio"
                    className="w-4 h-4 col-start-1 row-start-1 border-2 border-white rounded-full appearance-none dark:border-third peer shrink-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-second "
                    onChange={() => handleCategorySelect("Box")}
                    value="Box"
                    name="category" // 🔁 assicurati che tutte le radio abbiano lo stesso name
                    checked={selectedCategory === "Box"}
                  />
                  <div
                    className={cx(
                      "col-start-1 row-start-1",
                      "w-full h-full rounded-full peer-checked:bg-white dark:peer-checked:bg-third"
                    )}
                  />
                </div>
                Box
              </label>
              <label className="flex items-center gap-2 text-white uppercase cursor-pointer dark:text-third">
                <div className="grid place-items-center">
                  <input
                    type="radio"
                    className="w-4 h-4 col-start-1 row-start-1 border-2 border-white rounded-full appearance-none dark:border-third peer shrink-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-second "
                    onChange={() => handleCategorySelect("Movie")}
                    value="Movie"
                    name="category" // 🔁 assicurati che tutte le radio abbiano lo stesso name
                    checked={selectedCategory === "Movie"}
                  />
                  <div
                    className={cx(
                      "col-start-1 row-start-1",
                      "w-full h-full rounded-full peer-checked:bg-white dark:peer-checked:bg-third"
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
