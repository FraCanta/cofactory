import Image from "next/image";
import BlurryLights from "@/components/layout/BlurryLights";
import Icona from "@/public/assets/logo/per.svg";
import Line from "@/components/Line";
import VideoPlayer from "@/components/VideoPlayer";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../fonts/ClearfaceStd-Bold.woff" });
const myFont2 = localFont({ src: "../../fonts/Raleway-Regular.ttf" });
import casesIT from "../../public/locales/it/cases.json";
import casesEN from "../../public/locales/en/cases.json";
import { LuDot } from "react-icons/lu";
import { motion } from "framer-motion";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Icon } from "@iconify/react";
import Link from "next/link";
import SlidingCard from "@/components/SlidingCard/SlidingCard";
import VideoPlayer3 from "@/components/VideoPlayer3";
import ParallaxText from "@/components/ParallaxText";

const SingleCases = ({ work, previousWork, nextWork }) => {
  return (
    <>
      <Head>
        <title>{`${work.name}`}</title>
        <meta name="description" content={`${work.descrizione}`} />

        <meta
          property="og:url"
          content={`https://cofactory-eight.vercel.app/cases/${work.title}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${work.name}`} />
        <meta property="og:description" content={`${work.descrizione}`} />
        <meta
          property="og:image"
          content={`https://cofactory-eight.vercel.app${work.img}`}
        />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="relative flex items-center h-[75vh] lg:h-screen">
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full z-20"
          >
            <Image
              src={work.img}
              alt=""
              fill
              className="absolute top-0 left-0 object-cover !h-full z-20"
              priority
            />
          </motion.div>
          <BlurryLights />
        </div>

        <section
          className="my-[30px] md:my-[50px]  text-white grid grid-cols-1 lg:grid-cols-3 lg:justify-center  w-[90%] mx-auto gap-10 fxl:gap-12 min-h-[40vh] lg:min-h-full"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex flex-col gap-10 col-span-2">
            <div className="justify-between  flex flex-col">
              <h1
                className={`${myFont.className} dark:text-third text-white text-4xl md:text-6xl lg:text-4xl 2xl:text-[3.3rem] flex flex-wrap items-center gap-2 md:gap-4 2xl:gap-4`}
              >
                {work.brand1}
                <span className="relative w-5 h-5 md:w-10 md:h-8 lg:w-[35px] lg:h-[35px]">
                  <Image src={Icona} alt="" fill className="h-auto w-auto" />
                </span>

                {work.brand2}
              </h1>
            </div>
            <div className="justify-between items-center flex ">
              <p
                className={`${myFont2.className} dark:text-third text-white text-base md:text-xl lg:text-lg  2xl:text-xl  flex  gap-4 h-full`}
              >
                {work.descrizione}
              </p>
            </div>
          </div>
          <div className="z-10  grid grid-cols-1 gap-6">
            <div className=" flex flex-col space-y-1">
              <h2
                className={`${myFont2.className} text-second text-base md:text-[3.2vw] lg:text-[1.8vw] 2xl:text-lg font-normal lowercase `}
              >
                {work.partner}
              </h2>
              <h3
                className={`${myFont2.className} dark:text-third text-white text-base font-normal uppercase `}
              >
                {work.year}
              </h3>
            </div>

            <div className="h-full justify-between items-start flex flex-col ">
              <div
                className={`${myFont2.className}  flex flex-wrap  gap-2 dark:text-third text-white  text-sm md:text-base lg:text-sm uppercase`}
              >
                <ul className="flex flex-wrap items-center ">
                  {work.list.map((el, i) => {
                    return (
                      <div key={i}>
                        <li className="flex">
                          {el.name} {i !== work.list.length - 1 && <LuDot />}
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#161617] dark:bg-[#D9D9D9] min-h-screen flex flex-col  items-center py-[50px] ">
          <div className="w-[90%] mx-auto flex flex-col gap-6">
            {work.row0 ? (
              <div data-aos="fade-up" data-aos-delay="100">
                <VideoPlayer
                  video={work.row0.video0}
                  poster={work.row0.poster}
                  id="#videoplayer2"
                />
                <div
                  className="text-center font-medium leading-10 py-8 lg:py-14 flex flex-col gap-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <p
                    className={`${myFont2.className} dark:text-third text-white/80 text-base md:text-[3vw] lg:text-xl lg:w-[75%] mx-auto flex leading-normal  gap-4 h-full`}
                  >
                    {work.row0.paragrafo}
                  </p>
                </div>
              </div>
            ) : null}
            {work.row0bis ? (
              <div
                className="relative w-full aspect-video lg:h-[80vh]"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image
                  src={work.row0bis.img}
                  alt=""
                  fill
                  className=" object-cover rounded-lg"
                />
              </div>
            ) : null}
            {work.row1 ? (
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="relative aspect-square">
                  <Image
                    src={work.row1.img1}
                    alt=""
                    fill
                    className=" object-cover rounded-lg"
                  />
                </div>
                {work.row1.img2 ? (
                  <div
                    className="relative h-full aspect-square"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <Image
                      src={work.row1.img2}
                      alt=""
                      fill
                      className="aspect-square object-cover rounded-lg"
                    />
                  </div>
                ) : (
                  <VideoPlayer3
                    video={work.row1.video}
                    className="h-full w-full object-cover  rounded-lg"
                  />
                )}
              </div>
            ) : null}
            {work.row1bis ? (
              <div data-aos="fade-up" data-aos-delay="100">
                <div
                  className="text-center font-medium leading-10 py-8 lg:py-14 flex flex-col gap-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <p
                    className={`${myFont2.className} dark:text-third text-white text-base md:text-xl lg:text-lg  2xl:text-xl lg:w-[75%] lg:mx-auto  flex  gap-4 h-full`}
                  >
                    {work.row1bis.paragrafo}
                  </p>
                </div>
                <div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center h-full justify-center relative"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <SlidingCard
                    slide1={work.row1bis.slide1}
                    slide2={work.row1bis.slide2}
                  />
                  <div className="h-[60vh] lg:h-full relative">
                    <Image
                      src={work.row1bis.bobble3}
                      alt=""
                      fill
                      className="object-cover rounded-lg h-full aspect-auto"
                    />
                  </div>{" "}
                </div>
              </div>
            ) : null}
            {work.row2 ? (
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {work.row2.title ? (
                  <h2
                    className={`${myFont.className} dark:text-third text-white text-6xl md:text-7xl  lg:text-8xl 2xl:text-9xl py-10 lg:py-0`}
                  >
                    {work.row2.title.primo}
                    <span className={`${myFont.className} text-[#d51d1f]`}>
                      {work.row2.title.span}
                    </span>{" "}
                    {work.row2.title.secondo}
                  </h2>
                ) : (
                  <div className="aspect-square w-full relative">
                    <Image
                      src={work.row2.img3}
                      alt=""
                      fill
                      className="h-full w-full object-cover  rounded-lg"
                    />
                  </div>
                )}

                {work.row2.video && work.row2.video2 ? (
                  <div className="w-full h-full">
                    <video
                      className="h-full w-full aspect-square rounded-lg"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={work.row2.video} type="video/mp4" />
                      <source src={work.row2.video2} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <VideoPlayer3 video={work.row2.video} />
                )}
              </div>
            ) : null}
            {work.limited ? (
              <div
                className="text-center font-medium leading-10 py-8 lg:py-14 flex flex-col gap-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2
                  className={`${myFont.className} dark:text-third text-white text-4xl lg:text-6xl py-10 lg:py-0`}
                >
                  {work.limited.primo}
                  <span className={`${myFont.className} text-[#d51d1f]`}>
                    {work.limited.due}
                  </span>{" "}
                </h2>
              </div>
            ) : null}
            {work.row3 ? (
              <>
                <div
                  className="aspect-square lg:h-screen fxl:h-[90vh] w-full relative"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <Image
                    src={work.row3.img4}
                    alt=""
                    fill
                    className="h-full w-full object-cover  rounded-lg"
                  />
                </div>
              </>
            ) : null}
            {work.row3bis ? (
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="relative aspect-square">
                  <Image
                    src={work.row3bis.img1}
                    alt=""
                    fill
                    className=" object-cover rounded-lg"
                  />
                </div>
                {work.row3bis.img2 ? (
                  <div className="relative h-full aspect-square">
                    <Image
                      src={work.row3bis.img2}
                      alt=""
                      fill
                      className="aspect-square object-cover rounded-lg"
                    />
                  </div>
                ) : (
                  <VideoPlayer video={work.row1.video2} />
                )}
              </div>
            ) : null}
            {work.row4 ? (
              <>
                <div
                  className="text-center font-medium leading-10 py-8 lg:py-14 flex flex-col gap-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h3
                    className={`${myFont.className} dark:text-third text-white text-[8.5vw] md:text-[6vw] lg:text-3xl `}
                  >
                    {work.row4.title}
                  </h3>
                  <p
                    className={`${myFont2.className} dark:text-third text-white/80 text-[5vw] md:text-[3vw] lg:text-xl lg:w-[60%] mx-auto flex leading-normal  gap-4 h-full`}
                  >
                    {work.row4.descrizione}
                  </p>
                </div>
              </>
            ) : null}
            {work.row5 ? (
              <div data-aos="fade-up" data-aos-delay="100">
                <VideoPlayer
                  video={work.row5.video}
                  poster={work.row5.poster}
                  id="#videoplayer"
                />
              </div>
            ) : null}
            {work.row5bis ? (
              <div
                className=" w-full h-full"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <video
                  id="videoPlayer"
                  className="rounded-lg h-[40vh] lg:h-[80vh] w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={work.row5bis.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : null}
            {work.row6 ? (
              <div
                className=" w-full h-[20vh] lg:h-[60vh]"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <video
                  className="w-full h-full rounded-lg  object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={work.row6.video} type="video/mp4" />
                  <source src={work.row6.video2} type="video/m4v" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : null}
            {work.row6bis ? (
              <div
                className="aspect-square lg:h-screen w-auto relative "
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image
                  src={work.row6bis.img3}
                  alt=""
                  fill
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            ) : null}

            {work.row8 ? (
              <div data-aos="fade-up" data-aos-delay="100">
                <div className=" w-full h-full">
                  <video
                    id="videoPlayer"
                    className="rounded-lg  w-full object-cover lg:object-contain lg:aspect-video lg:w-[50%] mx-auto"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={work.row8.video3} type="video/mp4" />
                    <source src={work.row8.video4} type="video/mv4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div
                  className="text-center font-medium leading-10 py-8 md:py-14 flex flex-col gap-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h3
                    className={`${myFont.className} dark:text-third text-white text-2xl md:text-5xl lg:text-4xl `}
                  >
                    {work.row8.title}
                  </h3>
                  <p
                    className={`${myFont2.className} dark:text-third text-white/80 text-base md:text-xl lg:text-xl lg:w-[75%] mx-auto `}
                  >
                    {work.row8.descrizione}
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div
                    className="relative aspect-square"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <Image
                      src={work.row8.img}
                      alt=""
                      fill
                      className=" object-cover rounded-lg"
                    />
                  </div>
                  <div
                    className=" w-full h-full"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <video
                      id="videoPlayer"
                      className="rounded-lg  w-full object-cover  aspect-square"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={work.row8.video} type="video/webm" />
                      <source src={work.row8.video2} type="video/m4v" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            ) : null}

            {work.row7 ? (
              <div className="w-full" data-aos="fade-up" data-aos-delay="100">
                {work.row7.paragrafo && (
                  <div className="text-center font-medium leading-10 py-8 md:py-20 flex flex-col gap-6">
                    {work.row7.paragrafo.map((el, i) => {
                      return (
                        <p
                          key={i}
                          dangerouslySetInnerHTML={{ __html: el.p }}
                          className={`${myFont2.className} dark:text-third text-white/80 text-base md:text-xl lg:text-xl lg:w-[75%] mx-auto `}
                        ></p>
                      );
                    })}
                  </div>
                )}
                {work.row7.carousel ? (
                  <>
                    <Swiper
                      slidesPerView={3}
                      spaceBetween={0}
                      modules={[Navigation]}
                      navigation={{
                        prevEl: ".prev",
                        nextEl: ".next",
                      }}
                      loop={true}
                      loopfillgroupwithblank={{
                        enabled: true,
                        loopedSlides: 1,
                      }}
                      breakpoints={{
                        // when window width is >= 1px
                        1: {
                          slidesPerView: 1,
                          spaceBetween: 30,
                          slidesPerGroup: 1,
                        },
                        // when window width is >= 768px
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 30,
                          slidesPerGroup: 2,
                        },
                        // when window width is >= 990px
                        990: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                          slidesPerGroup: 3,
                        },
                        1200: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                          slidesPerGroup: 3,
                        },
                      }}
                    >
                      {work.row7.carousel.map((c, i) => {
                        return (
                          <SwiperSlide key={i}>
                            <div className="aspect-square relative">
                              <Image
                                src={c.img}
                                fill
                                className="w-full h-full object-cover "
                              />
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                    <div className="arrow">
                      <div className="prev">
                        <Icon
                          icon="bi:arrow-left-circle-fill"
                          color="white"
                          width="40"
                        />
                      </div>
                      <div className="next">
                        <Icon
                          icon="bi:arrow-right-circle-fill"
                          color="white"
                          width="40"
                        />
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            ) : null}

            {work.row7bis ? (
              <div
                className=" w-full h-full"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {work.row7bis.paragrafo && (
                  <div
                    className="text-center font-medium leading-10 mb-4 md:my-20 flex flex-col "
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <p
                      className={`${myFont2.className} dark:text-third text-white/80 text-base md:text-xl lg:text-xl lg:w-[75%] mx-auto `}
                    >
                      {work.row7bis.paragrafo}
                    </p>
                  </div>
                )}

                <video
                  id="videoPlayer"
                  className="rounded-lg h-[40vh] lg:h-[80vh] w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={work.row7bis.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : null}
            {work.row8bis ? (
              <div data-aos="fade-up" data-aos-delay="100">
                <div className=" w-full h-full">
                  <video
                    id="videoPlayer"
                    className="rounded-lg  w-full object-cover  lg:aspect-video  mx-auto"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={work.row8bis.video3} type="video/mp4" />
                    <source src={work.row8bis.video4} type="video/mv4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div
                  className="text-center font-medium leading-10 py-8 lg:py-20 flex flex-col gap-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h2
                    className={`${myFont.className} dark:text-third text-white text-4xl lg:text-5xl py-10 md:py-6 lg:py-0`}
                  >
                    {work.row8bis.title.uno}
                    <span className={`${myFont.className} text-[#96be25]`}>
                      {work.row8bis.title.due}
                    </span>{" "}
                    <span className={`${myFont.className} text-white`}>
                      {work.row8bis.title.tre}
                    </span>{" "}
                  </h2>
                  <div className="flex flex-col gap-4">
                    <p
                      className={`${myFont2.className} dark:text-third text-white/80 text-base md:text-xl lg:text-xl lg:w-[65%] mx-auto `}
                    >
                      {work.row8bis.descrizione}
                    </p>
                    <p
                      className={`${myFont2.className} dark:text-third text-white/80 text-base md:text-xl lg:text-xl lg:w-[65%] mx-auto `}
                    >
                      {work.row8bis.descrizione2}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div
                    className="relative aspect-square"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <Image
                      src={work.row8bis.img}
                      alt=""
                      fill
                      className=" object-cover rounded-lg"
                    />
                  </div>
                  <div
                    className=" w-full h-full"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <video
                      id="videoPlayer"
                      className="rounded-lg  w-full object-cover  aspect-square"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={work.row8bis.video}
                    >
                      <source src={work.row8bis.video} type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            ) : null}
            {work.row9 ? (
              <>
                <div
                  className="relative w-full aspect-video lg:h-screen"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <Image
                    src={work.row9.img}
                    alt=""
                    fill
                    className=" object-cover rounded-lg"
                  />
                </div>
                <div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="aspect-square">
                    <VideoPlayer3 video={work.row9.video} />
                  </div>
                  <div className="relative aspect-square">
                    <Image
                      src={work.row9.img1}
                      alt=""
                      fill
                      className=" object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div
                  className="text-center font-medium leading-10 mb-4 md:my-20 flex flex-col "
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <p
                    className={`${myFont2.className} dark:text-third text-white/80 text-base md:text-xl lg:text-xl lg:w-[75%] mx-auto `}
                  >
                    {work.row9.descrizione}
                  </p>
                </div>
                {work.row9.gallery.map((el, i) => {
                  return (
                    <div
                      className="relative w-full aspect-video lg:h-screen"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <Image
                        src={el.img}
                        alt=""
                        fill
                        className=" object-cover rounded-lg"
                      />
                    </div>
                  );
                })}
              </>
            ) : null}
          </div>
        </section>
        <div className="w-full mx-auto my-10 text-center text-white dark:text-third z-[9999999] overflow-x-hidden">
          {/* <Link href="/works" className={`${myFont.className} text-4xl `}>
            {" "}
            Tutte le storie
          </Link> */}
          <ParallaxText />
        </div>
        <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2  text-white text-2xl py-8 md:py-8 gap-6 ">
          {previousWork.titlePrev && (
            <Link href={`/stories/${previousWork.titlePrev}`} className="z-10">
              <div className="h-[20vh] lg:h-[40vh] w-full  z-10 relative ">
                <Image
                  src={previousWork.imgPrev}
                  fill
                  alt=""
                  className="h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all opacity-30 hover:opacity-100"
                />{" "}
                <div className="absolute top-1/2 right-1/2 translate-x-1/2 traslate-y-1/2 flex justify-center items-center gap-2 text-white dark:text-third">
                  <p> PREV</p>
                  <Image
                    src="/assets/logo/per2.svg"
                    alt=""
                    width={10}
                    height={10}
                  />
                </div>
              </div>
            </Link>
          )}

          {nextWork.titleNext && (
            <Link href={`/stories/${nextWork.titleNext}`} className="z-10">
              <div className="h-[20vh] lg:h-[40vh] w-full  z-10 relative ">
                <Image
                  src={nextWork.imgNext}
                  fill
                  alt=""
                  className="h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100 "
                />

                <div className="absolute top-1/2 right-1/2 translate-x-1/2 traslate-y-1/2  w-full flex justify-center items-center gap-2 text-white dark:text-third">
                  <Image
                    src="/assets/logo/per1.svg"
                    alt=""
                    width={10}
                    height={10}
                  />
                  <p> NEXT</p>
                </div>
              </div>
            </Link>
          )}
        </div>

        <div className="w-[90%] mx-auto md:py-20">
          <Line />
        </div>
      </motion.div>
    </>
  );
};

export default SingleCases;

export async function getStaticProps(context) {
  const { params, locale } = context;
  let obj;

  switch (locale) {
    case "it":
      obj = casesIT;
      break;

    case "en":
      obj = casesEN;
      break;

    default:
      obj = casesIT;
      break;
  }
  let targetObj = obj?.works?.singleCase?.[params?.title];

  const arr = Object.keys(obj?.works?.singleCase).map((el) => {
    return {
      title: el,
      img: obj?.works?.singleCase?.[el]?.img,
    };
  });

  const currentIndex = arr.findIndex((el) => el.title === params.title);
  const totalCases = arr.length;

  // Logica per determinare il caso precedente
  let prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    // Se siamo nel primo caso, torniamo all'ultimo
    prevIndex = totalCases - 1;
  }

  // Logica per determinare il caso successivo
  let nextIndex = currentIndex + 1;
  if (nextIndex >= totalCases) {
    // Se siamo nell'ultimo caso, torniamo al primo
    nextIndex = 0;
  }

  const previousWork = {
    titlePrev: arr[prevIndex].title,
    imgPrev: arr[prevIndex].img,
  };

  const nextWork = {
    titleNext: arr[nextIndex].title,
    imgNext: arr[nextIndex].img,
  };

  return {
    props: {
      work: targetObj,
      previousWork,
      nextWork,
    },
  };
}

export async function getStaticPaths({ locale }) {
  let obj;

  switch (locale) {
    case "it":
      obj = casesIT;
      break;
    case "en":
      obj = casesEN;
      break;
    default:
      obj = casesIT;
      break;
  }

  const work = Object.keys(obj?.works?.singleCase);
  const pathEn = work?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "en",
    };
  });
  const pathIt = work?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "it",
    };
  });
  const paths = pathIt.concat(pathEn);
  return {
    paths,
    fallback: false,
  };
}
