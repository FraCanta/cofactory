import React, { forwardRef } from "react";
import BlurryLights from "./BlurryLights";

const Hero = forwardRef(({ children }, ref) => {
  return (
    <div ref={ref} className="relative ">
      <div className="absolute w-11/12 mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 justify-center items-center z-10 py-20">
        {children}
      </div>
      <BlurryLights />
    </div>
  );
});

export default Hero;
