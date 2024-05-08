import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "@/public/assets/logo/logo.svg";
import Image from "next/image";
import DarkModeToggle from "../DarkModeToggle";
import { MenuButton } from "./MenuButton";
import Line from "../Line";
const myFont = localFont({ src: "../../fonts/ClearfaceStd-Bold.woff" });
import localFont from "next/font/local";
import SocialBar from "./SocialBar";
import { MaskText } from "../MaskText";

const myFont2 = localFont({ src: "../../fonts/Sneak-Regular.ttf" });
const Navbar = ({ lang }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <motion.div
      style={{
        y: isVisible ? "0%" : "-100%",
        transition: {
          duration: 0.8,
          ease: "linear",
          delay: isVisible ? 0 : 0.8,
        }, // Aggiunto il delay
      }}
      className="fixed left-0 top-0 w-full z-[9999] ease-in duration-300 backdrop-blur-sm h-[70px] lg:h-[95px]"
    >
      <div className="w-[90%] m-auto flex justify-between items-center py-4 text-white">
        <Link href="/" className="z-[20]" onClick={() => setOpen(false)}>
          <Image
            src={Logo}
            alt="logo"
            width={200}
            height={200}
            className="w-[130px] lg:w-[200px] "
          />
        </Link>
        <div className="flex gap-8 items-center">
          <DarkModeToggle />
          <div
            onClick={() => setOpen(!isOpen)}
            className="block ease-in duration-300 z-20 cursor-pointer"
          >
            <MenuButton
              isOpen={isOpen}
              onClick={() => setOpen(!isOpen)}
              strokeWidth="3"
              className="stroke-white dark:stroke-third toggle"
              transition={{ ease: "easeOut", duration: 0.2 }}
              width="40"
              height="20"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? "0%" : "-100%" }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="absolute top-0 lg:top-0 left-0 right-0 bottom-0 flex  w-full h-screen  bg-third dark:bg-white text-white dark:text-third"
        >
          <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2  gap-y-10 lg:mt-[95px]">
            <ul className={`${myFont.className}  flex flex-col py-20 lg:py-0`}>
              <li onClick={() => setOpen(false)}>
                <Link
                  href="/factory"
                  className="text-[20vw] lg:text-[8vw] cursor-pointer transition hover:text-second max-w-max "
                >
                  Factory
                </Link>
              </li>
              <li
                onClick={() => setOpen(false)}
                className="text-[20vw] lg:text-[8vw] cursor-pointer transition hover:text-second max-w-max "
              >
                <Link href="/works"> Works</Link>
              </li>
              <li
                onClick={() => setOpen(false)}
                className="text-[20vw] lg:text-[8vw] cursor-pointer transition hover:text-second max-w-max "
              >
                <Link href="/contatti"> Contact</Link>
              </li>
            </ul>
            {/* <div></div> */}
            <div className="h-full flex flex-col lg:items-end gap-y-10 lg:py-14">
              <SocialBar />
            </div>
          </div>
          {/* <div className="absolute bottom-0 right-0 md:right-10  h-2/3 w-full md:w-1/2 object-cover md:object-contain">
            <Image
              src="/assets/logo/iconabg.png"
              alt="Icona di sfondo"
              layout="fill"
              quality={75}
            />
          </div> */}
        </motion.div>
      </div>
      <div className="w-[90vw] mx-auto">
        <Line />
      </div>
    </motion.div>
  );
};

export default Navbar;
