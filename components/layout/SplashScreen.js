import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();

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
        transition: { delay: 0.5, duration: 2, type: "spring" },
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
          transition={{ duration: 3 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#1b1b1c",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
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
              className="w-[350px] lg:w-[600px]"
            />

            {/* Payoff */}
            <motion.p
              style={{ color: "#fff" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 2 }}
              className="text-xl sm:text-2xl lg:text-3xl flex items-end justify-center"
            >
              Agenzia creativa di incontri{" "}
              <motion.span animate={controls} className="inline-block mx-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#368b90"
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                  />
                </svg>
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