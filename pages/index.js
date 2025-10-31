import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Hero from "@/components/layout/Hero";
import Head from "next/head";
import Link from "next/link";
import { MaskText } from "@/components/MaskText";
import translationIT from "@/public/locales/it/home.json";
import translationEN from "@/public/locales/en/home.json";
import TimbroMarquee from "@/components/TimbroMarquee/TimbroMarquee";
import Lenis from "@studio-freight/lenis";
import { AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import CarouselCases from "@/components/layout/CarouselCases/CarouselCases";
import HorizontalScroll from "@/components/HorizontalScroll/HorizontalScroll";
import ParallaxText from "@/components/ParallaxText";
import BannerList from "@/components/BannerList/BannerList";

const Home = ({ translation }) => {
  const lenisRef = useRef(null); // Memorizza Lenis
  const [showScroll, setShowScroll] = useState(false);
  const scrollRef = useRef(null);
  const [showApproach, setShowApproach] = useState(false);

  // Blocca lo scroll del body quando l'overlay è attivo
  useEffect(() => {
    if (showApproach) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showApproach]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    lenisRef.current = lenis; // Salva l'istanza

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Pulizia dell'istanza
  }, []);

  const scrollToWorks = (e) => {
    e.preventDefault();
    const target = document.querySelector("#works");
    if (target && lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -50 }); // Usa l'istanza salvata
    }
  };
  return (
    <>
      <Head>
        <title>Cofactory - Home</title>
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "linear" }}
      >
        <Hero>
          <div className="relative flex flex-col items-end w-full gap-4 md:items-start lg:items-end lg:flex-row lg:justify-between lg:gap-0">
            <MaskText>
              <h1
                className="leading-none text-6xl  md:text-[7.5rem] xl:-mb-3 text-white dark:text-third fxl:text-[9rem] 3xl:text-[12rem] 3xl:max-w-3xl"
                dangerouslySetInnerHTML={{ __html: translation.hero.title }}
              ></h1>
            </MaskText>
            <div className="flex flex-col justify-end gap-4">
              {translation.hero.description.map((text, index) => {
                return (
                  <MaskText key={index}>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: text.text,
                      }}
                      className={`font-raleway font-medium xl:leading-none text-base text-white dark:text-third md:text-2xl lg:max-w-2xl 2xl:max-w-4xl fxl:max-w-7xl 3xl:text-4xl 3xl:max-w-7xl`}
                    ></p>
                  </MaskText>
                );
              })}
            </div>
          </div>

          <div className="absolute left-0 grid items-center w-full grid-cols-2 lg:grid-cols-3 bottom-14 md:bottom-24 lg:bottom-20 ">
            <div className="hidden lg:block"></div>
            <div className="flex lg:justify-center text-second">
              <Link href="#works" onClick={scrollToWorks}>
                <motion.div
                  animate={{ y: [0, 10, 0] }} // Movimento su e giù
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Icon
                    icon="entypo:chevron-thin-down"
                    width="30"
                    height="30"
                    className="text-second"
                  />
                </motion.div>
              </Link>
            </div>
            <div>
              <TimbroMarquee />
            </div>
          </div>
        </Hero>
        <div className="w-full mx-auto overflow-hidden lg:mb-4">
          <ParallaxText
            marqueeText={translation.marqueeLink}
            onToggle={() => setShowApproach(true)}
          />
        </div>
        {/* Overlay */}
        <AnimatePresence>
          {showApproach && (
            <motion.div
              key="approach"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
              className="fixed inset-0 z-[20000] flex flex-col bg-third backdrop-blur-md"
            >
              {/* Bottone chiudi */}
              <button
                onClick={() => {
                  // 🔥 Riporta subito in cima, invisibilmente
                  window.scrollTo({ top: 0, behavior: "auto" });

                  // Poi chiudi l’overlay
                  setShowApproach(false);
                }}
                className="absolute z-50 px-4 py-1 text-white uppercase border border-white top-8 right-6 hover:bg-white hover:text-black"
              >
                Chiudi
              </button>

              {/* Contenitore scrollabile interno */}
              <div className="flex-1 overflow-y-auto">
                <HorizontalScroll scrollTarget="self" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <BannerList translation={translation} id="works" />
      </motion.div>
    </>
  );
};

export default Home;

export async function getStaticProps({ locale }) {
  let obj;
  switch (locale) {
    case "it":
      obj = translationIT;
      break;
    case "en":
      obj = translationEN;
      break;
    default:
      obj = translationIT;
      break;
  }

  return {
    props: {
      translation: obj?.home,
    },
    revalidate: 60,
  };
}
