import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import localFont from "next/font/local";
import Image from "next/image";
import useLayoutEffect from "../../utils/use-isomorphic-layout-effect";

gsap.registerPlugin(ScrollTrigger);

const myFont = localFont({ src: "../../fonts/ClearfaceStd-Bold.woff" });
const myFont2 = localFont({ src: "../../fonts/Raleway-Light.ttf" });
const myFont3 = localFont({ src: "../../fonts/Raleway-Regular.ttf" });

const ScrollEffect = () => {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    gsap.set(".slide-1", { opacity: 1 });
    mm.add("(min-width: 360px)", () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#cont",
          start: "top top",
          scrub: 1,
          pin: true,
          end: "bottom+=3000px",
        },
      });
      tl.to(".slide-1", { opacity: 0 });
      tl.to(".slide-2", { opacity: 1, y: 20 });
      tl.to(".slide-2", { opacity: 0 });
      tl.to(".slide-3", { opacity: 1, y: 20 });
      tl.to(".slide-3", { opacity: 0 });
      tl.to(".slide-4", { opacity: 1, y: 20 });
    });
    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div id="cont">
      <div className="slide slide-1">
        <div>
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
          className={`${myFont2.className} dark:text-third text-white text-lg lg:w-[60%] mx-auto flex flex-col`}
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
      <div className="slide slide-2">
        <div>
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
      <div className="slide slide-3">
        <div>
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
      <div className="slide slide-4">
        <div>
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
      </div>
    </div>
  );
};

export default ScrollEffect;
