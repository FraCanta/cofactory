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
        <title>{translation.head.title}</title>
        <meta name="description" content={translation.head.description} />
        <meta name="keywords" content={translation.head.keywords} />
        <meta name="robots" content={translation.head.robots} />
        <link rel="canonical" href={translation.head.canonical} />

        {/* Open Graph */}
        <meta property="og:title" content={translation.head.og.title} />
        <meta
          property="og:description"
          content={translation.head.og.description}
        />
        <meta property="og:type" content={translation.head.og.type} />
        <meta property="og:url" content={translation.head.og.url} />
        <meta property="og:image" content={translation.head.og.image} />
        <meta property="og:site_name" content={translation.head.og.site_name} />

        {/* Twitter */}
        <meta name="twitter:card" content={translation.head.twitter.card} />
        <meta name="twitter:title" content={translation.head.twitter.title} />
        <meta
          name="twitter:description"
          content={translation.head.twitter.description}
        />
        <meta name="twitter:image" content={translation.head.twitter.image} />

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(translation.head.schema.organization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(translation.head.schema.website),
          }}
        />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <nav className="z-[999999] w-screen bg-third dark:bg-white relative">
          <div className="w-[90%] m-auto flex justify-between items-center text-white h-[70px] md:h-[100px] 3xl:h-[200px] ">
            <Link href="/#hero">
              <Image
                src={Logo}
                alt="logo"
                className="w-[120px] h-auto lg:w-[130px] 3xl:w-[200px] 4xl:w-[350px]"
              />
            </Link>
            <div className="flex items-center gap-6">
              <Link
                href="/#hero"
                className="relative px-2 py-2 overflow-hidden text-xs font-medium uppercase transition-all duration-300 border-2 text-whitedark:text-third dark:text-third sm:px-4 border-second lg:px-5 4xl:px-10 4xl:py-8 lg:text-base 3xl:text-2xl 4xl:text-3xl group"
              >
                <span className="relative z-10">{translation.nav.cta}</span>
                <span className="absolute top-0 left-0 w-0 h-full transition-all duration-500 ease-out bg-second group-hover:w-full"></span>
              </Link>
              <DarkModeToggle />{" "}
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
