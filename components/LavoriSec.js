import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const LavoriSec = ({ cards }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-[90%] mx-auto grid grid-cols-1 gap-6 py-8">
      {cards.map((el, i) => {
        return (
          <Link href={el.button} key={i}>
            <motion.div
              className="w-full aspect-square md:h-[70vh] relative"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={el.img}
                alt="Milka"
                fill
                className="object-cover rounded-lg"
              />

              <motion.div
                className={`absolute inset-0 bg-third opacity-0 transition-opacity duration-300 ${
                  hoveredIndex === i ? "md:block" : "hidden"
                } md:fixed md:top-0 md:left-0 md:w-full md:h-full`}
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === i ? 0.6 : 0 }}
              ></motion.div>

              <motion.div
                className="absolute inset-0 w-full h-full flex items-center justify-center"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: hoveredIndex === i ? 1 : 0, y: 20 }}
              >
                <h2 className="text-white text-3xl lg:text-5xl font-bold w-[90%] mx-auto text-center flex justify-center items-center gap-4">
                  <span>{el.brand1}</span>{" "}
                  <motion.span
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 45 }}
                    transition={{
                      duration: 1,
                      type: "spring",
                    }}
                  >
                    {" "}
                    <Image
                      src="/assets/logo/logo_intero.svg"
                      width={40}
                      height={10}
                    />
                  </motion.span>
                  <span>{el.brand2}</span>
                </h2>
              </motion.div>
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
};

export default LavoriSec;
