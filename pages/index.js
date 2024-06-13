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
import Image from "next/image";
import Card from "@/components/Card/Card";
import LinkMarquee2 from "@/components/LinkMarquee2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Marquee from "@/components/Marquee/Marquee";
import TimbroMarquee from "@/components/TimbroMarquee/TimbroMarquee";

gsap.registerPlugin(ScrollTrigger);
const myFont = localFont({ src: "../fonts/ClearfaceStd-Bold.woff" });
const myFont2 = localFont({ src: "../fonts/Raleway-Light.ttf" });

const Home = ({ translation }) => {
  const paragraphRefs = useRef([]);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    paragraphRefs.current.forEach((paragraph, index) => {
      gsap.fromTo(
        paragraph,
        { opacity: 0, y: 150 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: paragraph,
            start: "top 100%",
            toggleActions: "play none none none",
          },
          delay: index * 0.6, // delay between paragraphs
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !paragraphRefs.current.includes(el)) {
      paragraphRefs.current.push(el);
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
          <MaskText>
            <h1
              className={`${myFont.className} text-5xl py-1 md:text-[6rem] text-white dark:text-third lg:text-center 2xla:text-9xl max-w-6xl`}
            >
              Sì. Siamo un’
              <span className="text-white/60 dark:text-third/60">
                agenzia
              </span>{" "}
              di incontri.
            </h1>
          </MaskText>
          <div className="lg:w-[65%] mx-auto flex flex-col gap-8 ">
            <MaskText>
              <p
                ref={addToRefs}
                className={`${myFont2.className} font-[300] text-[20px] md:text-[30px] text-white dark:text-third md:text-center 2xl:text-xl 2xla:text-[25px]`}
              >
                Questa è la prima riga di testo che appare in seguito.
              </p>
              <p
                ref={addToRefs}
                className={`${myFont2.className} font-[300] text-[20px] md:text-[30px] text-white dark:text-third md:text-center 2xl:text-xl 2xla:text-[25px]`}
              >
                Questa è la seconda riga di testo che appare in seguito.
              </p>
              <p
                ref={addToRefs}
                className={`${myFont2.className} font-[300] text-[20px] md:text-[30px] text-white dark:text-third md:text-center 2xl:text-xl 2xla:text-[25px]`}
              >
                Questa è la terza riga di testo che appare in seguito.
              </p>
            </MaskText>
          </div>
        </Hero>
        <div className="w-11/12 mx-auto flex justify-end absolute -bottom-10 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <TimbroMarquee />
        </div>

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

        <div className="w-[90%] mx-auto mt-24 h-[0.05rem] bg-white/60 dark:bg-third/60 2xl:mt-32 "></div>
        <div className="w-[90%] mx-auto ">
          <LinkMarquee2 />
        </div>
        <div className="w-[90%] mx-auto  h-[0.05rem] bg-white/60 dark:bg-third/60"></div>

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
