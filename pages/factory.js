import Line from "@/components/Line";
import Paragraph from "@/components/Paragraph";
import Hero from "@/components/layout/Hero";
import React from "react";
import localFont from "next/font/local";

const myFont = localFont({ src: "../fonts/ClearfaceStd-Bold.woff" });
const myFont2 = localFont({ src: "../fonts/Raleway-Regular.ttf" });
import { TbRectangleVerticalFilled } from "react-icons/tb";

const paragraph =
  "Aenean pulvinar fringilla elementum. Pellentesque mollis ipsum id libero posuere feugiat. Donec eget arcu sit amet nulla luctus venenatis a sit amet lectus. Maecenas justo massa, venenatis eu aliquam vel, molestie sit amet nulla.";

const Factory = () => {
  return (
    <>
      <Hero>
        {" "}
        <h1
          className={`${myFont.className} text-[60px] leading-[75px] md:text-[90px] md:leading-[100px] md:w-[100%]  text-white dark:text-third md:text-center lg:w-[70%] mx-auto  2xl:text-[100px] 2xl:leading-[120px] 2xla:text-[120px] 2xla:leading-[130px]`}
        >
          Lorem ipsum dolor sit amet, consecter.
        </h1>
        <div className="lg:w-[65%] mx-auto">
          <p
            className={`${myFont2.className} font-normal text-[20px] md:text-[30px]  text-white dark:text-third md:text-center  2xl:text-[30px]`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            malesuada felis et sem placerat consectetur at at nulla. 
          </p>
        </div>
      </Hero>
      <div className="w-full bg-[#161617] dark:bg-[#D9D9D9] text-white h-auto py-10 flex flex-col gap-y-20">
        <div className="w-[90%] mx-auto">
          <Line />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto ">
          <div></div>
          <Paragraph paragraph={paragraph} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto gap-y-6">
          <div>
            <h2
              className={`${myFont.className} text-[22px] dark:text-third text-white uppercase flex items-center gap-1`}
            >
              <TbRectangleVerticalFilled className="text-pink" /> Values
            </h2>
          </div>
          <Paragraph paragraph={paragraph} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto gap-y-6">
          <div>
            {" "}
            <h2
              className={`${myFont.className} text-[22px] dark:text-third text-white uppercase flex items-center gap-1`}
            >
              <TbRectangleVerticalFilled className="text-second" /> Green
              Passion
            </h2>
          </div>
          <Paragraph paragraph={paragraph} />
        </div>
        <div className="w-[90%] mx-auto">
          <Line />
        </div>
      </div>
      <div className="w-[90%] mt-8 mx-auto flex flex-col gap-6 py-14">
        <h2
          className={`${myFont.className} text-white dark:text-third uppercase text-[25px]`}
        >
          Parlano di noi
        </h2>
        <div className="w-full h-full justify-start items-start gap-[67px] flex overflow-x-hidden">
          <div className="w-[425px] h-[565px] bg-[#D9D9D9]" />
          <div className="w-[425px] h-[565px] bg-[#D9D9D9]" />
          <div className="w-[425px] h-[565px] bg-[#D9D9D9]" />
          <div className="w-[425px] h-[565px] bg-[#D9D9D9]" />
        </div>
      </div>
    </>
  );
};

export default Factory;
