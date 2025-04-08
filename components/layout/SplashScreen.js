import React, { useEffect } from "react";
import anime from "animejs";
import Image from "next/image";
import localFont from "next/font/local";

const myFont2 = localFont({ src: "../../fonts/Raleway-Light.ttf" });

const SplashScreen = ({ finishLoading }) => {
  useEffect(() => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      // Fai apparire logo e payoff insieme
      .add({
        targets: ["#logo", "#agencyText", "#creativeText"],
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 1000,
      })
      .add(
        {
          targets: "#newLogoIntro",
          opacity: [0, 1],
          easing: "easeInOutQuad",
        },
        "-=800"
      )
      // Fade out del logo e payoff prima della "X"
      .add(
        {
          targets: ["#logo", "#agencyText", "#creativeText"],
          opacity: 0,
          easing: "easeInOutQuad",
          duration: 1000,
        },
        "+=500"
      )
      .add(
        {
          targets: "#newLogoIntro",
          easing: "easeInOutExpo",
          duration: 700,
          begin: function () {
            const logoIntro = document.querySelector("#newLogoIntro");
            logoIntro.style.position = "absolute";
            logoIntro.style.left = "50%";
            logoIntro.style.top = "50%";
          },
        },
        "+=100"
      )
      // Resto dell'animazione della X
      .add({
        targets: "#newLogoIntro",
        opacity: 1,
        scale: [1, 8],
        duration: 700,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#newLogoIntro",
        rotate: "45deg",
        duration: 1500,
        easing: "easeInOutExpo",
      })
      // Sfuma lo sfondo quando la X è al massimo
      .add(
        {
          targets: "#bgIntro",
          opacity: [1, 0],
          duration: 1200,
          easing: "easeInOutQuad",
        },
        "-=1100"
      )
      .add({
        targets: "#newLogoIntro",
        scale: 1500,
        opacity: 0, // Ora la X svanisce completamente
        duration: 500,
        easing: "easeInOutQuad",
      });
  }, [finishLoading]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center h-screen text-white bg-third"
      id="bgIntro"
    >
      <div>
        {/* Logo and payoff */}
        <div>
          {/* Logo */}
          <img
            id="logo"
            src="/assets/logo/logo.svg"
            alt="Logo"
            className="w-full md:w-[700px] lg:w-[600px] opacity-0 h-auto"
          />

          {/* Payoff */}
          <div
            style={{ color: "#fff" }}
            className="flex items-center justify-center gap-2 lg:gap-3 "
          >
            <div
              id="agencyText"
              className={`${myFont2.className} opacity-0 leading-snug text-lg md:text-4xl`}
            >
              Agenzia
            </div>
            <div
              id="creativeText"
              className={`${myFont2.className} opacity-0 leading-snug text-lg md:text-4xl`}
            >
              creativa
            </div>
            <div
              id="agencyText"
              className={`${myFont2.className} opacity-0 leading-snug text-lg md:text-4xl`}
            >
              di incontri
            </div>
            <div
              className="relative flex items-center w-5 opacity-0 aspect-square lg:w-8 lg:mt-2"
              id="newLogoIntro"
            >
              <Image
                src="/assets/cofactory_nuovaX_green2.svg"
                fill
                alt="logo icon"
                className="object-contain w-full h-full"
              />
            </div>
            <div
              id="creativeText"
              className={`${myFont2.className} opacity-0 leading-snug text-lg md:text-4xl`}
            >
              brand
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
