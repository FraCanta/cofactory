import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <footer className="relative h-[400px] sms:h-[380px] bg-third dark:bg-white z-0 ">
      <div className="relative h-[calc(100vh+400px)] sms:h-[calc(100vh+380px)] -top-[100vh]">
        <div className="h-[400px] top-[calc(100vh-400px)] sms:h-[380px] sticky sms:top-[calc(100vh-380px)]   overflow-x-hidden">
          <div className="flex flex-col items-center justify-between w-full h-full ">
            {/* <Link href="mailto:meetus@cofactory.it">
              <div className="flex items-center justify-center w-full -mt-10 lg:mt-0">
                <div className="w-[50rem] sm:w-[55rem] lg:w-[56rem] 2xl:w-[100rem]">
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
                      strokeDasharray="1000" 
                      strokeDashoffset="1000" 
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
            </Link> */}
            <Link
              href="mailto:meetus@cofactory.it"
              title="Scrivi a meetus@cofactory.it"
              className="group"
            >
              <div className="flex items-center justify-between w-full sm:-mt-8 lg:mt-14 2xl:-mt-0">
                <div className="w-[55rem] sm:w-[60rem] lg:w-[70rem] 2xl:w-[100rem]">
                  <svg
                    viewBox="0 0 1000 200"
                    className="w-full h-auto "
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    {/* ClipPath per il riempimento */}
                    <defs>
                      <clipPath id="meet-clip">
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fontFamily="Bebas Neue, sans-serif"
                          fontSize="140"
                          strokeWidth="2"
                          fill="transparent"
                          stroke="#368b90"
                        >
                          Meet us
                        </text>
                      </clipPath>
                    </defs>

                    {/* Rettangolo riempimento animato */}
                    <rect
                      className="w-0 h-full fill-[#368b90] transition-all duration-700 ease-out group-hover:w-full"
                      clipPath="url(#meet-clip)"
                    />

                    {/* Testo contorno */}
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontFamily="Bebas Neue, sans-serif"
                      fontSize="140"
                      stroke="#368b90"
                      strokeWidth="2"
                      fill="transparent"
                    >
                      Meet us
                    </text>
                  </svg>
                  {/* <svg
                    viewBox="0 0 1000 300"
                    className="block w-full h-full lg:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <defs>
                      <clipPath id="meet-clip-mobile">
                        <text
                          x="50%"
                          y="35%"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fontFamily="Bebas Neue, sans-serif"
                          fontSize="100"
                          stroke="#368b90"
                          strokeWidth="2"
                          fill="transparent"
                        >
                          <tspan x="50%" dy="0">
                            Meetus@
                          </tspan>
                          <tspan x="50%" dy="1.1em">
                            Cofactory.it
                          </tspan>
                        </text>
                      </clipPath>
                    </defs>

                    <rect
                      x="0"
                      y="0"
                      width="0"
                      height="300"
                      fill="#368b90"
                      clipPath="url(#meet-clip-mobile)"
                      className="transition-all duration-700 ease-out group-hover:w-full"
                    />

                    <text
                      x="50%"
                      y="35%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontFamily="Bebas Neue, sans-serif"
                      fontSize="100"
                      stroke="#368b90"
                      strokeWidth="2"
                      fill="transparent"
                    >
                      <tspan x="50%" dy="0">
                        Meetus@
                      </tspan>
                      <tspan x="50%" dy="1.1em">
                        Cofactory.it
                      </tspan>
                    </text>
                  </svg> */}
                </div>
              </div>
            </Link>

            {/* Separator */}
            <div className="w-full h-[1px] bg-white/20 dark:bg-third/20 -mt-10"></div>

            {/* Grid finale */}
            <div className="grid items-end w-full grid-cols-1 px-4 mb-4 lg:gap-y-0 sms:text-xs md:text-base sms:grid-cols-4 text-md text-white/60 dark:text-third/60 gap-y-3">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-4 ">
                <span>
                  &copy;2025 Cofactory srl - P.I. 10233611218 -
                  <Link
                    href="mailto:meetus@cofactory.it"
                    title="Scrivi a meetus@cofactory.it"
                    className="ml-1"
                  >
                    meetus@cofactory.it
                  </Link>
                </span>
              </div>
              <div className="flex items-center gap-2 sms:justify-center">
                <p>Connect to us</p>
                <Link
                  className="underline "
                  target="_blank"
                  title="Connettiti con noi su Linkedin"
                  href="https://www.linkedin.com/company/cofactorymatchingagency/posts/?feedView=all"
                >
                  <Icon icon="lineicons:linkedin" width="28px" height="28px" />
                </Link>
              </div>{" "}
              <div className="sms:text-center">Cookie & Privacy Policy</div>
              <div className="flex gap-2 sms:justify-end">
                <p>Credits:</p>
                <Link
                  className="underline"
                  target="_blank"
                  title="Francesca Cantale web designer creativa"
                  href="https://www.thallion-dev.it"
                >
                  Thallion dev
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
