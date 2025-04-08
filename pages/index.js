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
import { Icon } from "@iconify/react";
const myFont2 = localFont({ src: "../fonts/Raleway-Regular.ttf" });

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
          <div className="flex flex-col w-full gap-4 lg:flex-row lg:justify-between lg:gap-0 ">
            <MaskText>
              <h1
                dangerouslySetInnerHTML={{ __html: translation.hero.title }}
                className="text-6xl  xl:text-[6rem] text-white dark:text-third fxl:text-[9rem] 3xl:text-[12rem] 3xl:max-w-3xl"
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
                      className={`${myFont2.className} my-1 font-regular text-base  text-white dark:text-third  lg:text-2xl lg:max-w-2xl 2xl:max-w-4xl fxl:max-w-7xl 3xl:text-4xl 3xl:max-w-7xl`}
                    ></p>
                  </MaskText>
                );
              })}
            </div>
          </div>
          {/* <div className="flex justify-center py-6 text-second">
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
          </div> */}
          {/* <div className="absolute z-20 flex items-end justify-end w-full mx-auto -translate-x-1/2 -translate-y-1/2 left-1/2 -bottom-8 lg:bottom-10 lg:left-10">
           
          </div> */}
          <div className="absolute left-0 grid items-center w-full grid-cols-2 lg:grid-cols-3 bottom-14 lg:bottom-20 ">
            {/* <Link
              href="mailto:info@thallion-dev.it"
              className="px-4 py-2 text-sm font-medium text-white uppercase border-2 border-white rounded-[30px] dark:border-third lg:text-base dark:text-third 3xl:text-2xl"
            >
              Contattaci
            </Link> */}
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
          {translation.cards.map((card, index) => {
            return (
              <>
                <div className="relative h-[50vh] lg:h-screen" key={index}>
                  <Image
                    fill
                    src={card.img}
                    alt="cover stories"
                    className="object-cover object-top w-full h-full"
                  />
                  <div className="absolute z-20 flex items-end w-full h-full bottom-4 left-4 lg:left-10 lg:bottom-10 ">
                    <h2 className="flex items-center uppercase">
                      <MaskText>
                        <span
                          className={`${myFont2.className} leading-none text-sm lg:text-3xl text-white fxl:text-5xl 3xl:text-6xl`}
                        >
                          {card.brand1}
                        </span>
                      </MaskText>
                      <span className="relative w-4 h-4 mx-2 lg:h-8 lg:w-8 2xl:w-[4.5rem] 2xl:h-20 3xl:w-32 3xl:h-32 fxl:w-24 fxl:h-24">
                        <Image
                          src="/assets/cofactory_nuovaX_green.svg"
                          fill
                          className="object-cover"
                          alt="logo"
                        />
                      </span>
                      <MaskText>
                        <span
                          className={`${myFont2.className} leading-none text-sm lg:text-3xl text-white fxl:text-5xl 3xl:text-6xl`}
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

        {/* <div className="w-[90%] mx-auto mt-4 h-[0.05rem] bg-white/60 dark:bg-third/60 lg:mt-6"></div>
        <div className="w-full mx-auto overflow-hidden">
          <ParallaxText marqueeText={translation.marqueeLink} />
        </div>
        <div className="w-[90%] mx-auto h-[0.05rem] bg-white/60 dark:bg-third/60 mb-4 lg:mb-6"></div> */}
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
