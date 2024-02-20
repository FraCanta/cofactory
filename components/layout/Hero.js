import React from "react";
import BlurryLights from "./BlurryLights";

const Hero = ({ children }) => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[6] flex h-[calc(90vh_-_300px)] w-[90%] flex-col mx-auto items-center justify-center gap-6">
        {children}
      </div>
      <BlurryLights />
    </>
  );
};

export default Hero;
