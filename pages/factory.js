import React, { useEffect, useLayoutEffect, useRef } from "react";
import localFont from "next/font/local";
import { animate, motion } from "framer-motion";

const myFont = localFont({ src: "../fonts/ClearfaceStd-Bold.woff" });
const myFont2 = localFont({ src: "../fonts/Raleway-Light.ttf" });
const myFont3 = localFont({ src: "../fonts/Raleway-Regular.ttf" });
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MaskText } from "@/components/MaskText";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Image from "next/image";
const Factory = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 2,
          pin: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex flex-col items-center justify-center w-full h-screen gap-6 mx-auto bg-second/20 dark:bg-second/30"
      >
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

      <section className="scroll-section-outer">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner">
            <div className="scroll-section">
              <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
                <div
                  className={`${myFont2.className}   dark:text-third text-white  text-lg `}
                >
                  <p>
                    Intuiamo una potenziale{" "}
                    <strong>affinità tra due brand</strong> e dopo aver valutato
                    l'effettiva compatibilità e il reale interesse verso un{" "}
                    <strong>obiettivo comune</strong>, concepiamo l'idea
                    creativa e sviluppiamo la campagna di comunicazione.
                  </p>
                  <p>
                    Crediamo nella <strong>parità di coppia</strong>: ci
                    assicuriamo che entrambi i partner si impegnino nel rispetto
                    dei propri diritti e dei propri doveri.
                  </p>
                </div>

                {/* <motion.div className="relative flex items-center justify-center order-2">
                  <Image
                    src="/assets/logo/new_logo_grey.png"
                    alt=""
                    width={200}
                    height={200}
                    className="object-contain rounded-lg dark:contrast-50 w-[100px] h-[100px]"
                  />
                </motion.div> */}
                <div className="flex flex-col items-center justify-center gap-6 text-2xl lg:text-center">
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
              </div>
            </div>
            <div className="scroll-section">
              <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
                <div className="flex flex-col items-center justify-center gap-6 text-2xl lg:text-center">
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
                {/* <motion.div className="relative flex items-center justify-center logo1">
                  <Image
                    src="/assets/logo/new_logo_grey.png"
                    alt=""
                    width={200}
                    height={200}
                    className="object-contain rounded-lg dark:contrast-50"
                  />
                </motion.div> */}
                <div
                  className={`${myFont2.className} flex flex-col dark:text-third text-white justify-center gap-6 text-xl `}
                >
                  <p>
                    I luoghi d'incontro possono essere i più disparati: c'è chi
                    ama i luoghi tradizionali come la <strong>TV</strong>, l'
                    <strong>OoH</strong>, la <strong>radio</strong>, i{" "}
                    <strong>giornali</strong> e il
                    <strong>digital</strong>; c'è chi vuole provare la novità
                    del <strong>Coboxing</strong>, scegliendo le scatole da
                    spedizione; infine c'è chi si affida a un classico evergreen
                    come il <strong>pack di prodotto</strong>. I brand ci
                    indicano dove vogliono incontrarsi, noi progettiamo come
                    farlo.
                  </p>
                </div>
              </div>
            </div>
            <div className="scroll-section">
              <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 ">
                <div
                  className={`${myFont2.className} flex flex-col dark:text-third text-white justify-center gap-6 text-xl`}
                >
                  <p>
                    C'è chi cerca un partner con i suoi stessi gusti e chi è
                    curioso di esplorare nuove realtà. In entrambi i casi, siamo
                    le storie a basso impatto ambientale: packaging riciclabili,
                    scatole da spedizione senza uso di collanti o nastri adesivi
                    e fustelle progettate per il riuso delle confezioni, sono
                    solo alcune delle soluzioni che ci piace proporre.
                  </p>
                </div>
                {/* <motion.div className="relative flex items-center justify-center logo2">
                  <Image
                    src="/assets/logo/new_logo_grey.png"
                    alt=""
                    width={200}
                    height={200}
                    className="object-contain rounded-lg dark:contrast-50"
                  />
                </motion.div> */}
                <div className="flex flex-col items-center justify-center gap-6 text-2xl lg:text-center">
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
            </div>
            <div className="scroll-section">
              <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 ">
                <div className="flex flex-col items-center justify-center gap-6 lg:text-center ">
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
                {/* <motion.div className="relative flex items-center justify-center logo3">
                  <Image
                    src="/assets/logo/new_logo_grey.png"
                    alt=""
                    width={200}
                    height={200}
                    className="object-contain rounded-lg dark:contrast-50"
                  />
                </motion.div> */}
                <div
                  className={`${myFont2.className} flex flex-col dark:text-third text-white justify-center gap-6 text-xl`}
                >
                  <h3>
                    Quando c'è feeling e scatta la scintilla, il nostro x
                    diventa tanti +:
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Factory;
