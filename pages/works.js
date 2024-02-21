import Line from "@/components/Line";
import Hero from "@/components/layout/Hero";
import React from "react";
import localFont from "next/font/local";
import { IoChevronDownOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const myFont = localFont({ src: "../fonts/ClearfaceStd-Bold.woff" });

const Works = () => {
  return (
    <main>
      <Hero>
        <h1
          className={`${myFont.className} text-[60px] leading-[75px] md:text-[90px] md:leading-[100px] md:w-[100%]  text-white dark:text-third md:text-center lg:w-[70%] mx-auto  2xl:text-[100px] 2xl:leading-[120px] 2xla:text-[120px] 2xla:leading-[130px]`}
        >
          Happy stories about happy clients.
        </h1>
      </Hero>
      <div className="w-[90%] mx-auto">
        <Line />
      </div>
      <div className="flex justify-between w-[90%] mx-auto">
        <div></div>
        <div className="w-[298px] h-[50px] px-[18px] py-2.5 rounded-[30px] border border-white justify-between items-center inline-flex">
          <div className="text-white text-xl font-normal font-['Poppins']">
            Tutti
          </div>
          <IoChevronDownOutline className="dark:text-third text-white" />
        </div>
      </div>
      <div className="flex flex-col gap-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  w-[90%] mx-auto ">
          <div className="relative aspect-square">
            <Link href="/cases/milka">
              <Image
                src="/assets/works/milka.png"
                alt=""
                fill
                className="object-cover rounded-[15px] "
              />
            </Link>
          </div>
          <div className="relative">
            {" "}
            <Image
              src="/assets/works/2.jpg"
              alt=""
              fill
              className="object-cover rounded-[15px] "
            />
          </div>
          <div className="relative">
            {" "}
            <Image
              src="/assets/works/bobble.png"
              alt=""
              fill
              className="object-cover rounded-[15px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  w-[90%] mx-auto ">
          <div className=" relative aspect-square">
            <Image
              src="/assets/works/3.jpg"
              alt=""
              fill
              className="object-cover rounded-[15px]"
            />
          </div>
          <div className="relative">
            {" "}
            <Image
              src="/assets/works/4.jpg"
              alt=""
              fill
              className="object-cover rounded-[15px] "
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6  w-[90%] mx-auto ">
          <div className="relative h-[80vh]">
            <Image
              src="/assets/works/9.jpg"
              alt=""
              fill
              className="object-cover rounded-[15px] "
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  w-[90%] mx-auto ">
          <div className="relative aspect-square">
            <Image
              src="/assets/works/6.jpg"
              alt=""
              fill
              className="object-cover rounded-[15px] "
            />
          </div>
          <div className="relative">
            {" "}
            <Image
              src="/assets/works/7.jpg"
              alt=""
              fill
              className="object-cover rounded-[15px] "
            />
          </div>
          <div className="relative">
            {" "}
            <Image
              src="/assets/works/8.jpg"
              alt=""
              fill
              className="object-cover rounded-[15px] "
            />
          </div>
        </div>
        <div className="w-[90%] mx-auto dark:text-third text-white flex justify-center py-10">
          Load more
        </div>
      </div>
    </main>
  );
};

export default Works;
