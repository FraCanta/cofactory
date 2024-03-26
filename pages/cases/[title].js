import Hero from "@/components/layout/Hero";
import Image from "next/image";
import React from "react";
import CasoImg from "@/public/assets/cases/cover_milka.png";
import BlurryLights from "@/components/layout/BlurryLights";
import Icona from "@/public/assets/logo/per.svg";
import Tablet from "@/public/assets/cases/milka1.jpg";
import Grid1 from "@/public/assets/cases/milka2.jpg";
import Grid2 from "@/public/assets/cases/milka3.jpg";
import Grid3 from "@/public/assets/cases/tour_1.jpg";
import Grid4 from "@/public/assets/cases/tour_3.jpg";
import Grid5 from "@/public/assets/cases/milka4.jpg";
import Grid6 from "@/public/assets/cases/milka5.jpg";
import Pacchetti from "@/public/assets/cases/prova_valigette.png";
import Line from "@/components/Line";
import VideoPlayer from "@/components/VideoPlayer";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../fonts/ClearfaceStd-Bold.woff" });
const myFont2 = localFont({ src: "../../fonts/Raleway-Regular.ttf" });

const SingleCases = () => {
  return (
    <>
      <div className="relative flex items-center z-[8]">
        <Image
          src={CasoImg}
          alt=""
          fill
          className="absolute top-0 left-0 object-cover !h-[75vh] lg:!h-[100vh] "
        />
      </div>
      <BlurryLights />

      <section className="pb-[50px] lg:py-[200px] text-white flex flex-col lg:flex-row justify-between  w-[90%] mx-auto gap-32">
        <div className=" grid grid-cols-1  gap-4">
          <div className="justify-between  flex flex-col">
            <div
              className={`${myFont.className} dark:text-third text-white text-[10vw] lg:text-[5vw] leading-[83.41px] flex items-center gap-4`}
            >
              Milka
              <Image
                src={Icona}
                alt=""
                height={40}
                width={40}
                className="w-[8vw] md:w-[3vw]"
              />
              Toys Center{" "}
            </div>
          </div>
          <div className="justify-between items-center flex ">
            <p
              className={`${myFont2.className} dark:text-third text-white text-[5vw] md:text-[3vw] lg:text-[1.8vw] 2xl:text-[1.3vw] 2xl:leading-[2.5vw]  flex  gap-4 h-full`}
            >
              E’ un Natale tenerissimo quello che Toys Center ha regalato a
              tutti i suoi bimbi, invitati a partire per un viaggio pieno di
              sorprese! Il catalogo di Natale del più grande retail di
              giocattoli italiano, è stato consegnato infatti in una confezione
              davvero speciale: un box-valigetta con all’interno delle golosità
              Milka.
            </p>
          </div>
        </div>
        <div className="w-[90%] mx-auto grid grid-cols-1  gap-y-[30px]">
          <div className="h-full justify-between  flex flex-col gap-y-4">
            <h2
              className={`${myFont2.className} text-second text-[5vw] md:text-[3.2vw] lg:text-[1.8vw] 2xl:text-[1.2vw] font-normal lowercase leading-[24.91px]`}
            >
              partner nel
            </h2>
            <h3
              className={`${myFont2.className} dark:text-third text-white text-[21.84px] font-normal uppercase leading-[24.91px]`}
            >
              Natale 2023{" "}
            </h3>
          </div>

          <div className="h-full justify-between items-start flex flex-col gap-y-4">
            <ul
              className={`${myFont2.className} flex flex-wrap  gap-2 dark:text-third text-white  text-[5vw] md:text-[3vw] lg:text-[1vw]`}
            >
              <li>box valigetta</li>
              <li>spot tv</li>
              <li>concorso a premi</li>
              <li>landing page</li>
              <li>campagna digital</li>
              <li>vestizione apecar per il toys christmas tour</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-[#161617] dark:bg-[#D9D9D9] min-h-screen flex flex-col  items-center py-[50px] ">
        <div className="w-[90%] mx-auto flex flex-col gap-y-6">
          <div className="aspect-square lg:h-screen fxl:h-[90vh] w-auto relative">
            <Image
              src={Tablet}
              alt=""
              className="h-full w-full object-cover object-bottom rounded-[15px]"
            />
          </div>
          <div className="text-center font-medium leading-10 py-8 lg:py-14 flex flex-col gap-6">
            <h3
              className={`${myFont.className} dark:text-third text-white text-[8.5vw] md:text-[6vw] lg:text-[2.5vw] `}
            >
              Quando i premi fanno gola a tutti!
            </h3>
            <p
              className={`${myFont2.className} dark:text-third text-white/80 text-[5vw] md:text-[3vw] lg:text-[1.5vw] lg:w-[60%] mx-auto flex leading-normal  gap-4 h-full`}
            >
              Un QR code presente in grafica ha dato a tutti i bambini la
              possibilità di partecipare ad un concorso con in palio una
              sorpresa ancora più tenera: una maxi box di snack e dolci dello
              storico marchio italiano di cioccolata.
            </p>
          </div>
          <VideoPlayer />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Image
              src={Grid1}
              alt=""
              className="aspect-square object-cover rounded-[15px]"
            />
            <Image
              src={Grid2}
              alt=""
              className="aspect-square object-cover rounded-[15px]"
            />
          </div>
          <div className="text-center   font-medium leading-10 py-14 flex flex-col gap-6">
            <h3
              className={`${myFont.className} dark:text-third text-white text-[8.5vw] md:text-[6vw] lg:text-[2.5vw] `}
            >
              {" "}
              Vestizione apecar e allestimento negozio
            </h3>
            <p
              className={`${myFont2.className} dark:text-third text-white/80 text-[5vw] md:text-[3vw] lg:text-[1.5vw] lg:w-[60%] mx-auto flex leading-normal  gap-4 h-full`}
            >
              Un QR code presente in grafica ha dato a tutti i bambini la
              possibilità di partecipare ad un concorso con in palio una
              sorpresa ancora più tenera: una maxi box di snack e dolci dello
              storico marchio italiano di cioccolata.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Image
              src={Grid3}
              alt=""
              className="aspect-square object-cover rounded-[15px]"
            />
            <Image
              src={Grid4}
              alt=""
              className="aspect-square object-cover rounded-[15px]"
            />
          </div>
          <div className="h-[30vh] lg:h-[40vh] w-auto relative ">
            <Image
              src={Pacchetti}
              alt=""
              className="h-full w-full object-cover rounded-[15px]"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Image
              src={Grid5}
              alt=""
              className="aspect-square object-cover rounded-[15px]"
            />
            <Image
              src={Grid6}
              alt=""
              className="aspect-square object-cover rounded-[15px]"
            />
          </div>
        </div>
      </section>
      <div className="w-[90%] mx-auto flex justify-center items-center py-8 md:py-20">
        <div
          className={`${myFont.className} dark:text-third text-white text-[9vw] lg:text-[4vw] leading-[83.41px] flex items-center gap-4`}
        >
          Citrus
          <Image
            src={Icona}
            alt=""
            height={40}
            width={40}
            className="w-[3vw]"
          />
          Fao Schwarz
        </div>
      </div>
      <div className="w-[90%] mx-auto md:py-10">
        <Line />
      </div>
    </>
  );
};

export default SingleCases;
