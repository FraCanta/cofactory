import Link from "next/link";
import React from "react";

const CtaOutline = ({ link, children }) => {
  return (
    <Link
      href={link}
      className="fill_cta w-full flex items-center lg:w-max-content text-center text-second text-xl md:text-2xl font-bold leading-snug py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl rounded-[32px] border-2 border-second transition duration-[0.25s] uppercase"
    >
      {children}
    </Link>
  );
};

export default CtaOutline;
