import React from "react";
import { useRouter } from "next/router";
import CofactoryButtonIt from "../layout/CofactoryButton/CofactoryButtonIt";
import CofactoryButtonEn from "../layout/CofactoryButton/CofactoryButtonEn";

function TimbroMarquee({ onClick }) {
  const router = useRouter();
  const lang = router.locale; // "en" o "it" direttamente dal router

  const CofactoryButtonComponent =
    lang === "en" ? CofactoryButtonEn : CofactoryButtonIt;

  return (
    <div className="relative flex items-center w-full overflow-hidden">
      <button
        onClick={onClick}
        className="relative z-20 w-32 h-32 md:w-40 md:h-40 lg:w-32 lg:h-32 xl:w-[12rem] xl:h-[12rem] aspect-square animate-spin"
        style={{ marginLeft: "auto" }}
      >
        <CofactoryButtonComponent />
      </button>
    </div>
  );
}

export default TimbroMarquee;
