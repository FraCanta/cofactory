import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <footer className="relative h-[400px] sms:h-[380px] bg-third dark:bg-white z-0 ">
      <div className="relative h-[calc(100vh+400px)] sms:h-[calc(100vh+380px)] -top-[100vh]">
        <div className="h-[400px] top-[calc(100vh-400px)] sms:h-[380px] sticky sms:top-[calc(100vh-380px)]   overflow-x-hidden">
          <div className="flex flex-col items-center justify-between w-full h-full ">
            {/* Posizionamento assoluto per h2, p e Cta2 */}
            <Link href="mailto:meetus@cofactory.it">
              <div className="flex items-center justify-center w-full -mt-10 lg:mt-0">
                <div className="w-[50rem] sm:w-[55rem] lg:w-[56rem] 2xl:w-[100rem]">
                  {/* Desktop: testo su una riga */}
                  <svg
                    viewBox="0 0 1000 200"
                    className="hidden w-full h-auto lg:block"
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
                      strokeDashoffset="1200"
                      className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                    >
                      Meetus@cofactory.it
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

                  {/* Mobile: testo in due righe */}
                  {/* Mobile: testo in due righe */}
                  <svg
                    viewBox="0 0 1000 300"
                    className="block w-full h-full lg:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <defs>
                      <linearGradient
                        id="grad-mobile"
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
                      y="45%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="none"
                      stroke="url(#grad-mobile)"
                      strokeWidth="3"
                      fontFamily="Bebas Neue, sans-serif"
                      fontSize="100"
                      strokeDasharray="1000" // lunghezza totale approssimativa del testo
                      strokeDashoffset="1000" // parte "nascosta" all'inizio
                    >
                      <tspan x="50%" dy="0">
                        Meetus@
                      </tspan>
                      <tspan x="50%" dy="0.9em">
                        Cofactory.it
                      </tspan>

                      <animate
                        attributeName="stroke-dashoffset"
                        values="1000;0;0;1000"
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

            {/* Separator */}
            <div className="w-full h-[1px] bg-white/20 dark:bg-third/20"></div>

            {/* Grid finale */}
            <div className="grid items-end w-full grid-cols-1 px-4 mb-4 lg:gap-y-0 sms:text-xs md:text-base sms:grid-cols-3 text-md text-white/60 dark:text-third/60 gap-y-4">
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
