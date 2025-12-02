import Logo from "@/public/assets/logo/logo.svg";
import React from "react";
import { motion } from "framer-motion";
import translationIT from "@/public/locales/it/progetto.json";
import translationEN from "@/public/locales/en/progetto.json";
import Link from "next/link";
import Image from "next/image";
import DarkModeToggle from "@/components/DarkModeToggle";
import StepsContact from "@/components/StepsContact/StepsContact";
import Head from "next/head";
const Contatti = ({ translation }) => {
  return (
    <>
      <Head>
        <title>Cofactory - Cerchi un partner?</title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <nav className="z-[999999] w-screen bg-third dark:bg-white relative">
          <div className="w-[90%] m-auto flex justify-between items-center text-white h-[70px] md:h-[100px] 3xl:h-[200px] ">
            <div className="flex lg:hidden">
              <DarkModeToggle />{" "}
            </div>
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                className="w-[120px] h-auto lg:w-[130px] 3xl:w-[200px] 4xl:w-[350px]"
              />
            </Link>
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="relative px-2 py-2 overflow-hidden text-xs font-medium uppercase transition-all duration-300 border-2 text-whitedark:text-third dark:text-third sm:px-4 border-second lg:px-5 4xl:px-10 4xl:py-8 lg:text-base 3xl:text-2xl 4xl:text-3xl group"
              >
                <span className="relative z-10">torni indietro?</span>
                <span className="absolute top-0 left-0 w-0 h-full transition-all duration-500 ease-out bg-second group-hover:w-full"></span>
              </Link>

              <div className="hidden lg:flex">
                <DarkModeToggle />{" "}
              </div>
            </div>
          </div>
        </nav>

        <StepsContact translation={translation} />
      </motion.div>
    </>
  );
};

export default Contatti;

export async function getStaticProps({ locale }) {
  let obj;
  switch (locale) {
    case "it":
      obj = translationIT;
      break;
    case "en":
      obj = translationEN;
      break;
    default:
      obj = translationIT;
      break;
  }

  return {
    props: {
      translation: obj.progetto,
    },
    revalidate: 60,
  };
}
