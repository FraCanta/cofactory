import Line from "@/components/Line";
import Hero from "@/components/layout/Hero";
import React from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion";

const myFont = localFont({ src: "../fonts/ClearfaceStd-Bold.woff" });
const myFont2 = localFont({ src: "../fonts/Raleway-Light.ttf" });
import { MaskText } from "@/components/MaskText";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Image from "next/image";

const Factory = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <Hero>
        <MaskText>
          <h1
            className={`${myFont.className} text-5xl py-1 md:text-[6rem] text-white dark:text-third lg:text-center 2xl:text-8xl`}
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
        <div className="w-full lg:w-[65%] mx-auto">
          <MaskText>
            <p
              className={`${myFont2.className}  text-[20px] md:text-[25px]  text-white dark:text-third lg:text-center `}
            >
              Ideiamo e realizziamo campagne di comunicazione congiunta.
            </p>
          </MaskText>
        </div>
      </Hero>
      <div className="flex justify-center items-center w-[90%] mx-auto py-2">
        <div className="w-8 h-8 rounded-full bg-pink"></div>
      </div>
      <div className="w-full bg-[#161617] dark:bg-[#D9D9D9] text-white h-auto py-10 flex flex-col gap-y-40">
        <div className="w-[90%] mx-auto">
          <Line />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 w-[90%] mx-auto gap-y-24 lg:gap-6 min-h-[60vh]">
          <div className="flex flex-col justify-center gap-6 text-2xl col-span-2">
            <p>
              Intuiamo una potenziale affinità tra due brand e dopo aver
              valutato l'effettiva compatibilità e il reale interesse verso un
              obiettivo comune, concepiamo l'idea creativa e sviluppiamo la
              campagna di comunicazione.
            </p>
            <p>
              Crediamo nella parità di coppia: ci assicuriamo che entrambi i
              partner si impegnino nel rispetto dei propri diritti e dei propri
              doveri.
            </p>
          </div>
          <div className="flex  justify-center items-center relative ">
            <Image
              src="/assets/logo/new_logo_grey.png"
              alt=""
              width={200}
              height={200}
              className=" object-contain rounded-lg !text-white -rotate-[152deg]"
            />
            <div className="w-8 h-8 rounded-full bg-pink absolute top-0 lg:top-40 lg:left-30"></div>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-6 text-2xl col-span-2">
            <h2 className="text-6xl">
              Tranquillo, la prima mossa la facciamo noi.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 w-[90%] mx-auto gap-y-24 lg:gap-6 min-h-[60vh]">
          <div className="flex flex-col items-center justify-center text-center gap-6 text-2xl col-span-2">
            <h2 className="text-6xl">
              Tranquillo, la prima mossa la facciamo noi.
            </h2>
          </div>
          <div className="flex  justify-center items-center relative ">
            <Image
              src="/assets/logo/new_logo_grey.png"
              alt=""
              width={200}
              height={200}
              className=" object-contain rounded-lg !text-white rotate-[170deg]"
            />
            <div className="w-8 h-8 rounded-full bg-pink absolute top-0 lg:top-40 lg:left-40"></div>
          </div>
          <div className="flex flex-col gap-6 text-2xl col-span-2 justify-center min-h-[50vh]">
            <p>
              Intuiamo una potenziale affinità tra due brand e dopo aver
              valutato l'effettiva compatibilità e il reale interesse verso un
              obiettivo comune, concepiamo l'idea creativa e sviluppiamo la
              campagna di comunicazione.
            </p>
            <p>
              Crediamo nella parità di coppia: ci assicuriamo che entrambi i
              partner si impegnino nel rispetto dei propri diritti e dei propri
              doveri.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 w-[90%] mx-auto gap-y-24 lg:gap-6 min-h-[60vh]">
          <div className="flex flex-col gap-6 text-2xl col-span-2 justify-center">
            <p>
              Intuiamo una potenziale affinità tra due brand e dopo aver
              valutato l'effettiva compatibilità e il reale interesse verso un
              obiettivo comune, concepiamo l'idea creativa e sviluppiamo la
              campagna di comunicazione.
            </p>
            <p>
              Crediamo nella parità di coppia: ci assicuriamo che entrambi i
              partner si impegnino nel rispetto dei propri diritti e dei propri
              doveri.
            </p>
          </div>
          <div className="flex  justify-center items-center relative ">
            <Image
              src="/assets/logo/new_logo_grey.png"
              alt=""
              width={200}
              height={200}
              className=" object-contain rounded-lg !text-white rotate-[95deg]"
            />
            <div className="w-8 h-8 rounded-full bg-pink absolute top-0 lg:top-40 lg:left-20"></div>
          </div>{" "}
          <div className="flex flex-col items-center justify-center text-center gap-6 text-2xl col-span-2">
            <h2 className="text-6xl">
              Tranquillo, la prima mossa la facciamo noi.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 w-[90%] mx-auto gap-y-24 lg:gap-6 min-h-[60vh]">
          <div className="flex flex-col gap-6 text-2xl col-span-2 justify-center">
            <p>
              Intuiamo una potenziale affinità tra due brand e dopo aver
              valutato l'effettiva compatibilità e il reale interesse verso un
              obiettivo comune, concepiamo l'idea creativa e sviluppiamo la
              campagna di comunicazione.
            </p>
            <p>
              Crediamo nella parità di coppia: ci assicuriamo che entrambi i
              partner si impegnino nel rispetto dei propri diritti e dei propri
              doveri.
            </p>
          </div>
          <div className="flex  justify-center items-center relative ">
            <Image
              src="/assets/logo/new_logo_grey.png"
              alt=""
              width={200}
              height={200}
              className=" object-contain rounded-lg !text-white -rotate-[85deg]"
            />
            <div className="w-8 h-8 rounded-full bg-pink absolute top-0 lg:top-40 lg:left-20"></div>
          </div>{" "}
          <div className="flex flex-col items-center justify-center text-center gap-6 text-2xl col-span-2">
            <h2 className="text-6xl">
              Tranquillo, la prima mossa la facciamo noi.
            </h2>
          </div>
        </div>
      </div>
      {/* <div className="w-[90%] mt-8 mx-auto flex flex-col gap-6 py-14">
        <h2
          className={`${myFont.className} text-white dark:text-third uppercase text-[25px]`}
        >
          Parlano di noi
        </h2>
        <div className="w-full h-full justify-start items-start gap-[67px] flex overflow-x-hidden">
          <div className="w-[425px] h-[565px] bg-[#D9D9D9]" />
          <div className="w-[425px] h-[565px] bg-[#D9D9D9]" />
          <div className="w-[425px] h-[565px] bg-[#D9D9D9]" />
          <div className="w-[425px] h-[565px] bg-[#D9D9D9]" />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Factory;
