import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <footer className="relative h-[400px] sms:h-[380px] bg-third dark:bg-white z-0">
      <div className="relative h-[calc(100vh+400px)] sms:h-[calc(100vh+380px)] -top-[100vh]">
        <div className="h-[400px] top-[calc(100vh-400px)] sms:h-[380px] sticky sms:top-[calc(100vh-380px)] mx-6">
          <div className="flex flex-col items-center justify-between w-full h-full ">
            {/* Posizionamento assoluto per h2, p e Cta2 */}
            <div className="flex flex-wrap justify-center w-full gap-6 text-center sms:items-end">
              <Link href="mailto:meetus@cofactory.it">
                <div className="flex items-center justify-center w-full lg:mt-0">
                  <div className="w-[58rem] lg:w-[56rem] 2xl:w-[100rem]">
                    <svg
                      viewBox="0 0 1000 200"
                      className="w-full h-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <defs>
                        <linearGradient
                          id="grad"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#bb5471" />
                          <stop offset="50%" stopColor="#368b90" />
                          <stop offset="100%" stopColor="#daa444" />
                        </linearGradient>
                      </defs>

                      <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="none"
                        stroke="url(#grad)"
                        strokeWidth="3"
                        fontFamily="Bebas Neue, sans-serif"
                        fontSize="140"
                        strokeDasharray="1200"
                        className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                        strokeDashoffset="1200"
                      >
                        Meet us
                        {/* Serpentina */}
                        <animate
                          attributeName="stroke-dashoffset"
                          values="1200;0;0;1200"
                          keyTimes="0;0.5;0.75;1"
                          dur="5s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="stroke-opacity"
                          values="0;0.8;0.5;0.8;0"
                          keyTimes="0;0.5;0.65;0.8;1"
                          dur="8s"
                          repeatCount="indefinite"
                        />
                      </text>
                    </svg>
                  </div>
                </div>
              </Link>
              {/* <Link
                href="mailto:meetus@cofactory.it"
                className="relative z-50 px-3 py-3 overflow-hidden text-xs font-medium text-white uppercase transition-all duration-300 border-2 max-w-max dark:text-third sm:px-4 border-pink lg:px-5 4xl:px-10 4xl:py-8 lg:text-base 3xl:text-2xl 4xl:text-3xl group"
              >
                <span className="relative z-10">Contattaci</span>
                <span className="absolute top-0 left-0 w-0 h-full transition-all duration-500 ease-out bg-pink group-hover:w-full"></span>
              </Link> */}
            </div>

            {/* Separator */}
            <div className="w-full h-[1px] bg-white/20 dark:bg-third/20"></div>

            {/* Grid finale */}
            <div className="grid items-end w-full grid-cols-1 mb-4 lg:gap-y-0 sms:text-xs md:text-base sms:grid-cols-3 text-md text-white/60 dark:text-third/60 gap-y-4">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-4 ">
                <span>&copy;2025 Cofactory srl - P.I. 10233611218 </span>
              </div>
              <div className="sms:text-center">Cookie & Privacy Policy</div>
              <div className="flex gap-2 sms:justify-end">
                <p>Credits:</p>
                <a className="underline" href="https://www.thallion-dev.it">
                  Thallion dev
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
