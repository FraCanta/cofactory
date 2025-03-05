import Link from "next/link";
import React from "react";
import localFont from "next/font/local";
import { PiArrowUpRightThin } from "react-icons/pi";
const myFont = localFont({ src: "../../fonts/Tactico-Grunge.otf" });
const myFont2 = localFont({ src: "../../fonts/Raleway-Regular.ttf" });

function Footer() {
  return (
    <div
      className="relative h-[500px] lg:h-[60vh] bg-[#161617] dark:bg-[#D9D9D9] text-white/90 dark:text-third"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+500px)] lg:h-[calc(100vh+60vh)] -top-[100vh]">
        <div className="h-[500px] top-[calc(100vh-500px)] lg:h-[60vh] sticky lg:top-[calc(100vh-60vh)] flex items-center justify-center">
          <div className="flex items-center justify-center ">
            {/* Posizionamento assoluto per h2, p e Cta2 */}
            <div className=" flex flex-col md:items-center justify-center w-full lg:w-[90%] min-h-full px-4 mx-auto gap-4">
              <h2 className="text-3xl font-bold text-white md:text-center sm:text-4xl md:text-5xl">
                Footer
              </h2>
              <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="text-md text-white/60">
                  <p>© 2024 Cofactory srl</p>
                  <p>All rights reserved</p>
                  <p>P.I. 10233611218</p>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col w-full gap-2 lg:text-center">
                    <p className={`${myFont2.className} text-lg`}>
                      CERCHI UN PARTNER?
                    </p>
                    <Link
                      href="/contatti"
                      className="flex items-center w-full lg:justify-center"
                    >
                      <span
                        className={`${myFont.className} text-4xl text-second leading-7`}
                        id="logo1"
                      >
                        CO
                      </span>
                      <span
                        className={`${myFont2.className} text-4xl text-pink leading-8`}
                        id="logo2"
                      >
                        ntattaci
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-1 lg:items-end">
                  <div
                    className={`${myFont2.className} flex gap-4 text-md text-white/60 text-lg justify  lg:justify-end`}
                  >
                    <Link
                      href="https://www.google.com/"
                      className="flex items-center gap-1"
                      target="_blank"
                    >
                      Linkedin
                    </Link>
                    <Link
                      href="https://www.google.com/"
                      className="flex items-center gap-1"
                      target="_blank"
                    >
                      Instagram
                    </Link>
                  </div>
                  <div className="text-md text-white/60">
                    Privacy Policy - Cookie Policy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
