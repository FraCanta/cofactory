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
              className="w-full "
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex w-full aspect-square h-auto md:h-[70vh] rounded-lg relative">
                <motion.div
                  className="w-full h-full relative hidden lg:block"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "100%" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }} // Aggiunto delay per animare le immagini in modo sequenziale
                >
                  <Image
                    src={el.img}
                    alt="Milka"
                    fill
                    className="object-cover "
                  />
                </motion.div>
                <motion.div
                  className="w-full h-full relative hidden lg:block"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "100%" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }} // Aggiunto delay per animare le immagini in modo sequenziale
                >
                  <Image
                    src={el.img2}
                    alt="Milka"
                    fill
                    className="object-cover "
                  />
                </motion.div>
                <div className="relative aspect-square block lg:hidden">
                  <Image
                    src={el.responsive}
                    alt="Milka"
                    fill
                    className="object-cover rounded-lg  relative"
                  />
                  <div className="absolute inset-0 bg-third opacity-45"></div>
                  <div className="absolute top-1/2 z-10 flex left-1/2 right-0 -translate-y-1/2 -translate-x-1/2 w-full">
                    <h2 className="text-white  text-2xl font-bold w-full text-center flex flex-wrap  justify-center items-center gap-2">
                      <span>{el.brand1}</span>{" "}
                      <span>
                        {" "}
                        <Image
                          src="/assets/logo/logo_intero.svg"
                          width={20}
                          height={10}
                        />
                      </span>
                      <span>{el.brand2}</span>
                    </h2>
                  </div>
                </div>

                <motion.div
                  className={`absolute inset-0 bg-third opacity-0 transition-opacity duration-300 ${
                    hoveredIndex === i ? "md:block" : "hidden"
                  } md:fixed md:top-0 md:left-0 md:w-full md:h-full`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === i ? 0.6 : 0 }}
                ></motion.div>

                <motion.div
                  className="absolute inset-0 w-full h-full lg:flex items-center justify-center hidden "
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: hoveredIndex === i ? 1 : 0, y: 20 }}
                >
                  <h2 className="text-white text-xl lg:text-5xl font-bold w-[90%] mx-auto text-center lg:flex justify-center items-center gap-4 hidden">
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
              </div>
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
};

export default LavoriSec;
