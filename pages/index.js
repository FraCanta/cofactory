import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Hero from "@/components/layout/Hero";
import localFont from "next/font/local";
import Head from "next/head";
import Link from "next/link";
import { MaskText } from "@/components/MaskText";
import translationIT from "@/public/locales/it/home.json";
import translationEN from "@/public/locales/en/home.json";
import TimbroMarquee from "@/components/TimbroMarquee/TimbroMarquee";
import ParallaxText from "@/components/ParallaxText";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import { Icon } from "@iconify/react";
import MaskIntro from "@/components/layout/MaskIntro/MaskIntro";
import CarouselCases from "@/components/layout/CarouselCases/CarouselCases";
const myFont2 = localFont({ src: "../fonts/Raleway-Regular.ttf" });

const Home = ({ translation }) => {
  const [maskDone, setMaskDone] = useState(false);
  const lenisRef = useRef(null); // Memorizza Lenis

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
          <div className="relative flex flex-col items-end w-full gap-4 lg:flex-row lg:justify-between lg:gap-0">
            <MaskText>
              <h1
                className="leading-none text-6xl xl:text-[6rem] xl:-mb-3 text-white dark:text-third fxl:text-[9rem] 3xl:text-[12rem] 3xl:max-w-3xl"
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
                      className={`font-raleway font-medium leading-none text-base text-white dark:text-third lg:text-2xl lg:max-w-2xl 2xl:max-w-4xl fxl:max-w-7xl 3xl:text-4xl 3xl:max-w-7xl`}
                    ></p>
                  </MaskText>
                );
              })}
            </div>
          </div>

          <div className="absolute left-0 grid items-center w-full grid-cols-2 lg:grid-cols-3 bottom-14 lg:bottom-20 ">
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

        <div
          className="relative z-20 w-screen min-h-screen overflow-x-hidden"
          id="works"
        >
          <CarouselCases translation={translation} />
        </div>
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
