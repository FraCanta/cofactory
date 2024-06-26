import React, { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Hero from "@/components/layout/Hero";
import localFont from "next/font/local";
import Head from "next/head";
import Chat from "@/components/ChatBubble/Chat";
import Link from "next/link";
import { PiArrowUpRightThin } from "react-icons/pi";
import { MaskText } from "@/components/MaskText";
import translationIT from "@/public/locales/it/home.json";
import translationEN from "@/public/locales/en/home.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import TimbroMarquee from "@/components/TimbroMarquee/TimbroMarquee";
import ParallaxText from "@/components/ParallaxText";
import Card from "@/components/Card/Card";
import Lenis from "@studio-freight/lenis";
gsap.registerPlugin(ScrollTrigger);

const myFont = localFont({ src: "../fonts/ClearfaceStd-Bold.woff" });
const myFont2 = localFont({ src: "../fonts/Raleway-Light.ttf" });

const Home = ({ translation }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Pulizia per prevenire eventuali perdite di memoria
    };
  }, []);

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
          <MaskText>
            <h1
              dangerouslySetInnerHTML={{ __html: translation.hero.title }}
              className={`${myFont.className} text-5xl py-1 md:text-[6rem]  lg:text-[5rem] xl:text-[6rem] text-white dark:text-third lg:text-center 2xla:text-9xl max-w-6xl`}
            ></h1>
          </MaskText>
          <div className="lg:w-[65%] mx-auto flex flex-col gap-8">
            <MaskText>
              <p
                dangerouslySetInnerHTML={{
                  __html: translation.hero.description,
                }}
                className={`${myFont2.className}   font-[300] text-[20px] md:text-[30px] lg:text-[20px] xl:text-[30px] text-white dark:text-third md:text-center 2xl:text-xl 2xla:text-[25px]`}
              ></p>
            </MaskText>
          </div>
        </Hero>
        <div className="relative w-full">
          <div className="absolute z-20 flex justify-end w-11/12 mx-auto -translate-x-1/2 -translate-y-1/2 -bottom-10 left-1/2">
            <TimbroMarquee />
          </div>
        </div>

        <div className="relative w-11/12 min-h-screen mx-auto" ref={container}>
          {translation.cards.map((card, index) => {
            const targetScale = 1 - (translation.cards.length - index) * 0.05;
            return (
              <Card
                key={index}
                {...card}
                i={index}
                range={[index * 0.25, 1]}
                targetScale={targetScale}
                progress={scrollYProgress}
                brand1={card.brand1}
                brand2={card.brand2}
              />
            );
          })}
        </div>

        <div className="w-[90%] mx-auto mt-20 h-[0.05rem] bg-white/60 dark:bg-third/60 2xl:mt-0 "></div>
        <div className="w-full mx-auto overflow-hidden">
          <ParallaxText marqueeText={translation.marqueeLink} />
        </div>
        <div className="w-[90%] mx-auto  h-[0.05rem] bg-white/60 dark:bg-third/60"></div>

        <div className="w-[90%] mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 text-white dark:text-third min-h-screen gap-8 md:gap-10 ">
          <Chat />
          <div className="flex flex-col gap-8 p-0 py-6 md:p-8">
            <h2 className={`${myFont.className} text-4xl lg:text-7xl`}>
              Testo accattivante da mettere qui
            </h2>
            <p className={`${myFont2.className} text-xl`}>
              un paragrafo che spieghi velocemente cosa avrebbero da guadagnarci
              e invitandoli a contattarvi. Un testo che arrivi fino al max il
              terzo rigo!
            </p>
            <Link
              href="/contatti"
              className={`${myFont2.className} flex gap-1 items-center text-xl uppercase hover:text-second font-bold`}
              target="_blank"
            >
              contattaci <PiArrowUpRightThin />
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;

export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
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
