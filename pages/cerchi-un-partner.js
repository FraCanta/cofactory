import Logo from "@/public/assets/logo/logo.svg";
import React from "react";
import { motion } from "framer-motion";
import translationIT from "@/public/locales/it/progetto.json";
import translationEN from "@/public/locales/en/progetto.json";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import DarkModeToggle from "@/components/DarkModeToggle";
import SmoothParallaxImage from "@/components/SmoothParallaxImage/SmoothParallaxImage";
import Hero from "@/components/layout/Hero";
import { MaskText } from "@/components/MaskText";
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
        <nav className="w-screen ">
          <div className="w-[90%] m-auto flex justify-between items-center text-white h-[70px] md:h-[100px] 3xl:h-[200px]">
            {/*  */}
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                className="w-[110px] lg:w-[130px] 3xl:w-[200px]"
              />
            </Link>
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="px-2 py-2 text-sm font-medium text-white uppercase border-2 rounded-[30px] lg:px-4 lg:text-base border-second dark:text-third 3xl:text-2xl"
              >
                torni indietro?
              </Link>
              <DarkModeToggle />
            </div>
          </div>
        </nav>

        <div className="flex flex-col items-center w-full min-h-screen py-10">
          <StepsContact translation={translation} />
        </div>
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
