import React from "react";
import BlurryLights from "./BlurryLights";

const Hero = ({ children }) => {
  return (
    <div className="relative h-screen">
      <div className="flex flex-col justify-center items-center absolute inset-0 z-10 w-[90%] mx-auto gap-4">
        {children}
      </div>
      <BlurryLights />
    </div>
  );
};

export default Hero;
