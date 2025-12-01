import React from "react";
import BlurryLights from "./BlurryLights"; // Se hai bisogno degli effetti luminosi

const Hero = ({ children }) => {
  return (
    <div className="relative h-[90svh] lg:h-[100vh] w-full fxl:mb-20" id="hero">
      <div className="flex flex-col lg:justify-center items-center absolute top-16 left-0 right-0 bottom-0 lg:inset-0 z-20 w-[90%] mx-auto mt-10 lg:mt-0">
        {children}
      </div>
      <BlurryLights /> {/* Effetti luminosi che restano sotto */}
    </div>
  );
};

export default Hero;
