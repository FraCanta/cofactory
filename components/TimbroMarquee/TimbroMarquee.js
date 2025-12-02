import React from "react";
import CofactoryButton from "../layout/CofactoryButton/CofactoryButton";

function TimbroMarquee({ onClick }) {
  return (
    <div className="relative flex items-center w-full overflow-hidden">
      <button
        onClick={onClick}
        className="relative z-20 w-32 h-32 cursor-pointer lg:w-32 lg:h-32 2xl:w-[12rem] 2xl:h-[12rem] aspect-square animate-spin"
        style={{ marginLeft: "auto" }}
      >
        <CofactoryButton />
      </button>
    </div>
  );
}

export default TimbroMarquee;
