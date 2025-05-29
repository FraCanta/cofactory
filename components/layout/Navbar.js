import React, { useState, useEffect } from "react";
import { color, motion } from "framer-motion";
import Link from "next/link";
import Logo from "@/public/assets/logo/logo.svg";
import Image from "next/image";
import DarkModeToggle from "../DarkModeToggle";
import { MenuButton } from "./MenuButton";
import localFont from "next/font/local";
import { useRouter } from "next/router";

const myFont = localFont({ src: "../../fonts/ClearfaceStd-Bold.woff" });

const Navbar = ({ lang }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

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
        },
      }}
      className="fixed left-0 top-0 w-full z-[9999] ease-in duration-300 backdrop-blur-sm"
    >
      <div className="w-[90%] m-auto flex justify-between items-center text-white h-[70px] md:h-[100px] 3xl:h-[200px]">
        <Link href="/" className="z-[20]" onClick={() => setOpen(false)}>
          <Image
            src={Logo}
            alt="logo"
            width={200}
            height={200}
            className="w-[110px] lg:w-[130px] 3xl:w-[200px]"
          />
        </Link>

        <div className="relative flex items-center gap-4 lg:gap-8">
          <Link
            href="/cerchi-un-partner"
            className="px-2 py-2 text-sm font-medium text-white uppercase border-2 rounded-[30px] lg:px-4 lg:text-base border-pink dark:text-third 3xl:text-2xl"
          >
            cerchi un partner?
          </Link>
          <DarkModeToggle />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
