import Link from "next/link";
import React from "react";
import localFont from "next/font/local";
import { PiArrowUpRightThin } from "react-icons/pi";
const myFont = localFont({ src: "../../fonts/Tactico-Grunge.otf" });
const myFont2 = localFont({ src: "../../fonts/Raleway-Regular.ttf" });

function Footer() {
  return (
    <div className="w-full bg-[#161617] dark:bg-[#D9D9D9] text-white/90 dark:text-third h-auto py-10">
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="text-md text-white/60">
          <p>© 2024 Cofactory srl</p>
          <p>All rights reserved</p>
          <p>P.I. 10233611218</p>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="lg:text-center w-full flex flex-col gap-2">
            <p className={`${myFont2.className} text-lg`}>CERCHI UN PARTNER?</p>
            <Link
              href="/contatti"
              className="flex items-end w-full lg:justify-center"
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
        <div className="flex lg:items-end flex-col gap-1">
          <div
            className={`${myFont2.className} flex gap-4 text-md text-white/60 text-lg justify  lg:justify-end`}
          >
            <Link
              href="https://www.google.com/"
              className="flex gap-1 items-center"
              target="_blank"
            >
              Linkedin
            </Link>
            <Link
              href="https://www.google.com/"
              className="flex gap-1 items-center"
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
  );
}

export default Footer;
