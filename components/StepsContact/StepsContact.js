import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Footer from "../layout/Footer";
import FloatingLogos from "../FloatingLogos/FloatingLogos";
import CtaOutline from "../layout/CtaOutline";
import Cta from "../Cta/Cta";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function StepsContact({ translation }) {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    goal1: [],
    goal2: [],
    goal3: [],
    goal4: [],
  });

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [progressWidth, setProgressWidth] = useState(0);
  const [showBar, setShowBar] = useState(false);

  /* ---------------------------
      ANIMAZIONE PROGRESS BAR
  ----------------------------*/
  useEffect(() => {
    if (step > 0) {
      setShowBar(true);
      const targetWidth = (step / 6) * 100;
      setProgressWidth(0);
      const timeout = setTimeout(() => setProgressWidth(targetWidth), 50);
      return () => clearTimeout(timeout);
    } else {
      setShowBar(false);
      setProgressWidth(0);
    }
  }, [step]);

  /* ---------------------------
      INPUT TEXT
  ----------------------------*/
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "email") validateEmail(value);
  };

  /* ---------------------------
      RADIO HANDLER
  ----------------------------*/
  const handleRadioChange = (value) => {
    const key =
      step === 1
        ? "goal1"
        : step === 2
        ? "goal2"
        : step === 3
        ? "goal3"
        : "goal4";
    setFormData((prev) => ({ ...prev, [key]: [value] }));
  };

  /* ---------------------------
      EMAIL VALIDATION
  ----------------------------*/
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  };

  /* ---------------------------
      NAV STEPS
  ----------------------------*/
  const nextStep = () => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, 6));
  };
  const prevStep = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  /* ---------------------------
      SUBMIT FORM
  ----------------------------*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/progetto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      toast.success(`Hey ${formData.name}, your message was sent successfully`);
      nextStep();
    } else {
      toast.error("Invio fallito.");
    }
  };

  /* ---------------------------
      DISABILITAZIONE NEXT
  ----------------------------*/
  const isNextDisabled = () => {
    switch (step) {
      case 1:
        return formData.goal1.length === 0;
      case 2:
        return formData.goal2.length === 0;
      case 3:
        return formData.goal3.length === 0;
      case 4:
        return formData.goal4.length === 0;
      case 5:
        return formData.email.trim() === "" || !isEmailValid;
      default:
        return false;
    }
  };

  /* ---------------------------
      FRAMER MOTION VARIANTS (solo step1+)
  ----------------------------*/
  const variants = {
    enter: (direction) => ({
      y: direction === 1 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      y: direction === 1 ? -100 : 100,
      opacity: 0,
    }),
  };

  /* ---------------------------
      RENDER STEP RADIO ITEMS
  ----------------------------*/
  const renderRadioStep = (stepData, goalKey, prevLabel, nextLabel) => (
    <div className="flex flex-col w-[90%] lg:max-w-2xl gap-4 pb-10 mx-auto text-center">
      <h3 className="text-3xl font-bold text-center text-white lg:text-5xl dark:text-third">
        {stepData.text}
      </h3>

      <div className="flex items-center my-5 lg:justify-center">
        <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4">
          {stepData.goalItems.map((goal) => {
            const active = formData[goalKey].includes(goal.value);
            return (
              <label
                key={goal.id}
                htmlFor={goal.id}
                className={`
                  cursor-pointer flex items-center justify-center w-full py-2 px-4 border text-lg transition-colors
                  ${
                    active
                      ? "border-second bg-second text-white [&_strong]:text-white"
                      : "border-white dark:border-third text-white dark:text-third [&_strong]:text-second"
                  }
                `}
              >
                <input
                  type="radio"
                  id={goal.id}
                  name={goalKey}
                  value={goal.value}
                  checked={active}
                  onChange={() => handleRadioChange(goal.value)}
                  className="hidden"
                />
                <p dangerouslySetInnerHTML={{ __html: goal.label }}></p>
              </label>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between">
        <button onClick={prevStep} className="px-4 py-2 underline text-second">
          {prevLabel}
        </button>

        <button
          onClick={nextStep}
          disabled={isNextDisabled()}
          className={`relative px-6 py-3 overflow-hidden text-sm font-medium text-white uppercase transition-all duration-300 border-2 max-w-max dark:text-third border-pink lg:px-10 ${
            isNextDisabled() ? "opacity-40" : "opacity-100"
          }`}
        >
          <span className="relative z-10 text-white dark:text-third">
            {nextLabel}
          </span>
          <span className="absolute top-0 left-0 w-0 h-full transition-all duration-500 ease-out bg-pink group-hover:w-full"></span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center h-[100svh] sm:h-[90svh] bg-third dark:bg-white">
      <div className="relative z-50 w-full h-full pt-6 lg:pt-0">
        {/* PROGRESS BAR */}
        <div
          className={`transition-opacity duration-500 flex justify-center w-[90%] mx-auto pb-10 lg:pt-20 ${
            showBar ? "opacity-100" : "opacity-0"
          }`}
        >
          {showBar && (
            <div className="w-full lg:w-[500px] dark:bg-third/20 bg-white/20 rounded-full h-1 mb-2 overflow-hidden">
              <div
                className="h-full transition-all duration-700 ease-in-out rounded-full bg-pink"
                style={{ width: `${progressWidth}%` }}
              />
            </div>
          )}
        </div>

        {/* ---------------- STEP 0 (NON MODIFICARE) ---------------- */}
        {step === 0 && (
          <>
            <div className="relative z-50 w-full h-full bg-third dark:bg-white">
              <div className="flex flex-col items-start lg:items-center w-[90%] mx-auto lg:max-w-max">
                <h1
                  className="text-[14vw] lg:text-8xl text-white uppercase font-bebas leading-none dark:text-third"
                  dangerouslySetInnerHTML={{ __html: translation.step0.title }}
                />
                <div className="flex items-center justify-between w-full gap-4">
                  <h2
                    className="flex-1 text-[14vw] lg:text-8xl text-white dark:text-third"
                    dangerouslySetInnerHTML={{
                      __html: translation.step0.title2,
                    }}
                  />
                  <button
                    onClick={nextStep}
                    className="relative overflow-hidden py-2 px-4 text-sm font-medium uppercase border-2 border-pink text-center transition-all duration-300 lg:text-lg lg:min-w-[240px] group"
                  >
                    <span className="relative z-10 px-2 text-white dark:text-third group-hover:text-white">
                      {translation.step0.cta}
                    </span>
                    <span className="absolute top-0 left-0 w-0 h-full transition-all duration-500 bg-pink group-hover:w-full"></span>
                  </button>
                </div>
              </div>
              <FloatingLogos />
            </div>
            <Footer />
          </>
        )}

        {/* ---------------- STEP 1-6 (animazioni verticali) ---------------- */}
        <AnimatePresence mode="wait" custom={direction}>
          {step > 0 && (
            <motion.div
              key={step}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.8, // più lunga = più morbida
                ease: [0.4, 0, 0.2, 1], // cubic-bezier morbida e naturale
              }}
              className="relative flex flex-col items-center justify-start w-full h-full mt-10 lg:mt-20"
            >
              {step === 1 &&
                renderRadioStep(
                  translation.step1,
                  "goal1",
                  translation.step1.prev,
                  translation.step1.next
                )}
              {step === 2 &&
                renderRadioStep(
                  translation.step2,
                  "goal2",
                  translation.step2.prev,
                  translation.step2.next
                )}
              {step === 3 &&
                renderRadioStep(
                  translation.step3,
                  "goal3",
                  translation.step3.prev,
                  translation.step3.next
                )}
              {step === 4 &&
                renderRadioStep(
                  translation.step4,
                  "goal4",
                  translation.step4.prev,
                  translation.step4.next
                )}

              {step === 5 && (
                <div className="flex flex-col w-[90%] lg:max-w-2xl gap-4 mx-auto my-20 text-center">
                  <h4 className="text-3xl font-bold text-white dark:text-third lg:text-4xl">
                    {translation.step5.title}
                  </h4>
                  <h3 className="text-4xl font-bold text-white dark:text-third lg:text-5xl">
                    {translation.step5.text}
                  </h3>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    placeholder={translation.step5.placeholder}
                    onChange={handleChange}
                    className="text-lg text-white dark:text-third contact-form__input"
                  />

                  {!isEmailValid && (
                    <p className="text-second">{translation.step5.isValid}</p>
                  )}

                  <div className="flex justify-between">
                    <button
                      onClick={prevStep}
                      className="px-4 py-2 underline text-second"
                    >
                      {translation.step5.prev}
                    </button>
                    <button
                      onClick={nextStep}
                      disabled={isNextDisabled()}
                      className={`relative px-6 py-3 overflow-hidden text-sm font-medium text-white uppercase transition-all duration-300 border-2 max-w-max dark:text-third border-pink lg:px-10 ${
                        isNextDisabled() ? "opacity-40" : "opacity-100"
                      }`}
                    >
                      <span className="relative z-10 text-white dark:text-third">
                        {translation.step5.next}
                      </span>
                      <span className="absolute top-0 left-0 w-0 h-full transition-all duration-500 ease-out bg-pink group-hover:w-full"></span>
                    </button>
                  </div>
                </div>
              )}

              {step === 6 && (
                <div className="flex flex-col items-center w-[90%] lg:max-w-2xl gap-4 pb-20 mx-auto text-center">
                  <h2 className="flex items-center gap-2 text-4xl font-bold lg:text-5xl text-pink">
                    {translation.step6.title}{" "}
                    <Image
                      src="/assets/icona_cuore_rosa.png"
                      width={60}
                      height={60}
                    />
                  </h2>
                  <p
                    className="text-white dark:text-third lg:text-xl"
                    dangerouslySetInnerHTML={{ __html: translation.step6.text }}
                  />
                  <Cta link="/stories">{translation.step6.cta}</Cta>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
