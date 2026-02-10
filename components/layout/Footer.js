import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import BlurryLights from "./BlurryLights";

function Footer() {
  return (
    <footer className="relative h-[400px] sms:h-[380px] fxl:h-[450px] bg-third dark:bg-white z-0 ">
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <BlurryLights />
      </div>

      <div className="relative h-[calc(100vh+400px)] sms:h-[calc(100vh+380px)] fxl:h-[calc(100vh+450px)]  -top-[100vh] bg-third dark:bg-white ">
        <div className="h-[400px] top-[calc(100vh-400px)]  sms:h-[380px] sticky sms:top-[calc(100vh-380px)] fxl:h-[450px] fxl:top-[calc(100vh-450px)]   overflow-x-hidden">
          <div className="flex flex-col items-center justify-between w-full h-full ">
            <Link
              href="mailto:meetus@cofactory.it"
              title="Scrivi a meetus@cofactory.it"
              className="group"
            >
              <div className="flex items-center justify-between w-full sm:mt-6 lg:mt-14 2xl:-mt-0 fxl:-mt-14">
                <div className="w-[55rem] sm:w-[60rem] lg:w-[70rem] 2xl:w-[100rem] fxl:w-[130rem]">
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
            <div className="grid items-end w-full grid-cols-1 px-4 mb-4 lg:gap-y-0 sms:text-xs md:text-base sms:grid-cols-3 text-md text-white/60 dark:text-third/60 gap-y-3">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-4 ">
                <span>
                  &copy;2025 Cofactory srl -
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
                <Link
                  className="underline "
                  target="_blank"
                  title="Connettiti con noi su Linkedin"
                  href="https://www.linkedin.com/company/cofactorymatchingagency/posts/?feedView=all"
                >
                  <Icon icon="lineicons:linkedin" width="28px" height="28px" />
                </Link>
                {/* <Link
                  className="underline "
                  target="_blank"
                  title="Connettiti con noi su Instagram"
                  href="https://www.instagram.com/cofactorymatchingagency/"
                > */}
                <Icon
                  icon="lineicons:instagram"
                  width="28px"
                  height="28px"
                  className="text-white/40 dark:text-third/40"
                />
                {/* </Link> */}
              </div>{" "}
              <div className="sms:text-right">Cookie & Privacy Policy</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
