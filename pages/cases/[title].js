import Hero from "@/components/layout/Hero";
import Image from "next/image";
import React from "react";
import CasoImg from "@/public/assets/works/milka.png";
import BlurryLights from "@/components/layout/BlurryLights";
const SingleCases = () => {
  return (
    <>
      <div className="relative flex items-center z-[8]">
        <Image
          src={CasoImg}
          alt=""
          fill
          className="absolute top-0 left-0 object-cover !h-[75vh] md:!h-[90vh] object-center"
        />
      </div>
      <BlurryLights />

      <section className="h-screen text-white flex justify-center items-center">
        <h2>ciaone</h2>
      </section>
    </>
  );
};

export default SingleCases;
