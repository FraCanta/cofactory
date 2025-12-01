import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <footer className="relative h-[400px] lg:h-[380px] bg-third dark:bg-white z-0">
      <div className="relative h-[calc(100vh+400px)] lg:h-[calc(100vh+380px)] -top-[100vh]">
        <div className="h-[400px] top-[calc(100vh-400px)] lg:h-[380px] sticky lg:top-[calc(100vh-380px)] mx-6">
          <div className="flex flex-col items-center justify-between w-full h-full ">
            {/* Posizionamento assoluto per h2, p e Cta2 */}
            <div className="flex flex-wrap justify-center w-full gap-6 text-center lg:items-end">
              <h3 className="text-[7rem] lg:text-[14rem] 2xl:text-[15rem] lg:-mb-[2.8rem] mt-6 font-bebas leading-none text-stroke2">
                Meet us
              </h3>
              <Link
                href="mailto:meetus@cofactory.it"
                className="relative z-50 px-3 py-3 overflow-hidden text-xs font-medium text-white uppercase transition-all duration-300 border-2 max-w-max dark:text-third sm:px-4 border-pink lg:px-5 4xl:px-10 4xl:py-8 lg:text-base 3xl:text-2xl 4xl:text-3xl group"
              >
                <span className="relative z-10">Contattaci</span>
                <span className="absolute top-0 left-0 w-0 h-full transition-all duration-500 ease-out bg-pink group-hover:w-full"></span>
              </Link>
            </div>

            {/* Separator */}
            <div className="w-full h-[1px] bg-white/20 "></div>

            {/* Grid finale */}
            <div className="grid items-end w-full grid-cols-1 mb-4 lg:gap-y-0 lg:grid-cols-3 text-md text-white/60 gap-y-4">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-4">
                <span>&copy;2025 Cofactory srl - P.I. 10233611218 </span>
              </div>
              <div className="lg:text-center">Cookie & Privacy Policy</div>
              <div className="flex gap-2 lg:justify-end">
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
