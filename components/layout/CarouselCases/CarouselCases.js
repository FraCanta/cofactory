import { MaskText } from "@/components/MaskText";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import localFont from "next/font/local";

const myFont2 = localFont({ src: "../../../fonts/Raleway-Regular.ttf" });

function CarouselCases({ translation }) {
  const [activeIndex, setActiveIndex] = useState({});

  const brand1Refs = useRef({});
  const brand2Refs = useRef({});

  // Funzioni per cambiare slide manualmente
  const handlePrev = (brand) => {
    setActiveIndex((prev) => ({
      ...prev,
      [brand]:
        prev[brand] > 0
          ? prev[brand] - 1
          : translation.cards.find((c) => c.brand === brand).cases.length - 1,
    }));
  };

  const handleNext = (brand) => {
    setActiveIndex((prev) => ({
      ...prev,
      [brand]:
        (prev[brand] + 1) %
        translation.cards.find((c) => c.brand === brand).cases.length,
    }));
  };

  // Autoplay: cambia slide automaticamente ogni 4 secondi
  useEffect(() => {
    const intervals = {};

    translation.cards.forEach((cardGroup) => {
      intervals[cardGroup.brand] = setInterval(() => {
        setActiveIndex((prev) => ({
          ...prev,
          [cardGroup.brand]:
            (prev[cardGroup.brand] + 1) % cardGroup.cases.length || 0,
        }));
      }, 6000); // 4 secondi
    });

    return () => {
      Object.values(intervals).forEach(clearInterval);
    };
  }, [translation.cards]);

  // Animazioni GSAP su cambio slide
  useEffect(() => {
    Object.keys(activeIndex).forEach((brand) => {
      const el1 = brand1Refs.current[brand];
      const el2 = brand2Refs.current[brand];
      if (el1 && el2) {
        const tl = gsap.timeline();
        tl.fromTo(
          el1,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
        ).fromTo(
          el2,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "<0.2"
        );
      }
    });
  }, [activeIndex]);

  return (
    <>
      {translation.cards.map((cardGroup, groupIndex) => {
        const active = activeIndex[cardGroup.brand] || 0;
        const activeCard = cardGroup.cases[active];

        return (
          <div className="relative h-[50vh] lg:h-screen" key={groupIndex}>
            <Image
              fill
              src={activeCard.img ? activeCard.img : "/assets/placeholder.png"}
              alt="cover stories"
              className="object-cover object-top w-full h-full"
            />
            <div className="absolute z-20 flex items-end w-full h-full bottom-4 left-4 lg:left-10 lg:bottom-10">
              <h2 className="flex items-center space-x-2 uppercase">
                <MaskText key={`${cardGroup.brand}-${active}-brand1`}>
                  <span
                    ref={(el) => (brand1Refs.current[cardGroup.brand] = el)}
                    className={`${myFont2.className} leading-none text-sm lg:text-3xl text-white fxl:text-5xl 3xl:text-6xl`}
                  >
                    {activeCard.brand1}
                  </span>
                </MaskText>

                <span className="relative w-2 h-4 mx-2 lg:h-8 lg:w-8 2xl:w-[2.5rem] 2xl:h-20 3xl:w-32 3xl:h-32 fxl:w-24 fxl:h-24">
                  <Image
                    src="/assets/cofactory_nuovaX_green.svg"
                    fill
                    className="object-cover"
                    alt="logo"
                  />
                </span>

                <MaskText key={`${cardGroup.brand}-${active}-brand2`}>
                  <span
                    ref={(el) => (brand2Refs.current[cardGroup.brand] = el)}
                    className={`${myFont2.className} leading-none text-sm lg:text-3xl text-white fxl:text-5xl 3xl:text-6xl`}
                  >
                    {activeCard.brand2}
                  </span>
                </MaskText>
              </h2>
            </div>
            <div className="absolute inset-0 w-full h-full bg-third/30"></div>
            <div className="absolute top-0 z-30 flex items-center justify-between w-full h-full px-4 lg:px-10">
              <button
                onClick={() => handlePrev(cardGroup.brand)}
                className="text-3xl text-white"
              >
                ←
              </button>
              <button
                onClick={() => handleNext(cardGroup.brand)}
                className="text-3xl text-white"
              >
                →
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CarouselCases;
