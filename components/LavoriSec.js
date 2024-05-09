import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import localFont from "next/font/local"; // Import localFont prima dell'uso

const myFont = localFont({ src: "../fonts/ClearfaceStd-Bold.woff" });

const LavoriSec = ({ cards }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-4 py-8">
      {cards.map((el, i) => {
        const isHovered = hoveredIndex === i;
        if (i === 2 || i === 5) {
          return (
            <div
              key={i}
              className="w-full lg:col-span-3"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link href={`/cases/${el.button}`}>
                <div
                  className="w-full aspect-square h-[60vh] relative"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <Image
                    src={el.img}
                    alt={el.name}
                    fill
                    className="object-cover rounded-lg lg:opacity-100 hover:lg:opacity-50 hover:lg:rounded-[250px] hover:transition-all hover:duration-700 opacity-50  hover:lg:grayscale"
                  />
                  {isHovered && (
                    <div className="absolute top-1/2 left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col lg:flex-row items-center justify-center  transition-all duration-1000 ease-in  text-white text-3xl lg:text-4xl font-bold  w-full">
                      <span className={`${myFont.className}`}>{el.brand1}</span>{" "}
                      <span className="relative h-8 w-8 mx-6">
                        <Image
                          src="/assets/logo/per.svg"
                          fill
                          className="h-full w-full object-cover"
                        />
                      </span>{" "}
                      <span className={`${myFont.className}`}>{el.brand2}</span>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          );
        } else {
          return (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link href={`/cases/${el.button}`}>
                <div
                  className="w-full aspect-square h-[40vh] sm:h-[50vh] lg:h-[60vh] relative"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <Image
                    src={el.img}
                    alt={el.name}
                    fill
                    className="object-cover rounded-lg lg:opacity-100 hover:lg:opacity-50 hover:lg:rounded-[250px] hover:transition-all hover:duration-700 opacity-50  hover:lg:grayscale"
                  />
                  {isHovered && (
                    <div className="absolute top-1/2 left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col lg:flex-row items-center justify-center  transition-all duration-1000 ease-in  text-white text-3xl lg:text-4xl font-bold  w-full">
                      <span className={`${myFont.className}`}>{el.brand1}</span>{" "}
                      <span className="relative h-8 w-8 mx-6">
                        <Image
                          src="/assets/logo/per.svg"
                          fill
                          className="h-full w-full object-cover"
                        />
                      </span>{" "}
                      <span className={`${myFont.className}`}>{el.brand2}</span>
                    </div>
                  )}
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
