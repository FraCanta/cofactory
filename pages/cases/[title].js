import Hero from "@/components/layout/Hero";
import Image from "next/image";
import React from "react";
import CasoImg from "@/public/assets/works/milka.png";
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

      <section className="pb-[50px] lg:py-[100px] text-white flex flex-col justify-center gap-y-[50px]">
        <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="justify-between items-center flex">
            <div className="dark:text-third text-white text-[9vw] lg:text-[4vw] font-['ITC Clearface Std'] leading-[83.41px] flex items-center gap-4">
              Milka
              <Image
                src={Icona}
                alt=""
                height={40}
                width={40}
                className="w-[3vw]"
              />
              Toys Center{" "}
            </div>
          </div>

          <div className="h-full justify-between items-start lg:items-end flex flex-col gap-y-4">
            <h2 className="text-second text-[21.84px] font-normal font-['Sneak'] lowercase leading-[24.91px]">
              si sono conosciuti nel
            </h2>
            <h3 className="dark:text-third text-white text-[21.84px] font-normal font-['Sneak'] uppercase leading-[24.91px]">
              Natale 2023{" "}
            </h3>
          </div>
        </div>
        <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-[30px]">
          <div className="justify-between items-center flex ">
            <p className="dark:text-third text-white text-[5vw] lg:text-[1.4vw] font-['ITC Clearface Std']  flex  gap-4 h-full ">
              E’ un Natale tenerissimo quello che Toys Center ha regalato a
              tutti i suoi bimbi, invitati a partire per un viaggio pieno di
              sorprese! Il catalogo di Natale del più grande retail di
              giocattoli italiano, è stato consegnato infatti in una confezione
              davvero speciale: un box-valigetta con all’interno delle golosità
              Milka.
            </p>
          </div>

          <div className="h-full justify-between items-start lg:items-end flex flex-col gap-y-6">
            <h2 className="text-second text-[21.84px] font-normal font-['Sneak'] lowercase leading-[24.91px]">
              si sono conosciuti nel
            </h2>
            <ul className="flex flex-col gap-1 dark:text-third text-white">
              <li>Box Valigetta</li>
              <li>Box Valigetta</li>
              <li>Box Valigetta</li>
              <li>Box Valigetta</li>
              <li>Box Valigetta</li>
              <li>Box Valigetta</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-[#161617] dark:bg-[#D9D9D9] min-h-screen flex flex-col  items-center py-[50px] ">
        <div className="w-[90%] mx-auto flex flex-col gap-y-6">
          <div className="h-[50vh] lg:h-[80vh] w-auto relative">
            <Image src={Tablet} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="text-center font-medium leading-10 py-8 lg:py-14 flex flex-col gap-6">
            <h3 className="dark:text-third text-white text-[40px]">
              Quando i premi fanno gola a tutti!
            </h3>
            <p className="dark:text-third text-white text-xl font-light lg:w-[60%] mx-auto">
              Un QR code presente in grafica ha dato a tutti i bambini la
              possibilità di partecipare ad un concorso con in palio una
              sorpresa ancora più tenera: una maxi box di snack e dolci dello
              storico marchio italiano di cioccolata.
            </p>
          </div>
          <VideoPlayer />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Image src={Grid1} alt="" className="aspect-square object-cover" />
            <Image src={Grid2} alt="" className="aspect-square object-cover" />
          </div>
          <div className="text-center   font-medium leading-10 py-14 flex flex-col gap-6">
            <h3 className="dark:text-third text-white text-[40px]">
              Quando i premi fanno gola a tutti!
            </h3>
            <p className="dark:text-third text-white text-xl font-light lg:w-[60%] mx-auto">
              Un QR code presente in grafica ha dato a tutti i bambini la
              possibilità di partecipare ad un concorso con in palio una
              sorpresa ancora più tenera: una maxi box di snack e dolci dello
              storico marchio italiano di cioccolata.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Image src={Grid3} alt="" className="aspect-square object-cover" />
            <Image src={Grid4} alt="" className="aspect-square object-cover" />
          </div>
          <div className="h-[30vh] lg:h-[40vh] w-auto relative">
            <Image
              src={Pacchetti}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Image src={Grid5} alt="" className="aspect-square object-cover" />
            <Image src={Grid6} alt="" className="aspect-square object-cover" />
          </div>
        </div>
      </section>
      <div className="w-[90%] mx-auto flex justify-center items-center py-20">
        <div className="dark:text-third text-white text-[9vw] lg:text-[4vw] font-['ITC Clearface Std'] leading-[83.41px] flex items-center gap-4">
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
      <div className="w-[90%] mx-auto py-10">
        <Line />
      </div>
    </>
  );
};

export default SingleCases;
