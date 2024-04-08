import React from "react";
import { motion } from "framer-motion";
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

const myFont = localFont({ src: "../fonts/ClearfaceStd-Bold.woff" });
const myFont2 = localFont({ src: "../fonts/Raleway-Regular.ttf" });

const Home = () => {
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
          <h1
            className={`${myFont.className} text-[60px] leading-[75px] md:text-[90px] md:leading-[100px] md:w-[100%]  text-white dark:text-third md:text-center lg:w-[70%] mx-auto  2xl:text-[100px] 2xl:leading-[120px] 2xla:text-[120px] 2xla:leading-[130px]`}
          >
            Sì. Siamo un’agenzia di incontri.
          </h1>
          <div className="lg:w-[65%] mx-auto">
            <p
              className={`${myFont2.className} font-normal text-[20px] md:text-[30px]  text-white dark:text-third md:text-center  2xl:text-[30px]`}
            >
              A volte creiamo legami duraturi. Altre volte, invece, nascono dei
              colpi di fulmine, brevi ma intensi, elettrizzanti e memorabili.
            </p>
          </div>
        </Hero>
        <div className="w-[90vw] mx-auto">
          <Line />
        </div>
        <div className="w-[90%] mx-auto flex justify-center items-center mt-10">
          <h2 className="text-[32px]">
            <span
              className={`${myFont.className} mr-2 text-white dark:text-third`}
            >
              Cofactory
            </span>
            <span className={`${myFont2.className} text-pink`}>lovers</span>{" "}
          </h2>
        </div>

        <Marquee />
        <div className="w-[90vw] mx-auto">
          <Line />
        </div>
        <LavoriSec />
        <div className="w-[90%] mx-auto">
          <Line />
        </div>
        <div className="w-[90%] mx-auto overflow-hidden">
          <LinkMarquee />
        </div>
        <div className="w-[90%] mx-auto mt-10">
          <Line />
        </div>
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
