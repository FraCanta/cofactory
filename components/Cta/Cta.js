import Link from "next/link";
import React, { Children } from "react";

function Cta({ link, children }) {
  return (
    <Link
      href={link}
      className="relative px-3 py-3 overflow-hidden text-xs font-medium text-white uppercase transition-all duration-300 border-2 max-w-max dark:text-third sm:px-4 border-pink lg:px-5 4xl:px-10 4xl:py-8 lg:text-base 3xl:text-2xl 4xl:text-3xl group"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute top-0 left-0 w-0 h-full transition-all duration-500 ease-out bg-pink group-hover:w-full"></span>
    </Link>
  );
}

export default Cta;
