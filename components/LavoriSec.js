import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import localFont from "next/font/local"; // Import localFont prima dell'uso

const myFont = localFont({ src: "../fonts/ClearfaceStd-Bold.woff" });

const LavoriSec = ({ cards }) => {
  return (
    <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-4  py-8">
      {cards.map((el, i) => {
        if (i === 2 || i === 5) {
          return (
            <div key={i} className="w-full lg:col-span-3">
              <Link href={`/cases/${el.button}`}>
                <div className="w-full aspect-square h-[60vh]  relative">
                  <Image
                    src={el.img}
                    alt={el.name}
                    fill
                    className="object-cover rounded-lg hover:lg:rounded-full hover:transition-all hover:grayscale"
                  />
                </div>
              </Link>
            </div>
          );
        } else {
          return (
            <div key={i}>
              <Link href={`/cases/${el.button}`}>
                <div className="w-full aspect-square h-[40vh] sm:h-[50vh] lg:h-[60vh] relative">
                  <Image
                    src={el.img}
                    alt={el.name}
                    fill
                    className="object-cover rounded-lg hover:lg:rounded-e-full hover:transition-all hover:grayscale"
                  />
                </div>
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
};

export default LavoriSec;
