import React from "react";
import BlurryLights from "./BlurryLights";

const Hero = ({ children }) => {
  return (
    <div className="relative min-h-[100svh] lg:h-[92vh] my-10">
      <div className="flex flex-col lg:justify-center items-center absolute top-16 left-0 right-0 bottom-0 lg:inset-0 z-10 w-[90%] mx-auto gap-4">
        {children}
      </div>
      <BlurryLights />
    </div>
  );
};

export default Hero;
