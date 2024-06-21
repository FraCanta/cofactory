import { motion } from "framer-motion";
import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import localFont from "next/font/local";
import Head from "next/head";
import casesIT from "../public/locales/it/cases.json";
import casesEN from "../public/locales/en/cases.json";

const myFont = localFont({ src: "../fonts/ClearfaceStd-Bold.woff" });
const myFont2 = localFont({ src: "../fonts/Raleway-Regular.ttf" });

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

  const toggleDrawer = () => {
    setShowDrawer((prev) => !prev);
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
        className="h-screen flex items-center flex-col justify-center w-full mx-auto gap-6 bg-pink/20 dark:bg-pink/30"
      >
        <h1
          className={`${myFont.className} text-5xl py-1 md:text-[6rem] text-white dark:text-third lg:text-center 2xl:text-8xl w-[90%] mx-auto `}
        >
          <span>Happy</span>
          <span className="text-white/60 dark:text-third/60 ml-4">
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="w-[90%] mx-auto">
          <div className="relative w-full mt-10 flex flex-wrap gap-y-6 justify-between items-center">
            <div>
              <label className="text-white/60 text-xl">Filter: </label>
              <span className="text-white text-xl ml-2">
                {selectedCategory}
              </span>
            </div>
            <div className="flex items-center gap-4 ">
              <button
                className={`py-2 px-8 rounded-lg shadow lg:flex items-center text-white uppercase gap-1 justify-center hidden ${
                  activeButton === "All"
                    ? "bg-[#5B5B5B] transition-all"
                    : "bg-[#5B5B5B]/40"
                }`}
                onClick={() => handleCategorySelect("All")}
              >
                <Icon
                  icon="mage:filter"
                  className="text-white dark:text-third w-6"
                />
                All
              </button>
              <button
                className={`py-2 px-8 rounded-lg shadow flex items-center text-white uppercase gap-1 justify-center lg:hidden bg-[#5B5B5B]/60`}
                onClick={() => toggleDrawer()}
              >
                <Icon
                  icon="mage:filter"
                  className="text-white dark:text-third w-6"
                />
                Filter
              </button>
              <button
                className={`py-2 hidden px-8 rounded-lg shadow lg:flex items-center text-white uppercase gap-1 ${
                  activeButton === "Brand"
                    ? "bg-[#5B5B5B] transition-all"
                    : "bg-[#5B5B5B]/40"
                }`}
                onClick={() => handleCategorySelect("Brand")}
              >
                <Icon
                  icon="mingcute:copyright-line"
                  className="text-second dark:text-third w-6"
                />
                Brand
              </button>
              <button
                className={`py-2 hidden px-8 rounded-lg shadow lg:flex items-center text-white uppercase gap-1 ${
                  activeButton === "Box"
                    ? "bg-[#5B5B5B] transition-all"
                    : "bg-[#5B5B5B]/40"
                }`}
                onClick={() => handleCategorySelect("Box")}
              >
                <Icon
                  icon="mingcute:box-2-line"
                  className="text-pink dark:text-third w-6"
                />
                Box
              </button>
              <button
                className={`py-2 hidden px-8 rounded-lg shadow lg:flex items-center text-white uppercase gap-1 ${
                  activeButton === "Movie"
                    ? "bg-[#5B5B5B] transition-all"
                    : "bg-[#5B5B5B]/40"
                }`}
                onClick={() => handleCategorySelect("Movie")}
              >
                <Icon
                  icon="mingcute:movie-line"
                  className="text-yellow dark:text-third w-6"
                />
                Movie
              </button>
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
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link href={`/stories/${el.button}`}>
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
                        <div className="absolute hidden top-1/2 left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 lg:flex flex-col lg:flex-row items-center justify-center transition-all duration-1000 ease-in text-white dark:text-third text-3xl lg:text-4xl font-bold w-full">
                          <span className={`${myFont.className}`}>
                            {el.brand1}
                          </span>{" "}
                          <span className="relative h-8 w-8 mx-6">
                            <Image
                              src="/assets/logo/new_logo_intro.svg"
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
                    <div className="py-6 text-white text-lg font-bold flex flex-wrap items-center lg:hidden">
                      <span className={`${myFont2.className}`}>
                        {el.brand1}
                      </span>{" "}
                      <span className="relative h-5 w-5 mx-4">
                        <Image
                          src="/assets/logo/new_logo_intro.svg"
                          fill
                          className="h-full w-full object-cover"
                        />
                      </span>{" "}
                      <span className={`${myFont2.className}`}>
                        {el.brand2}
                      </span>
                    </div>
                    <div className="text-white text-sm uppercase flex justify-between w-full lg:hidden">
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
                        <Link
                          href={`/stories/${el.button}`}
                          className="relative"
                        ></Link>
                      </div>
                    </div>
                    <div className="w-full h-[0.2px] bg-white my-4 block lg:hidden"></div>
                  </Link>
                </div>
              );
            })}
        </div>
      </motion.div>
      {showDrawer && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "linear", stiffness: 100 }}
          className="fixed bottom-0 left-0 right-0 bg-white rounded-t-lg p-4 shadow-lg z-50 lg:hidden"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Select Category</h2>
            <button className="text-lg" onClick={() => setShowDrawer(false)}>
              <IoChevronDownOutline size={24} />
            </button>
          </div>
          <div className="flex flex-col gap-4 justify-center">
            <button
              className={`py-2 px-8 rounded-lg shadow flex items-center text-white uppercase gap-1 w-full justify-center ${
                activeButton === "All"
                  ? "bg-[#5B5B5B] transition-all"
                  : "bg-[#5B5B5B]/60"
              }`}
              onClick={() => handleCategorySelect("All")}
            >
              <Icon
                icon="mage:filter"
                className="text-white dark:text-third w-6"
              />
              All
            </button>
            <button
              className={`py-2 px-8 rounded-lg shadow flex items-center text-white uppercase gap-1 w-full justify-center ${
                activeButton === "Brand"
                  ? "bg-[#5B5B5B] transition-all"
                  : "bg-[#5B5B5B]/40"
              }`}
              onClick={() => handleCategorySelect("Brand")}
            >
              <Icon
                icon="mingcute:copyright-line"
                className="text-second dark:text-third w-6"
              />
              Brand
            </button>
            <button
              className={`py-2 px-8 rounded-lg shadow flex items-center text-white uppercase gap-1  w-full justify-center ${
                activeButton === "Box"
                  ? "bg-[#5B5B5B] transition-all"
                  : "bg-[#5B5B5B]/40"
              }`}
              onClick={() => handleCategorySelect("Box")}
            >
              <Icon
                icon="mingcute:box-2-line"
                className="text-pink dark:text-third w-6"
              />
              Box
            </button>
            <button
              className={`py-2 px-8 rounded-lg shadow flex items-center text-white uppercase gap-1 w-full justify-center ${
                activeButton === "Movie"
                  ? "bg-[#5B5B5B] transition-all"
                  : "bg-[#5B5B5B]/40"
              }`}
              onClick={() => handleCategorySelect("Movie")}
            >
              <Icon
                icon="mingcute:movie-line"
                className="text-yellow dark:text-third w-6"
              />
              Movie
            </button>
          </div>
        </motion.div>
      )}
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
