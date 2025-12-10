import Image from "next/image";
import localFont from "next/font/local";
import { MaskText } from "../MaskText";
import { useState } from "react";
import ParallaxText from "../ParallaxText";

function BannerList({ translation, id }) {
  return (
    <div className="flex flex-col w-full" id={id}>
      {translation.cases.map((item, index) => (
        <HoverBanner key={index} item={item} />
      ))}
      <div className="z-50 w-full mx-auto overflow-hidden z bg-third dark:bg-white">
        <ParallaxText marqueeText={translation.marqueeLink} />
      </div>
    </div>
  );
}

function HoverBanner({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative z-50 w-full overflow-hidden lg:h-screen aspect-square lg:aspect-video group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* MEDIA */}
      {item.type === "video" ? (
        <video
          src={item.media}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <Image
          src={item.media}
          alt={item.name}
          fill
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
      )}

      {/* OVERLAY sempre presente */}
      <div
        className={`absolute inset-0 bg-third/50 transition-opacity duration-700 ${
          hovered ? "opacity-0" : "opacity-40"
        }`}
      />

      {/* SFONDO TESTO con blur visibile solo in hover */}
      <div
        className={`hidden absolute bottom-0 left-0 w-full lg:flex items-center p-6 lg:p-10 transition-all duration-700 h-[20vh] ${
          hovered
            ? "opacity-100 bg-[linear-gradient(359.99deg,rgba(0,0,0,0.9)_15%,rgba(0,0,0,0)_75%)]"
            : "opacity-0 backdrop-blur-none bg-transparent"
        }`}
      >
        <h2 className="flex items-center uppercase">
          <MaskText trigger={hovered}>
            <span
              className={`text-raleway font-regular  text-[0.85rem] lg:text-3xl text-white fxl:text-4xl 3xl:text-6xl`}
            >
              {item.brand1}
            </span>
          </MaskText>

          <span className="relative w-2 h-4 lg:h-8 lg:w-8 2xl:w-[2rem] 2xl:h-20 3xl:w-32 3xl:h-32 fxl:w-16 fxl:h-32">
            <Image
              src="/assets/cofactory_nuovaX_green.svg"
              fill
              className="object-cover"
              alt="logo"
            />
          </span>

          <MaskText trigger={hovered}>
            <span
              className={`text-raleway font-regular leading-none text-[0.85rem] lg:text-3xl text-white fxl:text-4xl 3xl:text-6xl`}
            >
              {item.brand2}
            </span>
          </MaskText>
        </h2>
      </div>
    </div>
  );
}

export default BannerList;
