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

  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy(); // Pulizia per prevenire eventuali perdite di memoria
  //   };
  // }, []);
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="w-[90%] mx-auto">
          <div className="relative flex flex-wrap items-center justify-between w-full mt-10 gap-y-6">
            <div>
              <label className="text-xl text-white/60">Filter: </label>
              <span className="ml-2 text-xl text-white">
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
                  className="w-6 text-white dark:text-third"
                />
                All
              </button>
              <button
                className={`py-2 px-8 rounded-lg shadow flex items-center text-white uppercase gap-1 justify-center lg:hidden bg-[#5B5B5B]/60`}
                onClick={() => toggleDrawer()}
              >
                <Icon
                  icon="mage:filter"
                  className="w-6 text-white dark:text-third"
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
                  className="w-6 text-second dark:text-third"
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
                  className="w-6 text-pink dark:text-third"
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
                  className="w-6 text-yellow dark:text-third"
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
                        <div className="absolute flex-col items-center justify-center hidden w-full text-3xl font-bold text-white transition-all duration-1000 ease-in -translate-x-1/2 translate-y-1/2 top-1/2 left-1/2 bottom-1/2 lg:flex lg:flex-row dark:text-third lg:text-4xl">
                          <span className={`${myFont.className}`}>
                            {el.brand1}
                          </span>{" "}
                          <span className="relative w-8 h-8 mx-6">
                            <Image
                              src="/assets/logo/new_logo_intro.svg"
                              fill
                              className="object-cover w-full h-full"
                            />
                          </span>{" "}
                          <span className={`${myFont.className}`}>
                            {el.brand2}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center py-6 text-lg font-bold text-white lg:hidden">
                      <span className={`${myFont2.className}`}>
                        {el.brand1}
                      </span>{" "}
                      <span className="relative w-5 h-5 mx-4">
                        <Image
                          src="/assets/logo/new_logo_intro.svg"
                          fill
                          className="object-cover w-full h-full"
                        />
                      </span>{" "}
                      <span className={`${myFont2.className}`}>
                        {el.brand2}
                      </span>
                    </div>
                    <div className="flex justify-between w-full text-sm text-white uppercase lg:hidden">
                      <div className="flex gap-2">
                        {el.icons.map((icon, index) => (
                          <Icon
                            key={index}
                            icon={icon.name}
                            width={25}
                            className={`text-${icon.color}`}
                          />
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
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white rounded-t-lg shadow-lg lg:hidden"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Select Category</h2>
            <button className="text-lg" onClick={() => setShowDrawer(false)}>
              <IoChevronDownOutline size={24} />
            </button>
          </div>
          <div className="flex flex-col justify-center gap-4">
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
                className="w-6 text-white dark:text-third"
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
                className="w-6 text-second dark:text-third"
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
                className="w-6 text-pink dark:text-third"
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
                className="w-6 text-yellow dark:text-third"
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
