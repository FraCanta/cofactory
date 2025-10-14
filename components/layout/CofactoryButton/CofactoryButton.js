import { Icon } from "@iconify/react";
import React from "react";
const myFont = localFont({ src: "../../../fonts/Tactico-Grunge.otf" });
const myFont2 = localFont({
  src: "../../../fonts/Raleway-Regular.ttf",
});

import localFont from "next/font/local";

function CofactoryButton({ isPlaying }) {
  return (
    <main className="main">
      <button className="roundButton bg-third/90 dark:bg-white/80 border border-white dark:border-third w-[90px] h-[90px] lg:w-[100px] lg:h-[100px] 2xla:w-[120px] 2xla:h-[120px] 3xl:w-[200px] 3xl:h-[200px]">
        <svg viewBox="0 0 200 200" className="svg ">
          <defs>
            <path
              id="circlePath"
              d="M 100, 100
                 m -75, 0
                 a 75,75 0 1,1 150,0
                 a 75,75 0 1,1 -150,0"
            />
            <path
              id="innerCirclePath"
              d="M 100, 100
                 m -55, 0
                 a 55,55 0 1,1 110,0
                 a 55,55 0 1,1 -110,0"
            />
          </defs>

          <text fontSize="38" fill="currentColor" textAnchor="middle">
            <textPath
              xlinkHref="#innerCirclePath"
              startOffset="26%"
              className={`${myFont.className} fill-white dark:fill-third font-regular`}
            >
              COFACTORY
            </textPath>
          </text>
          <text fontSize="30" fill="currentColor" textAnchor="middle">
            <textPath
              xlinkHref="#innerCirclePath"
              startOffset="52%"
              className={`${myFont2.className} fill-second`}
            >
              <tspan>&bull;</tspan>
            </textPath>
          </text>
          <text fontSize="34" fill="currentColor" textAnchor="middle">
            <textPath
              xlinkHref="#innerCirclePath"
              startOffset="76%"
              className={`${myFont2.className} fill-pink  font-regular`}
            >
              STORIES
            </textPath>
          </text>
          <text fontSize="30" fill="currentColor" textAnchor="middle">
            <textPath
              xlinkHref="#innerCirclePath"
              startOffset="1%"
              className={`${myFont2.className} fill-second `}
            >
              <tspan>&bull;</tspan>
            </textPath>
          </text>
        </svg>
        <div className="innerCircle w-[40px] h-[40px] 2xla:w-[50px] 2xla:h-[50px] flex items-center justify-center border border-white dark:border-third hover:bg-second dark:hover:bg-second">
          <Icon
            icon="akar-icons:arrow-right"
            width="22"
            height="22"
            className="text-white transition-all hover:scale-125 dark:text-third hover:text-white dark:hover:text-white"
          />
        </div>
      </button>
    </main>
  );
}

export default CofactoryButton;
