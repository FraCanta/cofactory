import Image from "next/image";
import localFont from "next/font/local";
import { MaskText } from "../MaskText";
import { useState } from "react";

const myFont2 = localFont({ src: "../../fonts/Raleway-Regular.ttf" });

function BannerList({ translation }) {
  return (
    <div className="flex flex-col w-full">
      {translation.cases.map((item, index) => (
        <HoverBanner key={index} item={item} myFont2={myFont2} />
      ))}
    </div>
  );
}

function HoverBanner({ item, myFont2 }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden cursor-pointer aspect-video group"
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
          className="object-cover object-top w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
      )}

      {/* Overlay SOLO in hover */}
      {hovered && (
        <div className="absolute inset-0 transition-opacity duration-500 opacity-100 bg-third/30" />
      )}

      {/* Testo MaskText visibile solo in hover */}
      <div
        className={`absolute inset-0 flex flex-col justify-end p-6 lg:p-10 transition-opacity duration-500 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="flex items-center space-x-2 uppercase">
          <MaskText trigger={hovered}>
            <span
              className={`${myFont2.className} leading-none text-sm lg:text-3xl text-white fxl:text-5xl 3xl:text-6xl`}
            >
              {item.brand1}
            </span>
          </MaskText>

          <span className="relative w-2 h-4 mx-2 lg:h-8 lg:w-8 2xl:w-[2.5rem] 2xl:h-20 3xl:w-32 3xl:h-32 fxl:w-24 fxl:h-24">
            <Image
              src="/assets/cofactory_nuovaX_green.svg"
              fill
              className="object-cover"
              alt="logo"
            />
          </span>

          <MaskText trigger={hovered}>
            <span
              className={`${myFont2.className} leading-none text-sm lg:text-3xl text-white fxl:text-5xl 3xl:text-6xl`}
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
