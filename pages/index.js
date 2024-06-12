import React, { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Hero from "@/components/layout/Hero";
import localFont from "next/font/local";
import Line from "@/components/Line";
import Marquee from "@/components/Marquee/Marquee";
import LavoriSec from "@/components/LavoriSec";
import LinkMarquee from "@/components/LinkMarquee";
import Head from "next/head";
import Chat from "@/components/ChatBubble/Chat";
import Link from "next/link";
import { PiArrowUpRightThin } from "react-icons/pi";
import { MaskText } from "@/components/MaskText";
import translationIT from "@/public/locales/it/home.json";
import translationEN from "@/public/locales/en/home.json";
import Image from "next/image";
import Card from "@/components/Card/Card";
const myFont = localFont({ src: "../fonts/ClearfaceStd-Bold.woff" });
const myFont2 = localFont({ src: "../fonts/Raleway-Light.ttf" });

const Home = ({ translation }) => {
  console.log(translation);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

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
            {" "}
            <h1
              className={`${myFont.className} text-5xl py-1 md:text-[6rem] text-white dark:text-third lg:text-center 2xl:text-8xl max-w-4xl`}
            >
              <span className="text-white/60 dark:text-third/60"> Sì.</span>
              Siamo un’agenzia di incontri.
            </h1>
          </MaskText>
          <div className="lg:w-[65%] mx-auto">
            <MaskText>
              <p
                className={`${myFont2.className} font-[300] text-[20px] md:text-[30px]  text-white dark:text-third md:text-center  2xl:text-[30px]`}
              >
                A volte creiamo legami duraturi. Altre volte, invece, nascono
                dei colpi di fulmine, brevi ma intensi, elettrizzanti e
                memorabili.
              </p>
            </MaskText>
          </div>
        </Hero>
        <div className="w-[90%] mx-auto mt-20 h-[0.05rem] bg-white/60 2xl:mt-24 2xla:mt-20"></div>

        <Marquee />

        {/* <div className="w-[90vw] mx-auto">
          <Line />
        </div> */}
        {/* <LavoriSec cards={translation.cards} /> */}
        <div className="w-11/12 mx-auto relative min-h-screen" ref={container}>
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
              />
            );
          })}
        </div>

        <div className="w-[90%] mx-auto mt-20 h-[0.05rem] bg-white/60 2xl:mt-24 2xla:mt-20"></div>
        <div className="w-[90%] mx-auto overflow-hidden my-10">
          <LinkMarquee />
        </div>
        <div className="w-[90%] mx-auto  h-[0.05rem] bg-white/60"></div>

        <div className="w-[90%] mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 text-white dark:text-third min-h-screen gap-8 md:gap-10 ">
          <Chat />
          <div className="flex flex-col gap-8 py-6 p-0 md:p-8">
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
