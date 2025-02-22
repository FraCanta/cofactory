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
  const [isOpen, setOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const router = useRouter();

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
      <div className="w-[90%] m-auto flex justify-between items-center text-white h-[70px] md:h-[100px]">
        <Link href="/" className="z-[20]" onClick={() => setOpen(false)}>
          <Image
            src={Logo}
            alt="logo"
            width={200}
            height={200}
            className="w-[130px]"
          />
        </Link>
        <div className="relative flex items-center gap-8">
          <DarkModeToggle />
          <div
            onClick={() => setOpen(!isOpen)}
            className="z-20 block duration-300 ease-in cursor-pointer"
          >
            <MenuButton
              isOpen={isOpen}
              onClick={() => setOpen(!isOpen)}
              strokeWidth="3"
              className="stroke-white dark:stroke-third toggle"
              transition={{ ease: "easeOut", duration: 0.2 }}
              width="30"
              height="15"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? "0%" : "-100%" }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="absolute top-0 bottom-0 left-0 right-0 flex w-full h-screen text-white lg:top-0 bg-third dark:bg-white dark:text-third"
        >
          <div className="w-[90%] mx-auto lg:mt-[95px] flex items-center justify-center">
            <ul
              className={`${myFont.className} grid grid-cols-1 lg:grid-cols-3 items-center w-full gap-8`}
            >
              <li
                className="flex flex-row items-center gap-2 lg:flex-col"
                onClick={() => setOpen(false)}
                onMouseEnter={() => setHoveredItem("/factory")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href="/factory"
                  className={`relative text-7xl md:text-9xl 2xl:text-[9rem] cursor-pointer transition max-w-max px-4 py-1 lg:px-6 lg:py-2 overflow-hidden ${
                    router.pathname === "/factory" || hoveredItem === "/factory"
                      ? "text-third"
                      : "text-white dark:text-third"
                  }`}
                >
                  factory
                  <motion.div
                    className={`absolute left-0 bottom-0 w-full h-full bg-second/40 z-[-1]`}
                    initial={{ width: "0%" }}
                    animate={{
                      width:
                        router.pathname === "/factory" ||
                        hoveredItem === "/factory"
                          ? "100%"
                          : "0%",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
                <motion.span
                  className="relative w-8 h-8 -rotate-90 lg:h-20 lg:w-20 lg:rotate-0"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity:
                      router.pathname === "/factory" ||
                      hoveredItem === "/factory"
                        ? 1
                        : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/assets/logo/frecciaSU.svg"
                    fill
                    alt="freccia in su"
                    className="object-contain w-full h-full contrast-50"
                  />
                </motion.span>
              </li>
              <li
                className="flex flex-row items-center gap-2 lg:flex-col"
                onClick={() => setOpen(false)}
                onMouseEnter={() => setHoveredItem("/stories")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href="/stories"
                  className={`relative text-7xl md:text-9xl 2xl:text-[9rem] cursor-pointer transition max-w-max px-4 py-1 lg:px-6 lg:py-2 overflow-hidden ${
                    router.pathname === "/stories" || hoveredItem === "/stories"
                      ? "text-second"
                      : "text-white dark:text-third"
                  }`}
                >
                  stories
                  <motion.div
                    className={`absolute left-0 bottom-0 w-full h-full bg-pink/40 z-[-1]`}
                    initial={{ width: "0%" }}
                    animate={{
                      width:
                        router.pathname === "/stories" ||
                        hoveredItem === "/stories"
                          ? "100%"
                          : "0%",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
                <motion.span
                  className="relative w-8 h-8 -rotate-90 lg:h-20 lg:w-20 lg:rotate-0"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity:
                      router.pathname === "/stories" ||
                      hoveredItem === "/stories"
                        ? 1
                        : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/assets/logo/frecciaSU.svg"
                    fill
                    className="object-contain w-full h-full contrast-50"
                  />
                </motion.span>
              </li>
              <li
                className="flex flex-row items-center gap-2 lg:flex-col"
                onClick={() => setOpen(false)}
                onMouseEnter={() => setHoveredItem("/affinity")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href="/affinity"
                  className={`relative text-7xl md:text-9xl 2xl:text-[9rem] cursor-pointer transition max-w-max px-4 py-1 lg:px-6 lg:py-2 overflow-hidden ${
                    router.pathname === "/affinity" ||
                    hoveredItem === "/affinity"
                      ? "text-pink/80"
                      : "text-white dark:text-third"
                  }`}
                >
                  affinity
                  <motion.div
                    className={`absolute left-0 bottom-0 w-full h-full bg-second/20 z-[-1]`}
                    initial={{ width: "0%" }}
                    animate={{
                      width:
                        router.pathname === "/affinity" ||
                        hoveredItem === "/affinity"
                          ? "100%"
                          : "0%",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
                <motion.span
                  className="relative w-8 h-8 -rotate-90 lg:h-20 lg:w-20 lg:rotate-0 "
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity:
                      router.pathname === "/affinity" ||
                      hoveredItem === "/affinity"
                        ? 1
                        : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/assets/logo/frecciaSU.svg"
                    fill
                    className="object-contain w-full h-full contrast-50"
                  />
                </motion.span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
