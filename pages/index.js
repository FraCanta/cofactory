import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import Hero from "@/components/layout/Hero";
import Head from "next/head";
import { MaskText } from "@/components/MaskText";
import translationIT from "@/public/locales/it/home.json";
import translationEN from "@/public/locales/en/home.json";
import TimbroMarquee from "@/components/TimbroMarquee/TimbroMarquee";
import BannerList from "@/components/BannerList/BannerList";
import HeroLogo from "@/components/layout/HeroLogo";
import ModalSection from "@/components/layout/ModalSection";
import { gsap } from "gsap/dist/gsap";
import { Icon } from "@iconify/react";

const Home = ({ translation }) => {
  const [openModal, setOpenModal] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const colors = ["#1b1b1c", "#80c0c0", "#bb5471"]; // colori diversi per le sezioni

  const [activeIndex, setActiveIndex] = useState(0);
  // Riferimenti per GSAP
  const modalRef = useRef();
  const sectionsRef = useRef([]);

  // Gestione apertura modale
  const handleToggleMarquee = () => {
    setActiveIndex(0); // reset index
    setScrollProgress(0); // reset progress
    sectionsRef.current = []; // reset refs
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    gsap.to(modalRef.current, {
      autoAlpha: 0,

      duration: 0.5,
      onComplete: () => setOpenModal(false),
    });
  };

  // Timeline GSAP
  useEffect(() => {
    if (!openModal) return;

    const interval = setInterval(() => {
      if (!sectionsRef.current.length) return;

      const nextIndex = (activeIndex + 1) % sectionsRef.current.length;
      sectionsRef.current[nextIndex]?.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
      setActiveIndex(nextIndex); // aggiorna lo stato
    }, 6000);

    return () => clearInterval(interval);
  }, [openModal, activeIndex]);
  return (
    <>
      <Head>
        <title>Cofactory - Home</title>
      </Head>
      <HeroLogo />
      <Hero>
        <div className="relative flex flex-col items-end w-full gap-4 md:items-start lg:items-end lg:flex-row lg:justify-between lg:gap-0">
          <MaskText>
            <h1
              className="leading-none text-6xl md:text-[7.5rem] xl:-mb-6 text-white dark:text-third fxl:text-[9rem] 3xl:text-[12rem] 3xl:max-w-3xl"
              dangerouslySetInnerHTML={{ __html: translation.hero.title }}
            ></h1>
          </MaskText>
          <div className="flex flex-col justify-end gap-4">
            {translation.hero.description.map((text, index) => (
              <MaskText key={index}>
                <p
                  dangerouslySetInnerHTML={{ __html: text.text }}
                  className="text-base font-medium text-white font-raleway xl:leading-none dark:text-third md:text-2xl lg:max-w-2xl xl:text-xl 2xl:text-2xl 2xl:max-w-4xl fxl:max-w-7xl 3xl:text-4xl 3xl:max-w-7xl"
                ></p>
              </MaskText>
            ))}
          </div>
        </div>

        <div className="absolute left-0 grid items-center w-full grid-cols-2 lg:grid-cols-3 bottom-10 md:bottom-24 lg:bottom-0 ">
          <div className="hidden lg:block"></div>
          <div className="flex lg:justify-center text-second"></div>
          <div>
            <TimbroMarquee onClick={handleToggleMarquee} />
          </div>
        </div>
      </Hero>
      {/* MODALE CON TIMELINE */}
      {openModal && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-[9999] backdrop-blur-xl text-white flex flex-col transition-colors duration-1000"
          style={{ backgroundColor: colors[activeIndex] }}
        >
          {/* Close button */}
          <button
            onClick={handleCloseModal}
            className="absolute z-10 text-3xl font-bold transition top-6 right-6 hover:scale-110"
          >
            <Icon
              icon="ant-design:close-square-filled"
              className="w-8 h-8 text-white lg:w-10 lg:h-10"
            />
          </button>

          {/* Dots verticali / responsive */}
          <div
            className={`absolute z-10 flex gap-4 flex-col left-6 top-1/2 transform -translate-y-1/2 xs:flex-row xs:bottom-16 xs:left-1/2 xs:top-auto xs:-translate-x-1/2 xs:translate-y-0`}
          >
            {translation.modal.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 transition rounded-full 
        ${activeIndex === index ? "bg-white" : "bg-white/50"} 
        hover:bg-white`}
                onClick={() => {
                  sectionsRef.current[index]?.scrollIntoView({
                    behavior: "smooth",
                    inline: "start",
                  });
                }}
              />
            ))}
          </div>

          {/* Scroll orizzontale con sfondi diversi */}
          <div
            className="relative flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth"
            onScroll={(e) => {
              const el = e.target;
              const sectionWidth = el.scrollWidth / translation.modal.length;
              const index = Math.round(el.scrollLeft / sectionWidth);
              setActiveIndex(index);
              setScrollProgress(
                el.scrollLeft / (el.scrollWidth - el.clientWidth)
              );
            }}
          >
            {translation.modal.map((item, index) => (
              <ModalSection
                key={index}
                ref={(el) => (sectionsRef.current[index] = el)}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>

          {/* Barra progress */}
          {/* <div className="absolute w-11/12 h-1 transform -translate-x-1/2 bottom-6 left-1/2 bg-white/50">
            <div
              className="h-full transition-all duration-200 bg-white"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div> */}
        </div>
      )}

      <BannerList translation={translation} id="works" />
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
