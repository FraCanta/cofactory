import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <footer className="relative h-[800px] lg:h-[600px] bg-third dark:bg-white -z-10">
      <div className="relative h-[calc(100vh+800px)] lg:h-[calc(100vh+600px)] -top-[100vh]">
        <div className="h-[800px] top-[calc(100vh-800px)] lg:h-[600px] sticky lg:top-[calc(100vh-600px)] flex items-center justify-center mx-6">
          <div className="flex flex-col items-center w-full h-full justify-evenly gap-y-10">
            {/* Posizionamento assoluto per h2, p e Cta2 */}
            <div className="flex flex-col items-center justify-center w-full text-center ">
              <h3 className="text-[8rem] lg:text-[14rem] fxl:text-[15rem] font-bebas leading-none text-stroke2">
                Meet us
              </h3>
              {/* <Link
                href="mailto:meetus@cofactory.it"
                className="relative px-3 py-3 overflow-hidden text-xs font-medium text-white uppercase transition-all duration-300 border-2 max-w-max dark:text-third sm:px-4 border-pink lg:px-5 4xl:px-10 4xl:py-8 lg:text-base 3xl:text-2xl 4xl:text-3xl group"
              >
                <span className="relative z-10">Contattaci</span>
                <span className="absolute top-0 left-0 w-0 h-full transition-all duration-500 ease-out bg-pink group-hover:w-full"></span>
              </Link> */}
            </div>
            <div className="grid w-full gap-10 lg:grid-cols-3">
              <div>
                <div className="flex items-center gap-1">
                  <div className="w-[0.6rem] h-[0.6rem] bg-second"></div>
                  <p className="text-3xl uppercase font-bebas text-second">
                    Email us
                  </p>
                </div>

                <p className="text-xl text-white">meetus@cofactory.it</p>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1">
                  <div className="w-[0.6rem] h-[0.6rem] bg-second"></div>
                  <p className="text-3xl uppercase font-bebas text-second">
                    cerchi un partner?
                  </p>
                </div>

                <Link
                  target="_blank"
                  className="text-xl text-white"
                  href="/cerchi-un-partner"
                >
                  te lo troviamo noi
                </Link>
              </div>{" "}
              <div>
                <div className="flex items-center gap-1">
                  <div className="w-[0.6rem] h-[0.6rem] bg-second"></div>
                  <p className="text-3xl uppercase font-bebas text-second">
                    connect
                  </p>
                </div>

                <Link
                  target="_blank"
                  className="text-xl text-white"
                  href="https://www.linkedin.com/company/cofactorymatchingagency/posts/?feedView=all"
                >
                  cofactory linkedin
                </Link>
              </div>
            </div>
            {/* Separator */}
            <div className="w-full h-[1px] bg-white/20 mt-6"></div>

            {/* Grid finale */}
            <div className="grid w-full grid-cols-1 lg:items-center lg:grid-cols-3 text-md text-white/60 gap-y-4">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-4">
                <span>&copy;2025 Cofactory srl - P.I. 10233611218 </span>
              </div>
              <div>Cookie & Privacy Policy</div>
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
