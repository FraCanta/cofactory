import Image from "next/image";
import React from "react";

const LavoriSec = () => {
  return (
    <div className="w-[90%] mx-auto grid grid-cols-1 gap-6 py-8">
      <div className="w-full aspect-square md:h-[70vh] relative">
        <Image
          src="/assets/works/milka.png"
          alt="Milka"
          fill
          className="object-cover rounded-lg "
        />
      </div>
      <div className="w-full aspect-square md:h-[70vh] relative">
        <Image
          src="/assets/works/citrus.png"
          alt="Milka"
          fill
          className="object-cover rounded-lg "
        />
      </div>{" "}
      <div className="w-full aspect-square md:h-[70vh] relative">
        <Image
          src="/assets/works/bobble.png"
          alt="Milka"
          fill
          className="object-cover rounded-lg "
        />
      </div>
    </div>
  );
};

export default LavoriSec;
