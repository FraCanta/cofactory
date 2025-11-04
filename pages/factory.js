import React, { useEffect, useRef } from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Image from "next/image";
import { MaskText } from "@/components/MaskText";
import translationIT from "@/public/locales/it/factory.json";
import translationEN from "@/public/locales/en/factory.json";

import RevealOnScroll from "@/components/RevealOnScroll/RevealOnScroll";
import SmoothParallaxImage from "@/components/SmoothParallaxImage/SmoothParallaxImage";
import ParallaxText from "@/components/ParallaxText";
import Link from "next/link";
import Head from "next/head";
import ScrollEffect from "@/components/ScrollEffect.js/ScrollEffect";

const myFont = localFont({ src: "../fonts/ClearfaceStd-Bold.woff" });
const myFont2 = localFont({ src: "../fonts/Raleway-Light.ttf" });
const myFont3 = localFont({ src: "../fonts/Raleway-Regular.ttf" });

const Factory = ({ translation }) => {
  return (
    <>
      <Head>
        <title>Factory</title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex flex-col items-center justify-center w-full h-[100dvh] gap-6 mx-auto dark:text-third"
      >
        <MaskText>
          <h1
            className={`${myFont.className} text-5xl py-1 md:text-[6rem] text-white dark:text-third lg:text-center 2xl:text-8xl w-[90%] mx-auto z-0`}
          >
            Siamo la prima{" "}
            <span className="relative mr-4">
              <span>agenzia</span>
              <Tippy
                className="!bg-pink"
                content={
                  <span className="w-full text-base !leading-4 font-light">
                    *Potrebbero esserci altre agenzie come la nostra, ma da
                    accurate ricerche sul web non ci risulta.
                  </span>
                }
              >
                <button className="text-pink text-md lg:text-6xl !font-light absolute top-1 lg:top-4 animate-bounce ">
                  <span className="a">*</span>
                </button>
              </Tippy>{" "}
            </span>
            di{" "}
            <span className="text-white/60 dark:text-third/60">
              matchmaking
            </span>{" "}
            per brand.
          </h1>
        </MaskText>
        <div className="w-[90%] lg:w-[65%] mx-auto">
          <MaskText>
            <p
              className={`${myFont2.className} text-[20px] md:text-[25px] text-white dark:text-third lg:text-center `}
            >
              Ideiamo e realizziamo campagne di comunicazione congiunta.
            </p>
          </MaskText>
        </div>
      </motion.div>

      <RevealOnScroll />

      {/* <div className="w-[90%] mx-auto flex flex-col gap-20 p-4 mt-[200px]  items-center justify-center h-full min-h-[80vh] text-center">
        <div
          className="flex flex-col items-center justify-center gap-6 text-2xl lg:text-center  lg:w-[60%] mx-auto"
          data-aos="fade-up"
        >
          <h2 className="text-5xl text-white lg:text-6xl dark:text-third">
            <span
              className={`${myFont.className} text-white/60 dark:text-third/60`}
            >
              Tranquillo,
            </span>{" "}
            <span className={`${myFont3.className} font-bold`}>
              la prima mossa la facciamo noi.
            </span>
          </h2>
        </div>
        <div
          className={`${myFont2.className} dark:text-third text-white text-lg lg:w-[60%] mx-auto`}
          data-aos="fade-up"
        >
          <p>
            Intuiamo una potenziale <strong>affinità tra due brand</strong> e
            dopo aver valutato l'effettiva compatibilità e il reale interesse
            verso un <strong>obiettivo comune</strong>, concepiamo l'idea
            creativa e sviluppiamo la campagna di comunicazione.
          </p>
          <p>
            Crediamo nella <strong>parità di coppia</strong>: ci assicuriamo che
            entrambi i partner si impegnino nel rispetto dei propri diritti e
            dei propri doveri.
          </p>
        </div>
      </div>

      <div className="w-[90%] mx-auto flex flex-col gap-20 p-4 mt-20  items-center justify-center h-full min-h-[80vh] text-center">
        <div
          className="flex flex-col items-center justify-center gap-6 text-2xl lg:text-center  lg:w-[60%] mx-auto"
          data-aos="fade-up"
        >
          <h2 className="text-5xl lg:text-6xl">
            <span
              className={`${myFont.className} text-white/60 dark:text-third/60`}
            >
              Organizziamo
            </span>{" "}
            <span
              className={`${myFont3.className} font-bold text-white dark:text-third`}
            >
              l'incontro
            </span>
          </h2>
        </div>
        <div
          className={`${myFont2.className} dark:text-third text-white text-lg lg:w-[60%] mx-auto`}
          data-aos="fade-up"
        >
          <p>
            I luoghi d'incontro possono essere i più disparati: c'è chi ama i
            luoghi tradizionali come la <strong>TV</strong>, l'
            <strong>OoH</strong>, la <strong>radio</strong>, i{" "}
            <strong>giornali</strong> e il
            <strong>digital</strong>; c'è chi vuole provare la novità del{" "}
            <strong>Coboxing</strong>, scegliendo le scatole da spedizione;
            infine c'è chi si affida a un classico evergreen come il{" "}
            <strong>pack di prodotto</strong>. I brand ci indicano dove vogliono
            incontrarsi, noi progettiamo come farlo.
          </p>
        </div>
      </div>

      <div className="w-[90%] mx-auto flex flex-col gap-20 p-4  items-center justify-center h-full min-h-[80vh] text-center">
        <div
          className="flex flex-col items-center justify-center gap-6 text-2xl lg:text-center  lg:w-[60%] mx-auto"
          data-aos="fade-up"
        >
          <h2 className="text-5xl lg:text-6xl">
            <span
              className={`${myFont3.className} font-bold text-white dark:text-third`}
            >
              Le nostre sono
            </span>{" "}
            <span
              className={`${myFont.className} text-white/60 dark:text-third/60`}
            >
              unioni responsabili.
            </span>
          </h2>
        </div>
        <div
          className={`${myFont2.className} dark:text-third text-white text-lg lg:w-[60%] mx-auto`}
          data-aos="fade-up"
        >
          <p>
            C'è chi cerca un partner con i suoi stessi gusti e chi è curioso di
            esplorare nuove realtà. In entrambi i casi, siamo le storie a basso
            impatto ambientale: packaging riciclabili, scatole da spedizione
            senza uso di collanti o nastri adesivi e fustelle progettate per il
            riuso delle confezioni, sono solo alcune delle soluzioni che ci
            piace proporre.
          </p>
        </div>
      </div>
      <div className="w-[90%] mx-auto flex flex-col gap-20 p-4  items-center justify-center h-full min-h-[80vh] text-center">
        <div
          className="flex flex-col items-center justify-center gap-6 text-2xl lg:text-center  lg:w-[60%] mx-auto"
          data-aos="fade-up"
        >
          <h2 className="text-5xl lg:text-6xl">
            <span
              className={`${myFont3.className} font-bold text-white dark:text-third`}
            >
              Un
            </span>{" "}
            <span
              className={`${myFont.className} text-white/60 dark:text-third/60`}
            >
              per
            </span>{" "}
            <span
              className={`${myFont3.className} font-bold text-white dark:text-third`}
            >
              che diventa tanti
            </span>{" "}
            <span
              className={`${myFont.className} text-white/60 dark:text-third/60`}
            >
              più.
            </span>
          </h2>
        </div>
        <div
          className={`${myFont2.className} dark:text-third text-white text-lg `}
          data-aos="fade-up"
        >
          <div
            className={`${myFont2.className} flex flex-col dark:text-third text-white justify-center gap-6 text-xl`}
          >
            <h3>
              Quando c'è feeling e scatta la scintilla, il nostro x diventa
              tanti +:
            </h3>
            <ul className="font-bold">
              <li className="flex items-center gap-2">
                <span className="relative w-4 h-4">
                  <Image
                    src="/assets/logo/per1.svg"
                    fill
                    alt="freccia a sx"
                    className="w-full h-full"
                  />
                </span>{" "}
                AUMENTO DELL'AWARENESS
              </li>
              <li className="flex items-center gap-2">
                <span className="relative w-4 h-4">
                  <Image
                    src="/assets/logo/per1.svg"
                    fill
                    alt="freccia a sx"
                    className="w-full h-full"
                  />
                </span>{" "}
                RIDUZIONE DEI COSTI DELLA CAMPAGNA
              </li>
              <li className="flex items-center gap-2">
                <span className="relative w-4 h-4">
                  <Image
                    src="/assets/logo/per1.svg"
                    fill
                    alt="freccia a sx"
                    className="w-full h-full"
                  />
                </span>{" "}
                AMPLIAMENTO DEL TARGET
              </li>
              <li className="flex items-center gap-2">
                <span className="relative w-4 h-4">
                  <Image
                    src="/assets/logo/per1.svg"
                    fill
                    alt="freccia a sx"
                    className="w-full h-full"
                  />
                </span>{" "}
                PERCEZIONE POSITIVA DEI BRAND
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <ScrollEffect />

      <SmoothParallaxImage translation={translation} />
      <div className="w-full ">
        <ParallaxText marqueeText={translation.marqueeLink} />
      </div>
      <div className="spacer"></div>
    </>
  );
};

export default Factory;

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
      translation: obj,
    },
    revalidate: 60,
  };
}
