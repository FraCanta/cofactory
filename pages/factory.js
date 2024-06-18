import React from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion";

const myFont = localFont({ src: "../fonts/ClearfaceStd-Bold.woff" });
const myFont2 = localFont({ src: "../fonts/Raleway-Light.ttf" });
const myFont3 = localFont({ src: "../fonts/Raleway-Regular.ttf" });

import { MaskText } from "@/components/MaskText";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Image from "next/image";
const Factory = () => {
  return (
    <>
      <div className="h-screen flex items-center flex-col justify-center w-full mx-auto   gap-6 bg-second/20 dark:bg-second/30">
        <MaskText>
          <h1
            className={`${myFont.className} text-5xl py-1 md:text-[6rem] text-white dark:text-third lg:text-center 2xl:text-8xl w-[90%] mx-auto z-0`}
          >
            Siamo la prima{" "}
            <span className="relative mr-4">
              <span>agenzia</span>
              <Tippy
                className="!bg-pink "
                content={
                  <span className="w-full text-base !leading-4 font-light">
                    *Potrebbero esserci altre agenzie come la nostra, ma da
                    accurate ricerche sul web non ci risulta.
                  </span>
                }
              >
                <button className="text-pink text-md lg:text-6xl !font-light absolute top-1 lg:top-4   animate-bounce ">
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
              className={`${myFont2.className}  text-[20px] md:text-[25px]  text-white dark:text-third lg:text-center `}
            >
              Ideiamo e realizziamo campagne di comunicazione congiunta.
            </p>
          </MaskText>
        </div>

        <div className="flex justify-center items-center w-[90%] mx-auto py-2 absolute bottom-6">
          <div className="w-8 h-8 rounded-full bg-pink"></div>
        </div>
      </div>
      <div className="w-full bg-[#161617] dark:bg-[#D9D9D9] text-white h-auto py-10 flex flex-col gap-y-40">
        <div className="grid grid-cols-1 lg:grid-cols-5 w-[90%] mx-auto gap-y-24 lg:gap-6 min-h-[60vh]">
          <div
            className={`${myFont2.className} flex flex-col dark:text-third text-white justify-center gap-6 text-xl col-span-2`}
          >
            <p>
              Intuiamo una potenziale <strong>affinità tra due brand</strong> e
              dopo aver valutato l'effettiva compatibilità e il reale interesse
              verso un <strong>obiettivo comune</strong>, concepiamo l'idea
              creativa e sviluppiamo la campagna di comunicazione.
            </p>
            <p>
              Crediamo nella <strong>parità di coppia</strong>: ci assicuriamo
              che entrambi i partner si impegnino nel rispetto dei propri
              diritti e dei propri doveri.
            </p>
          </div>
          <div className="flex  justify-center items-center relative ">
            <Image
              src="/assets/logo/new_logo_grey.png"
              alt=""
              width={200}
              height={200}
              className=" object-contain rounded-lg  -rotate-[152deg] dark:contrast-50"
            />
            <div className="w-8 h-8 rounded-full bg-pink absolute top-0 lg:top-40 lg:left-30"></div>
          </div>
          <div className="flex flex-col items-center justify-center lg:text-center gap-6 text-2xl col-span-2">
            <h2 className="text-5xl lg:text-6xl dark:text-third text-white">
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
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 w-[90%] mx-auto gap-y-24 lg:gap-6 min-h-[60vh]">
          <div className="flex flex-col items-center justify-center lg:text-center gap-6 text-2xl col-span-2">
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
          <div className="flex  justify-center items-center relative ">
            <Image
              src="/assets/logo/new_logo_grey.png"
              alt=""
              width={200}
              height={200}
              className=" object-contain rounded-lg dark:contrast-50 rotate-[170deg]"
            />
            <div className="w-8 h-8 rounded-full bg-pink absolute top-0 lg:top-40 lg:left-40"></div>
          </div>
          <div
            className={`${myFont2.className} flex flex-col dark:text-third text-white justify-center gap-6 text-xl col-span-2`}
          >
            <p>
              I luoghi d'incontro possono essere i più disparati: c'è chi ama i
              luoghi tradizionali come la <strong>TV</strong>, l'
              <strong>OoH</strong>, la <strong>radio</strong>, i{" "}
              <strong>giornali</strong> e il
              <strong>digital</strong>; c'è chi vuole provare la novità del{" "}
              <strong>Coboxing</strong>, scegliendo le scatole da spedizione;
              infine c'è chi si affida a un classico evergreen come il{" "}
              <strong>pack di prodotto</strong>. I brand ci indicano dove
              vogliono incontrarsi, noi progettiamo come farlo.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 w-[90%] mx-auto gap-y-24 lg:gap-6 min-h-[60vh]">
          <div
            className={`${myFont2.className} flex flex-col dark:text-third text-white justify-center gap-6 text-xl col-span-2`}
          >
            <p>
              C'è chi cerca un partner con i suoi stessi gusti e chi è curioso
              di esplorare nuove realtà. In entrambi i casi, siamo le storie a
              basso impatto ambientale: packaging riciclabili, scatole da
              spedizione senza uso di collanti o nastri adesivi e fustelle
              progettate per il riuso delle confezioni, sono solo alcune delle
              soluzioni che ci piace proporre.
            </p>
          </div>
          <div className="flex  justify-center items-center relative ">
            <Image
              src="/assets/logo/new_logo_grey.png"
              alt=""
              width={200}
              height={200}
              className=" object-contain rounded-lg dark:contrast-50 rotate-[95deg]"
            />
            <div className="w-8 h-8 rounded-full bg-pink absolute top-0 lg:top-40 lg:left-20"></div>
          </div>{" "}
          <div className="flex flex-col items-center justify-center lg:text-center gap-6 text-2xl col-span-2">
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
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 w-[90%] mx-auto gap-y-24 lg:gap-6 min-h-[60vh]">
          <div className="flex flex-col items-center justify-center lg:text-center gap-6  col-span-2">
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
          <div className="flex  justify-center items-center relative ">
            <Image
              src="/assets/logo/new_logo_grey.png"
              alt=""
              width={200}
              height={200}
              className=" object-contain rounded-lg dark:contrast-50 -rotate-[85deg]"
            />
            <div className="w-8 h-8 rounded-full bg-pink absolute top-0 lg:top-40 lg:left-20"></div>
          </div>{" "}
          <div
            className={`${myFont2.className} flex flex-col dark:text-third text-white justify-center gap-6 text-xl col-span-2`}
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
                    className="w-full h-full"
                  />
                </span>{" "}
                PERCEZIONE POSITIVA DEI BRAND
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Factory;
