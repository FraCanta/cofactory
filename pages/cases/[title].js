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
import VideoPlayer2 from "@/components/VideoPlayer2";
import VideoPlayer3 from "@/components/VideoPlayer3";

const SingleCases = ({ work, previousWork, nextWork }) => {
  return (
    <>
      <Head>
        <title>{`Cofactory - ${work.name}`}</title>
        <meta name="description" content={`${work.descrizione}`} />

        <meta
          property="og:url"
          content={`https://cofactory-eight.vercel.app/cases/${work.title}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Cofactory - ${work.name}`} />
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
          <Image
            src={work.img}
            alt=""
            fill
            className="absolute top-0 left-0 object-cover !h-full z-10"
            priority
          />
          <BlurryLights />
        </div>

        <section className="my-[30px] md:my-[50px]  text-white flex flex-col lg:flex-row lg:justify-center  w-[90%] mx-auto gap-10 fxl:gap-12">
          <div className=" grid grid-cols-1  gap-10">
            <div className="justify-between  flex flex-col">
              <h1
                className={`${myFont.className} dark:text-third text-white text-4xl md:text-6xl lg:text-4xl 2xl:text-[3.3rem] flex flex-wrap items-center gap-2 lg:gap-4 2xl:gap-4`}
              >
                {work.brand1}
                <span className="relative w-5 h-5 md:w-10 md:h-10 lg:w-[35px] lg:h-[35px]">
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
          <div className="z-10 w-full lg:w-[90%] mx-auto grid grid-cols-1  ">
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
                <ul className="flex flex-wrap items-center">
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
          <div className="w-[90%] mx-auto flex flex-col gap-y-6">
            {work.row0 ? (
              <>
                <VideoPlayer
                  video={work.row0.video0}
                  poster={work.row0.poster}
                  id="#videoplayer2"
                />
                <div className="text-center font-medium leading-10 py-8 lg:py-14 flex flex-col gap-6">
                  <p
                    className={`${myFont2.className} dark:text-third text-white/80 text-base md:text-[3vw] lg:text-xl lg:w-[75%] mx-auto flex leading-normal  gap-4 h-full`}
                  >
                    {work.row0.paragrafo}
                  </p>
                </div>
              </>
            ) : null}
            {work.row1 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="relative aspect-square">
                  <Image
                    src={work.row1.img1}
                    alt=""
                    fill
                    className=" object-cover rounded-[15px]"
                  />
                </div>
                {work.row1.img2 ? (
                  <div className="relative h-full aspect-square">
                    <Image
                      src={work.row1.img2}
                      alt=""
                      fill
                      className="aspect-square object-cover rounded-[15px]"
                    />
                  </div>
                ) : (
                  <VideoPlayer3
                    video={work.row1.video}
                    className="h-full w-full object-cover  rounded-[15px]"
                  />
                )}
              </div>
            ) : null}
            {work.row1bis ? (
              <>
                <div className="text-center font-medium leading-10 py-8 lg:py-14 flex flex-col gap-6">
                  <p
                    className={`${myFont2.className} dark:text-third text-white text-base md:text-xl lg:text-lg  2xl:text-xl lg:w-[75%] lg:mx-auto  flex  gap-4 h-full`}
                  >
                    {work.row1bis.paragrafo}
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center h-full justify-center relative">
                  <SlidingCard
                    slide1={work.row1bis.slide1}
                    slide2={work.row1bis.slide2}
                  />
                  <div className="h-[60vh] lg:h-full relative">
                    <Image
                      src={work.row1bis.bobble3}
                      alt=""
                      fill
                      className="object-cover rounded-[15px] h-full aspect-auto"
                    />
                  </div>{" "}
                </div>
              </>
            ) : null}

            {work.row2 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <h2
                  className={`${myFont.className} dark:text-third text-white text-6xl lg:text-9xl py-10 lg:py-0`}
                >
                  {work.row2.title.primo}
                  <span className={`${myFont.className} text-[#d51d1f]`}>
                    {work.row2.title.span}
                  </span>{" "}
                  {work.row2.title.secondo}
                </h2>
                <div className="w-full h-full aspect-square">
                  <video
                    id="videoPlayer"
                    className="h-full w-full aspect-square rounded-[15px]"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={work.row2.img3} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ) : null}

            {work.row3 ? (
              <>
                {work.row3.titolo && (
                  <div className="text-center font-medium leading-10 py-8 lg:py-14 flex flex-col gap-6">
                    <h2
                      className={`${myFont.className} dark:text-third text-white text-4xl lg:text-6xl py-10 lg:py-0`}
                    >
                      {work.row3.titolo.primo}
                      <span className={`${myFont.className} text-[#d51d1f]`}>
                        {work.row3.titolo.due}
                      </span>{" "}
                    </h2>
                  </div>
                )}

                <div className="aspect-square lg:h-screen fxl:h-[90vh] w-auto relative">
                  <Image
                    src={work.row3.img4}
                    alt=""
                    fill
                    className="h-full w-full object-cover  rounded-[15px]"
                  />
                </div>
              </>
            ) : null}
            {work.row3bis ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="relative aspect-square">
                  <Image
                    src={work.row3bis.img1}
                    alt=""
                    fill
                    className=" object-cover rounded-[15px]"
                  />
                </div>
                {work.row3bis.img2 ? (
                  <div className="relative h-full aspect-square">
                    <Image
                      src={work.row3bis.img2}
                      alt=""
                      fill
                      className="aspect-square object-cover rounded-[15px]"
                    />
                  </div>
                ) : (
                  <VideoPlayer video={work.row1.video2} />
                )}
              </div>
            ) : null}
            {work.row4 ? (
              <div className="text-center font-medium leading-10 py-8 lg:py-14 flex flex-col gap-6">
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
            ) : null}
            {work.row5 ? (
              <VideoPlayer
                video={work.row5.video}
                poster={work.row5.poster}
                id="#videoplayer"
              />
            ) : null}
            {work.row5bis ? (
              <div className=" w-full h-full">
                <video
                  id="videoPlayer"
                  className="rounded-[15px] h-[40vh] lg:h-[80vh] w-full object-cover"
                  autoPlay
                  loop
                  muted
                >
                  <source src={work.row5bis.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : null}

            {work.row6 ? (
              <div className=" w-full h-[20vh] lg:h-[60vh]">
                <video
                  className="w-full h-full rounded-lg  object-cover"
                  autoPlay
                  loop
                  muted
                >
                  <source src={work.row6.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : null}
            {work.row6bis ? (
              <div className="aspect-square lg:h-screen w-auto relative ">
                <Image
                  src={work.row6bis.img3}
                  alt=""
                  fill
                  className="h-full w-full object-cover rounded-[15px]"
                />
              </div>
            ) : null}
            {work.row8 ? (
              <>
                <div className=" w-full h-full">
                  <video
                    id="videoPlayer"
                    className="rounded-[15px]  w-full object-cover lg:object-contain lg:aspect-video lg:w-[50%] mx-auto"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={work.row8.video3} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="text-center font-medium leading-10 py-8 lg:py-14 flex flex-col gap-6">
                  <h3
                    className={`${myFont.className} dark:text-third text-white text-2xl md:text-[6vw] lg:text-4xl `}
                  >
                    {work.row8.title}
                  </h3>
                  <p
                    className={`${myFont2.className} dark:text-third text-white/80 text-base md:text-xl lg:text-xl lg:w-[60%] mx-auto flex  gap-4 h-full`}
                  >
                    {work.row8.descrizione}
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="relative aspect-square">
                    <Image
                      src={work.row8.img}
                      alt=""
                      fill
                      className=" object-cover rounded-[15px]"
                    />
                  </div>
                  <div className=" w-full h-full">
                    <video
                      id="videoPlayer"
                      className="rounded-[15px]  w-full object-cover  aspect-square"
                      autoPlay
                      loop
                      muted
                    >
                      <source src={work.row8.video} type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </>
            ) : null}
            {work.row7 ? (
              <div className="w-full">
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
                      spaceBetween: 30,
                      slidesPerGroup: 3,
                    },
                  }}
                >
                  {work.row7.carousel.map((c, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <div // Usa motion.div anziché div
                          className="aspect-square relative"
                        >
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
              </div>
            ) : null}
          </div>
        </section>
        <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2  text-white text-2xl py-8 md:py-20 gap-6">
          {previousWork.titlePrev && (
            <Link href={`/cases/${previousWork.titlePrev}`} className="z-10">
              <div className=" h-full w-full  z-10 relative aspect-video">
                <Image
                  src={previousWork.imgPrev}
                  fill
                  alt=""
                  className="h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all opacity-30 hover:opacity-100"
                />{" "}
                <div className="absolute inset-0 h-full w-full flex justify-center items-center gap-2">
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
            <Link href={`/cases/${nextWork.titleNext}`} className="z-10">
              <div className="h-full w-full  z-10 relative aspect-video">
                <Image
                  src={nextWork.imgNext}
                  fill
                  alt=""
                  className="h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all opacity-30 hover:opacity-100"
                />
                <div className="absolute inset-0 h-full w-full flex justify-center items-center gap-2">
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
        <div className="w-[90%] mx-auto md:py-10">
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
  const previousWork = {
    titlePrev: currentIndex > 0 ? arr[currentIndex - 1].title : null,
    imgPrev: currentIndex > 0 ? arr[currentIndex - 1].img : null,
  };
  const nextWork = {
    titleNext:
      currentIndex >= 0 && currentIndex < arr.length - 1
        ? arr[currentIndex + 1].title
        : null,
    imgNext:
      currentIndex >= 0 && currentIndex < arr.length - 1
        ? arr[currentIndex + 1].img
        : null,
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
