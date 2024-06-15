import { Icon } from "@iconify/react";
import React from "react";
const myFont = localFont({ src: "../../../fonts/Tactico-Grunge.otf" });
const myFont2 = localFont({ src: "../../../fonts/ClearfaceStd-Bold.woff" });

import localFont from "next/font/local";

function CofactoryButton({ isPlaying }) {
  return (
    <main className="main">
      <button className="roundButton bg-third/70 dark:bg-white/70 border border-white dark:border-third w-[100px] h-[100px] lg:w-[130px] lg:h-[130px]">
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
          {/* <text fontSize="30" fill="current">
            <textPath
              xlinkHref="#innerCirclePath"
              textAnchor="middle"
              startOffset="52%"
              className="fill-white dark:fill-third font-bold"
            >
              COFACTORY - LOVERS -
            </textPath>
          </text> */}
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
              LOVERS
            </textPath>
          </text>
          <text fontSize="30" fill="currentColor" textAnchor="middle">
            <textPath
              xlinkHref="#innerCirclePath"
              startOffset="1,2%"
              className={`${myFont2.className} fill-second `}
            >
              <tspan>&bull;</tspan>
            </textPath>
          </text>
        </svg>
        <div className="innerCircle w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] flex items-center justify-center border border-white dark:border-third hover:bg-second dark:hover:bg-second">
          <Icon
            icon={isPlaying ? "mingcute:stop-fill" : "mingcute:play-fill"}
            width="22"
            height="22"
            className="text-white hover:scale-125 transition-all dark:text-third
          hover:text-white dark:hover:text-white"
          />
        </div>
      </button>
    </main>
  );
}

export default CofactoryButton;
