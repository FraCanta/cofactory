import React from "react";
import { useTheme } from "next-themes";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="z-[999]"
    >
      {theme === "light" ? (
        <RiSunLine width={30} className="text-white w-6 h-6" />
      ) : (
        <RiMoonLine width={30} className="dark:text-third w-6 h-6" />
      )}
    </button>
  );
};

export default DarkModeToggle;
