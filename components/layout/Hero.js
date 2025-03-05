import React from "react";
import BlurryLights from "./BlurryLights";

const Hero = ({ children }) => {
  return (
    <div className="relative h-[90vh] lg:h-[70vh] my-10">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center absolute inset-0 z-10 w-[90%] mx-auto gap-4">
        {children}
      </div>
      <BlurryLights />
    </div>
  );
};

export default Hero;
