import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Logo from "@/public/assets/logo/logo.svg";
import Image from "next/image";
import DarkModeToggle from "../DarkModeToggle";
import CtaOutline from "./CtaOutline";
import { useRouter } from "next/router";

const Menu = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const { locale, pathname } = useRouter();

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
      className="fixed left-0 top-0 w-full z-[9999] ease-in duration-300 backdrop-blur-sm h-[70px] md:h-[95px]"
    >
      <div className="w-11/12 m-auto flex justify-between items-center py-10 text-white">
        <Link href="/" className="z-[20]">
          <Image
            src={Logo}
            alt="logo"
            width={200}
            height={200}
            className="w-[150px]"
          />
        </Link>

        <ul className="flex gap-10 items-center uppercase">
          <li>
            <Link
              href="/"
              className={` ${
                pathname === "/"
                  ? "font-bold transition-all ease-linear text-xl"
                  : "text-xl"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/factory"
              className={` ${
                pathname === "/factory"
                  ? "font-bold transition-all ease-linear text-xl"
                  : "text-xl"
              }`}
            >
              Factory
            </Link>
          </li>
          <li className="text-xl  cursor-pointer transition ">
            <Link href="/works"> Works</Link>
          </li>
          <li className="text-xl  cursor-pointer transition ">
            <CtaOutline link="/contatti"> Contact</CtaOutline>
          </li>
          <li>
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Menu;
