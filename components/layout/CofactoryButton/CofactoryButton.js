import { Icon } from "@iconify/react";
import React from "react";

function CofactoryButton({ isPlaying }) {
  return (
    <main className="main">
      <button className="roundButton bg-third/90 dark:bg-white/80 border border-white dark:border-third w-[110px] h-[110px] lg:w-[130px] lg:h-[130px] fxl:w-[160px] fxl:h-[160px] 3xl:w-[260px] 3xl:h-[200px]">
        <svg
          viewBox="0 0 200 200"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full svg"
        >
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

          <text fontSize="43" fill="currentColor" textAnchor="middle">
            <textPath
              xlinkHref="#innerCirclePath"
              startOffset="26%"
              className={`font-bebas fill-white dark:fill-third `}
            >
              IL NOSTRO
            </textPath>
          </text>
          <text fontSize="40" fill="currentColor" textAnchor="middle">
            <textPath
              xlinkHref="#innerCirclePath"
              startOffset="50%"
              className={`font-raleway fill-second`}
            >
              <tspan>&bull;</tspan>
            </textPath>
          </text>
          <text fontSize="43" fill="currentColor" textAnchor="middle">
            <textPath
              xlinkHref="#innerCirclePath"
              startOffset="76%"
              className={`font-bebas  fill-pink  `}
            >
              APPROCCIO
            </textPath>
          </text>
          <text fontSize="40" fill="currentColor" textAnchor="middle">
            <textPath
              xlinkHref="#innerCirclePath"
              startOffset="2%"
              className={`font-raleway fill-second `}
            >
              <tspan>&bull;</tspan>
            </textPath>
          </text>
        </svg>
        <div className="innerCircle w-[40px] h-[40px] fxl:w-[60px] fxl:h-[60px] flex items-center justify-center border border-white dark:border-third hover:bg-second dark:hover:bg-second">
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
