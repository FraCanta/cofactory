import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/layout/Hero";
import Head from "next/head";
import { MaskText } from "@/components/MaskText";
import translationIT from "@/public/locales/it/home.json";
import translationEN from "@/public/locales/en/home.json";
import TimbroMarquee from "@/components/TimbroMarquee/TimbroMarquee";
import { AnimatePresence } from "framer-motion";
import HorizontalScroll from "@/components/HorizontalScroll/HorizontalScroll";
import ParallaxText from "@/components/ParallaxText";
import BannerList from "@/components/BannerList/BannerList";
import HeroLogo from "@/components/layout/HeroLogo";

const Home = ({ translation }) => {
  const [showApproach, setShowApproach] = useState(false);

  // salva la posizione verticale corrente
  const [savedScrollY, setSavedScrollY] = useState(0);

  // ref al contenitore scrollabile dell’overlay
  const approachRef = useRef(null);

  // blocca lo scroll del body quando l’overlay è aperto
  useEffect(() => {
    document.body.style.overflow = showApproach ? "hidden" : "";
  }, [showApproach]);

  // resetta lo scroll interno quando apri overlay
  useEffect(() => {
    if (showApproach && approachRef.current) {
      approachRef.current.scrollTop = 0; // prima sezione
    }
  }, [showApproach]);

  return (
    <>
      <Head>
        <title>Cofactory - Home</title>
      </Head>
      <HeroLogo />

      <Hero>
        <div className="relative flex flex-col items-end w-full gap-4 md:items-start lg:items-end lg:flex-row lg:justify-between lg:gap-0">
          <MaskText>
            <h1
              className="leading-none text-6xl md:text-[7.5rem] xl:-mb-6 text-white dark:text-third fxl:text-[9rem] 3xl:text-[12rem] 3xl:max-w-3xl"
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
                    className={`font-raleway font-medium  xl:leading-none text-base text-white dark:text-third md:text-2xl lg:max-w-2xl 2xl:max-w-4xl fxl:max-w-7xl 3xl:text-4xl 3xl:max-w-7xl`}
                  ></p>
                </MaskText>
              );
            })}
          </div>
        </div>

        <div className="absolute left-0 grid items-center w-full grid-cols-2 lg:grid-cols-3 bottom-14 md:bottom-24 lg:bottom-20">
          <div className="hidden lg:block"></div>
          <div className="flex lg:justify-center text-second"></div>
          <div>
            <TimbroMarquee />
          </div>
        </div>
      </Hero>
      <div className="w-full mx-auto overflow-hidden lg:mb-4">
        <ParallaxText
          marqueeText={translation.marqueeLink}
          onToggle={() => {
            // salva la posizione pagina
            setSavedScrollY(window.scrollY);

            // apri overlay
            setShowApproach(true);
          }}
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
                setShowApproach(false);

                // ripristina la posizione della pagina di apertura
                window.scrollTo({
                  top: savedScrollY,
                  behavior: "instant",
                });
              }}
              className="absolute z-50 px-4 py-1 text-white uppercase border border-white top-8 right-6 hover:bg-white hover:text-black"
            >
              Chiudi
            </button>

            {/* Contenitore scrollabile interno */}
            <div ref={approachRef} className="flex-1 overflow-y-auto">
              <HorizontalScroll scrollTarget={approachRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <BannerList translation={translation} id="works" />
      {/* </motion.div> */}
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
