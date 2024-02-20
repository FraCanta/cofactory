import Link from "next/link";
import React from "react";
import { PiArrowUpRightThin } from "react-icons/pi";
const myFont = localFont({ src: "../../fonts/ClearfaceStd-Bold.woff" });
import localFont from "next/font/local";

function SocialBar() {
  return (
    <div className={`${myFont.className} flex gap-8 text-[6vw] lg:text-[2vw] `}>
      <Link
        href="https://www.google.com/"
        className="flex gap-1 items-center"
        target="_blank"
      >
        Linkedin <PiArrowUpRightThin />
      </Link>
      <Link
        href="https://www.google.com/"
        className="flex gap-1 items-center"
        target="_blank"
      >
        Instagram <PiArrowUpRightThin />
      </Link>
    </div>
  );
}

export default SocialBar;
