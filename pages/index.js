import React, { useEffect, useRef } from "react";
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
import RevealOnScroll from "@/components/RevealOnScroll/RevealOnScroll";
import { Icon } from "@iconify/react";
const myFont = localFont({ src: "../fonts/ClearfaceStd-Bold.woff" });
const myFont2 = localFont({ src: "../fonts/Raleway-Light.ttf" });
const myFont3 = localFont({ src: "../fonts/Tactico-Grunge.otf" });

const Home = ({ translation }) => {
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
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Hero>
          <div className="flex flex-col w-full gap-4 lg:flex-row lg:justify-between lg:gap-0">
            <MaskText>
              <h1
                dangerouslySetInnerHTML={{ __html: translation.hero.title }}
                className="text-6xl font-bold leading-none  xl:text-[6rem] text-white dark:text-third"
              ></h1>
            </MaskText>
            <div className="flex flex-col justify-end gap-4">
              {translation.hero.description.map((text, index) => {
                return (
                  <MaskText>
                    <p
                      key={index}
                      dangerouslySetInnerHTML={{
                        __html: text.text,
                      }}
                      className={`${myFont2.className} my-1 font-semibold text-base  text-white dark:text-third  lg:text-2xl lg:max-w-2xl 2xl:max-w-4xl`}
                    ></p>
                  </MaskText>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center py-6 text-second">
            <Link href="#works" onClick={scrollToWorks}>
              <motion.div
                animate={{ y: [0, 10, 0] }} // Movimento su e giù
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Icon icon="entypo:chevron-thin-down" width="30" height="30" />
              </motion.div>
            </Link>
          </div>
          {/* <div className="absolute z-20 flex items-end justify-end w-full mx-auto -translate-x-1/2 -translate-y-1/2 left-1/2 -bottom-8 lg:bottom-10 lg:left-10">
           
          </div> */}
          <div className="absolute left-0 flex items-center justify-between w-full bottom-14 lg:bottom-20 ">
            <Link
              href="mailto:info@thallion-dev.it"
              className="px-4 py-2 text-sm font-medium text-white uppercase border-2 border-white rounded-md dark:border-third lg:text-base dark:text-third"
            >
              Contattaci
            </Link>
            <div>
              <TimbroMarquee />
            </div>
          </div>
        </Hero>

        <div
          className="relative z-20 w-screen min-h-screen overflow-x-hidden"
          id="works"
        >
          {translation.cards.map((card, index) => {
            return (
              <>
                <div className="relative h-[50vh] lg:h-screen" key={index}>
                  <Image
                    fill
                    src={card.img}
                    alt="cover stories"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute z-20 flex items-end w-full h-full bottom-4 left-4 lg:left-10 lg:bottom-10 ">
                    <h2 className="flex items-center gap-1 uppercase">
                      <MaskText>
                        <span
                          className={`leading-snug text-2xl lg:text-4xl text-white `}
                        >
                          {card.brand1}
                        </span>
                      </MaskText>
                      <span className="relative w-4 h-4 mx-2 lg:h-8 lg:w-8">
                        <Image
                          src="/assets/logo/new_logo_intro.svg"
                          fill
                          className="object-cover rotate-90 contrast-125"
                          alt="logo"
                        />
                      </span>
                      <MaskText>
                        <span
                          className={` leading-snug text-2xl lg:text-4xl text-white`}
                        >
                          {card.brand2}
                        </span>
                      </MaskText>
                    </h2>
                  </div>
                  <div className="absolute inset-0 w-full h-full bg-third/30"></div>
                </div>
              </>
            );
          })}
        </div>

        <div className="w-[90%] mx-auto mt-20 h-[0.05rem] bg-white/60 dark:bg-third/60 lg:mt-6"></div>
        <div className="w-full mx-auto overflow-hidden">
          <ParallaxText marqueeText={translation.marqueeLink} />
        </div>
        <div className="w-[90%] mx-auto h-[0.05rem] bg-white/60 dark:bg-third/60"></div>
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
