import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import casesIT from "../public/locales/it/cases.json";
import casesEN from "../public/locales/en/cases.json";

import cx from "clsx";
import ParallaxCases from "@/components/ParallaxCases/ParallaxCases";
import BlurryLights from "@/components/layout/BlurryLights";

// ------------------------------
// Floating Filters Component
// ------------------------------
function FloatingFilters({ show, selectedCategory, handleCategorySelect }) {
  const categories = ["All", "Brand", "Box", "Movie"];

  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-10 z-[999]">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={show ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex items-center justify-center gap-4 px-6 py-3 border rounded-full shadow-xl bg-white/60 dark:bg-white border-black/10 dark:border-white/10 backdrop-blur-md w-max"
      >
        {categories.map((cat) => (
          <label
            key={cat}
            className="flex items-center gap-2 text-xs uppercase cursor-pointer text-third"
          >
            <div className="grid place-items-center ">
              <input
                type="radio"
                className="w-4 h-4 col-start-1 row-start-1 border-2 rounded-full appearance-none border-third peer shrink-0"
                onChange={() => handleCategorySelect(cat)}
                checked={selectedCategory === cat}
                name="floating-category"
              />
              <div
                className={cx(
                  "col-start-1 row-start-1 w-full h-full rounded-full border  border-third",
                  "peer-checked:bg-third"
                )}
              />
            </div>
            {cat}
          </label>
        ))}
      </motion.div>
    </div>
  );
}

// ------------------------------
// PAGE
// ------------------------------
const Stories = ({ translation }) => {
  const cases = translation.cards;
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtersRef = useRef(null);
  const [hideBecauseFilter, setHideBecauseFilter] = useState(false);
  const [hideBecauseFooter, setHideBecauseFooter] = useState(false);

  const showFloatingFilters = !hideBecauseFilter && !hideBecauseFooter;

  const contentRef = useRef(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);

    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  // Filtri originali
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setHideBecauseFilter(entry.isIntersecting),
      { threshold: 0.1 }
    );
    filtersRef.current && observer.observe(filtersRef.current);
    return () => filtersRef.current && observer.unobserve(filtersRef.current);
  }, []);

  // Footer
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHideBecauseFooter(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(footer);
    return () => observer.unobserve(footer);
  }, []);

  return (
    <>
      <Head>
        <title>Cofactory - Stories</title>
      </Head>
      {/* FILTRI FLOTTANTI */}
      <FloatingFilters
        show={showFloatingFilters}
        selectedCategory={selectedCategory}
        handleCategorySelect={handleCategorySelect}
      />
      {/* CONTENUTO */}
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

        <div ref={contentRef} className="w-[90%] mx-auto relative">
          <div
            ref={filtersRef}
            className="relative flex flex-wrap items-center justify-center w-full pb-10 pt-[10rem] lg:justify-between gap-y-6"
          >
            <div className="hidden lg:block"></div>
            <div className="flex items-start gap-6 lg:gap-10">
              {/* ---- FILTER RADIO BUTTONS ORIGINALI ---- */}
              {["All", "Brand", "Box", "Movie"].map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-2 text-white uppercase cursor-pointer dark:text-third"
                >
                  <div className="grid place-items-center">
                    <input
                      type="radio"
                      className="w-4 h-4 col-start-1 row-start-1 border-2 border-white rounded-full appearance-none dark:border-third peer shrink-0"
                      onChange={() => handleCategorySelect(cat)}
                      checked={selectedCategory === cat}
                      name="category"
                    />
                    <div
                      className={cx(
                        "col-start-1 row-start-1 w-full h-full rounded-full peer-checked:bg-white dark:peer-checked:bg-third"
                      )}
                    />
                  </div>
                  {cat}
                </label>
              ))}
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
  }

  return {
    props: { translation: obj?.works },
    revalidate: 60,
  };
}
