import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Image from "next/image";
import { gsap } from "gsap";
const SplashScreen = () => {
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();
  useEffect(() => {
    const tl = gsap.timeline();

    // Animazione del testo e dell'immagine secondaria
    tl.fromTo(
      ".text-container",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 2, ease: "power2.out" }
    );

    // Animazione dell'immagine secondaria (new_logo_intro.svg)
    tl.fromTo(
      ".secondary-image",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" },
      "-=1.5" // Inizia 1.5 secondi prima della fine dell'animazione del testo
    );

    // Inizia con l'animazione del logo (ultimo)
    tl.to(".logo", {
      rotate: 45,
      scale: 6,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)",
      delay: 0.5,
    });

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    const sequenceAnimation = async () => {
      // Inizia con l'animazione della rotazione
      await controls.start({
        rotate: 45,
        transition: { duration: 0.4 },
      });

      // Dopo la rotazione, esegui l'animazione di ingrandimento
      await controls.start({
        scale: 600,
        transition: { delay: 0.5, duration: 1.5, type: "spring" },
      });
    };

    // Avvia la sequenza di animazioni dopo il caricamento
    setTimeout(() => {
      sequenceAnimation();
      setLoading(false);
    }, 3000); // Tempo di caricamento simulato in millisecondi (3 secondi)
  }, [controls]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            delay: 0.5,
            duration: 3,
            type: "easeInOut",
            staggerChildren: 0.5,
          }}
          className="dark:bg-white bg-third fixed flex inset-0 justify-center items-center"
        >
          {/* Logo e payoff */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 3, type: "easeInOut" }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Logo */}
            <motion.img
              src="/assets/logo/logo.svg"
              alt="Logo"
              className="w-[350px] md:w-[700px] lg:w-[600px]"
            />

            {/* Payoff */}
            <motion.p
              style={{ color: "#fff" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 2 }}
              className="text-xl md:text-4xl lg:text-4xl flex items-center justify-center"
            >
              Agenzia creativa di incontri{" "}
              <motion.span animate={controls} className="inline-flex mx-3">
                <Image
                  src="/assets/logo/new_logo_intro.svg"
                  width={20}
                  height={10}
                  className="w-6 h-6"
                />
              </motion.span>{" "}
              brand
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
