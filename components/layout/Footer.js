import Link from "next/link";
import React from "react";
import localFont from "next/font/local";
import { PiArrowUpRightThin } from "react-icons/pi";
const myFont = localFont({ src: "../../fonts/Tactico-Grunge.otf" });
const myFont2 = localFont({ src: "../../fonts/Raleway-Regular.ttf" });

function Footer() {
  return (
    // <div className="w-full bg-[#161617] py-10 dark:bg-[#D9D9D9] text-white/90 dark:text-third h-auto ">
    //   <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
    //     <div className="text-md">
    //       <p>© 2024 Cofactory srl</p>
    //       <p>All rights reserved</p>
    //       <p>P.I. 10233611218</p>
    //     </div>
    //     {/* <div className="grid grid-cols-1 gap-6">
    //       <div className="flex flex-col w-full gap-2 lg:text-center">
    //         <p className={`${myFont2.className} text-lg`}>CERCHI UN PARTNER?</p>
    //         <Link
    //           href="/contatti"
    //           className="flex items-center w-full lg:justify-center"
    //         >
    //           <span
    //             className={`${myFont.className} text-4xl text-second leading-7`}
    //             id="logo1"
    //           >
    //             CO
    //           </span>
    //           <span
    //             className={`${myFont2.className} text-4xl text-pink leading-8`}
    //             id="logo2"
    //           >
    //             ntattaci
    //           </span>
    //         </Link>
    //       </div>
    //     </div> */}
    //     <div className="flex flex-col gap-1 lg:items-end">
    //       <div
    //         className={`${myFont2.className} flex gap-4 text-md text-lg justify  lg:justify-end`}
    //       >
    //         <Link
    //           href="https://www.google.com/"
    //           className="flex items-center gap-1"
    //           target="_blank"
    //         >
    //           Linkedin
    //         </Link>
    //         <Link
    //           href="https://www.google.com/"
    //           className="flex items-center gap-1"
    //           target="_blank"
    //         >
    //           Instagram
    //         </Link>
    //       </div>
    //       <div className="text-md ">Privacy Policy - Cookie Policy</div>
    //     </div>
    //   </div>
    // </div>
    <footer class="footer-main bg-[#161617] dark:bg-[#D9D9D9] dark:text-white/90 text-third">
      <div class="relative z-20 bg-third h-[200px] [clip-path:inset(0_0_0_0)]">
        <div class="footer-content fixed left-0 bottom-0 h-[250px] w-full flex flex-col items-center lg:items-start text-center lg:text-left gap-6 py-14 md:py-40 md:px-14 bg-black text-white">
          {/* <SocialLinks class="text-4xl" /> */}Social
          <div class="copyright flex flex-col lg:flex-row gap-2.5 [&_a]:anim-underline-white">
            <p>
              &copy; 2025 Cofactory srl - <p>P.I. 10233611218</p>
              <span class="inline-block ml-2.5">&pi; Privacy Policy</span>
            </p>
            <p>
              Made with ❤️ by{" "}
              <a href="https://www.thallion-dev.it">Thallion dev</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
