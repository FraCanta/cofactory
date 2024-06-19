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
      .add({
        targets: "#agencyText",
        opacity: [0, 1],
        easing: "easeInOutQuad",
      })
      .add({
        targets: "#creativeText",
        opacity: [0, 1],
        easing: "easeInOutQuad",
      })
      .add(
        {
          targets: "#newLogoIntro",
          opacity: [0, 1],
          easing: "easeInOutQuad",
        },
        "-=1000"
      )

      .add({
        targets: "#logo",
        opacity: [0, 1],
        easing: "easeInOutQuad",
      })

      .add({
        targets: "#newLogoIntro",
        rotate: "45deg",
        duration: 500,
        easing: "easeInOutQuad",
      })

      .add({
        targets: "#newLogoIntro",
        scale: 1500,
        opacity: 0.5,
        duration: 500,
        easing: "easeInOutQuad",
      })
      .add(
        {
          targets: ["#logo", "#creativeText", "#agencyText"],
          opacity: 0,
          easing: "easeInOutQuad",
        },
        "-=700"
      )
      .add(
        {
          targets: "#bgIntro",
          opacity: [1, 0],
          easing: "easeInOutQuad",
        },
        "-=1100"
      );
  }, [finishLoading]);

  return (
    <div
      className="flex h-screen items-center justify-center text-white fixed inset-0 bg-third"
      id="bgIntro"
    >
      <div>
        {/* Logo e payoff */}
        <div>
          {/* Logo */}
          <img
            id="logo"
            src="/assets/logo/logo.svg"
            alt="Logo"
            className="w-full md:w-[700px] lg:w-[600px] opacity-0"
          />

          {/* Payoff */}
          <div
            style={{ color: "#fff" }}
            className="flex items-center justify-center gap-2 lg:gap-3 "
          >
            <div
              id="agencyText"
              className={`${myFont2.className} opacity-0 leading-snug text-lg md:text-4xl  `}
            >
              Agenzia
            </div>
            <div
              id="creativeText"
              className={`${myFont2.className} opacity-0 leading-snug text-lg md:text-4xl  `}
            >
              creativa
            </div>
            <div
              id="agencyText"
              className={`${myFont2.className} opacity-0 leading-snug text-lg md:text-4xl  `}
            >
              di incontri
            </div>
            <div
              className="flex opacity-0 w-3 h-3 lg:w-5 lg:h-5 relative mt-2 "
              id="newLogoIntro"
            >
              <Image
                src="/assets/logo/new_logo_intro.svg"
                fill
                className="object-contain h-full w-full "
              />
            </div>
            <div
              id="creativeText"
              className={`${myFont2.className} opacity-0 leading-snug text-lg md:text-4xl  `}
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
