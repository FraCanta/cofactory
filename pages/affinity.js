import Hero from "@/components/layout/Hero";
import React from "react";
import { motion } from "framer-motion";
import { MaskText } from "@/components/MaskText";
import localFont from "next/font/local";
const myFont = localFont({ src: "../fonts/ClearfaceStd-Bold.woff" });
const myFont2 = localFont({ src: "../fonts/Raleway-Regular.ttf" });
import Link from "next/link";
const Contatti = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* <Hero>
        <MaskText>
          <h1
            className={`${myFont.className} text-[60px] leading-[75px] md:text-[90px] md:leading-[100px] md:w-[100%]  text-white dark:text-third md:text-center lg:w-[70%] mx-auto  2xl:text-[100px] 2xl:leading-[120px] 2xla:text-[120px] 2xla:leading-[130px]`}
          >
            Titolo per pagina contatti
          </h1>
        </MaskText>
      </Hero> */}
      {/* <div className="w-[90%] mx-auto">
          <Line />
        </div> */}
      <div className="w-[90%] mx-auto flex flex-col gap-6 py-32 h-screen">
        <h2 className={`${myFont.className} text-white text-5xl`}>
          👋🏽 Hey there!
        </h2>
        <p className={`${myFont2.className} text-white text-2xl`}>
          Questa domanda è obbligatoria.* Desideri lavorare con noi? Inizia
          compilando questo semplice modulo e ti risponderemo in un attimo.
          Naturalmente, se preferisci farlo alla vecchia maniera, puoi sempre
          scriverci a
          <Link href="mailto:info@cofactory.it" className="mx-2 text-pink">
            info@cofactory.it
          </Link>{" "}
        </p>
        <ul className="flex flex-col gap-4 text-2xl text-white">
          <li className="px-6 py-4 border border-pink max-w-max rounded-xl">
            A Parlaci del tuo progetto
          </li>
          <li className="px-6 py-4 border border-second max-w-max rounded-xl">
            B Info e costi
          </li>
          <li className="px-6 py-4 border border-yellow max-w-max rounded-xl">
            C Dicci solo 'Ciao'
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Contatti;
