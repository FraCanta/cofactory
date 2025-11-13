import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "@/public/assets/logo/logo.svg";
import Image from "next/image";
import DarkModeToggle from "../DarkModeToggle";

const Navbar = ({ lang }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      // Controllo se la sezione pinnata è presente
      const pinnedSection = document.querySelector(".video-mask-section");
      const sectionBottom = pinnedSection?.getBoundingClientRect().bottom ?? 0;

      if (sectionBottom > 0) {
        // Siamo nella sezione pinnata → menu sempre visibile
        setIsVisible(true);
      } else {
        // Logica normale scroll up/down
        if (currentScrollTop > lastScrollTop) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        <Link href="/" className="z-[20]">
          <Image
            src={Logo}
            alt="logo"
            width={200}
            height={200}
            className="w-[110px] lg:w-[130px] 3xl:w-[200px]"
          />
        </Link>

        <div className="relative flex items-center gap-3 lg:gap-8">
          <Link
            href="/cerchi-un-partner"
            className="relative px-3 py-3 overflow-hidden text-xs font-medium text-white uppercase transition-all duration-300 border-2 dark:text-third sm:px-4 border-pink lg:px-5 lg:text-base 3xl:text-2xl group"
          >
            <span className="relative z-10">cerchi un partner?</span>
            <span className="absolute top-0 left-0 w-0 h-full transition-all duration-500 ease-out bg-pink group-hover:w-full"></span>
          </Link>

          <DarkModeToggle />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
