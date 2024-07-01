import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const imagePaths = [
  "/assets/logos/AMERICANUNCLE_lovers_grey2.png",
  "/assets/logos/BOBBLEBOBBLE_lovers_grey2.png",
  "/assets/logos/CARPISA_lovers_grey2.png",
  "/assets/logos/CASAVO_lovers_grey2.png",
  "/assets/logos/CITRUS_lovers_grey2.png",
  "/assets/logos/COMIECO_lovers_grey2.png",
  "/assets/logos/EAGLE_lovers_grey2.png",
  "/assets/logos/EATHAPPY_lovers_grey2.png",
  "/assets/logos/FAOSCHWARZ_lovers_grey2.png",
  "/assets/logos/GARDALAND_lovers_grey2.png",
  "/assets/logos/HEALTHYCOLORS_lovers_grey2.png",
  "/assets/logos/ILOVERICCIO_lovers_grey2.png",
  "/assets/logos/KOCHMEDIA_lovers_grey2.png",
  "/assets/logos/LAYOGURTERIA_lovers_grey2.png",
  "/assets/logos/MELANZI_lovers_grey2.png",
  "/assets/logos/MELINDA_lovers_grey2.png",
  "/assets/logos/MILKA_lovers_grey2.png",
  "/assets/logos/OROCIOK_lovers_grey2.png",
  "/assets/logos/PARAMOUNT_lovers_grey2.png",
  "/assets/logos/R5LIVING_lovers_grey2.png",
  "/assets/logos/ROCCOGIOCATTOLI_lovers_grey2.png",
  "/assets/logos/ROSSOPOMODORO_lovers_grey2.png",
  "/assets/logos/SEVI_lovers_grey2.png",
  "/assets/logos/SOLOAFFITTI_lovers_grey2.png",
  "/assets/logos/SONY_lovers_grey2.png",
  "/assets/logos/SOPHIALOREN_lovers_grey2.png",
  "/assets/logos/TOCTOC_lovers_grey2.png",
  "/assets/logos/TOYS_lovers_grey2.png",
  "/assets/logos/TRECCANI_lovers_grey2.png",
  "/assets/logos/TRIPPO_lovers_grey.png",
  "/assets/logos/WAKAME_lovers_grey2.png",
  "/assets/logos/WARNER_lovers_grey2.png",
  "/assets/logos/YAMAMAY_lovers_grey2.png",
  "/assets/logos/YUMMERS_lovers_grey2.png",
  "/assets/logos/AMERICANUNCLE_lovers_grey2.png",
  "/assets/logos/BOBBLEBOBBLE_lovers_grey2.png",
  "/assets/logos/CARPISA_lovers_grey2.png",
  "/assets/logos/CASAVO_lovers_grey2.png",
  "/assets/logos/CITRUS_lovers_grey2.png",
  "/assets/logos/COMIECO_lovers_grey2.png",
  "/assets/logos/EAGLE_lovers_grey2.png",
  "/assets/logos/EATHAPPY_lovers_grey2.png",
  "/assets/logos/FAOSCHWARZ_lovers_grey2.png",
  "/assets/logos/GARDALAND_lovers_grey2.png",
  "/assets/logos/HEALTHYCOLORS_lovers_grey2.png",
  "/assets/logos/ILOVERICCIO_lovers_grey2.png",
  "/assets/logos/KOCHMEDIA_lovers_grey2.png",
  "/assets/logos/LAYOGURTERIA_lovers_grey2.png",
  "/assets/logos/MELANZI_lovers_grey2.png",
  "/assets/logos/MELINDA_lovers_grey2.png",
  "/assets/logos/MILKA_lovers_grey2.png",
  "/assets/logos/OROCIOK_lovers_grey2.png",
  "/assets/logos/PARAMOUNT_lovers_grey2.png",
  "/assets/logos/R5LIVING_lovers_grey2.png",
  "/assets/logos/ROCCOGIOCATTOLI_lovers_grey2.png",
  "/assets/logos/ROSSOPOMODORO_lovers_grey2.png",
  "/assets/logos/SEVI_lovers_grey2.png",
  "/assets/logos/SOLOAFFITTI_lovers_grey2.png",
  "/assets/logos/SONY_lovers_grey2.png",
  "/assets/logos/SOPHIALOREN_lovers_grey2.png",
  "/assets/logos/TOCTOC_lovers_grey2.png",
  "/assets/logos/TOYS_lovers_grey2.png",
  "/assets/logos/TRECCANI_lovers_grey2.png",
  "/assets/logos/TRIPPO_lovers_grey.png",
  "/assets/logos/WAKAME_lovers_grey2.png",
  "/assets/logos/WARNER_lovers_grey2.png",
  "/assets/logos/YAMAMAY_lovers_grey2.png",
  "/assets/logos/YUMMERS_lovers_grey2.png",
];

const MarqueeItem = ({ marqueeVisible }) => {
  const logosRef = useRef();
  const sliderLogo = useRef();
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    if (marqueeVisible) {
      xPercent = 0; // Reset xPercent quando il marquee diventa visibile
    }
    const animationFrame = requestAnimationFrame(animation);
    return () => cancelAnimationFrame(animationFrame);
  }, [marqueeVisible]);

  const animation = () => {
    if (logosRef.current) {
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }
      gsap.set(logosRef.current, {
        xPercent: xPercent,
      });
      xPercent += 0.025 * direction;
    }
    requestAnimationFrame(animation);
  };

  return (
    <div className="sliderContainer" ref={sliderLogo}>
      <div ref={logosRef} className="sliderItems2">
        {imagePaths.map((imagePath, index) => (
          <img
            key={index}
            src={imagePath}
            alt={`Image ${index + 1}`}
            className="inline-block mr-[50px] lg:mr-[100px] object-contain dark:contrast-50"
          />
        ))}
      </div>
    </div>
  );
};

export default MarqueeItem;
