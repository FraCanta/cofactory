import React, { forwardRef } from "react";
import BlurryLights from "./BlurryLights";

const Hero = forwardRef(({ children }, ref) => {
  return (
    <div className="h-screen relative">
      <div className="flex flex-col justify-center items-center absolute inset-0 z-50 w-[90%] mx-auto gap-4">
        {" "}
        {children}
      </div>
      <BlurryLights />
    </div>
  );
});

export default Hero;
