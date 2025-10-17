import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../layout/Footer";
import FloatingLogos from "../FloatingLogos/FloatingLogos";
import ParallaxText from "../ParallaxText";
import HorizontalScroll from "../HorizontalScroll/HorizontalScroll";

export default function StepsContact({ translation }) {
  const [showScroll, setShowScroll] = useState(false);
  const scrollRef = useRef(null);

  // ✅ Questa funzione verrà passata come onToggle a ParallaxText
  const handleToggle = () => {
    setShowScroll((prev) => !prev);
    // 👇 piccolo timeout per aspettare il render del motion.div
    setTimeout(() => {
      scrollRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 400);
  };
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    goal: [],
    message: "",
    investimento: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [progressWidth, setProgressWidth] = useState(0);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    if (step > 0) {
      setShowBar(true); // mostra la barra
      const targetWidth = (step / 6) * 100;

      // reset per animazione fluida
      setProgressWidth(0);
      const timeout = setTimeout(() => {
        setProgressWidth(targetWidth);
      }, 50);

      return () => clearTimeout(timeout);
    } else {
      setShowBar(false); // nasconde la barra
      setProgressWidth(0); // sicurezza
    }
  }, [step]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "email") {
      validateEmail(value);
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      goal: checked
        ? [...prevData.goal, value]
        : prevData.goal.filter((item) => item !== value),
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  };

  const nextStep = () => {
    if (step < 6) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/progetto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      toast.success(`Hey ${formData.name} your message was sent successfully`);
      nextStep(); // Vai allo step 6
    } else {
      toast.error("Invio fallito.");
    }
  };

  const isNextButtonDisabled = () => {
    switch (step) {
      case 0:
        return false;
      case 1:
        return !formData.name;
      case 2:
        return !formData.email || !isEmailValid;
      case 3:
        return formData.goal.length === 0;
      case 4:
        return !formData.message;
      case 5:
        return !formData.investimento;

      default:
        return false;
    }
  };
  return (
    <>
      <div className="relative w-full">
        <div
          className={`transition-opacity duration-500 flex justify-center w-[90%] mx-auto mb-10 lg:mt-20 ${
            showBar ? "opacity-100" : "opacity-0"
          }`}
        >
          {showBar && (
            <div className="w-full lg:w-[500px] bg-second/20 rounded-full h-2.5 mb-2 overflow-hidden">
              <div
                className="h-full transition-all duration-700 ease-in-out rounded-full bg-pink"
                style={{ width: `${progressWidth}%` }}
              />
            </div>
          )}
        </div>
        {step === 0 && (
          <>
            <div className="flex flex-col items-start justify-start mx-auto lg:justify-center lg:items-center w-[90%] lg:max-w-max">
              <h1
                className="text-5xl text-left text-white font-regular lg:text-8xl dark:text-third"
                dangerouslySetInnerHTML={{
                  __html: translation.step0.title,
                }}
              ></h1>
              <div className="flex items-center justify-between gap-4 lg:w-full">
                <h1
                  className="flex-1 text-5xl text-left lg:text-8xl"
                  dangerouslySetInnerHTML={{
                    __html: translation.step0.title2,
                  }}
                ></h1>
                <button
                  onClick={nextStep}
                  className="relative overflow-hidden py-2 px-4 text-sm font-medium uppercase border-2 border-pink text-center transition-all duration-300 lg:text-lg lg:min-w-[240px] 3xl:text-2xl group"
                >
                  <span className="relative z-10 px-2 text-white transition-colors duration-500 dark:text-third group-hover:text-white">
                    {translation.step0.cta}
                  </span>
                  <span className="absolute top-0 left-0 w-0 h-full transition-all duration-500 ease-out bg-pink group-hover:w-full"></span>
                </button>
              </div>
            </div>
            {/* <div className="w-full mx-auto mt-24 overflow-hidden">
              <ParallaxText
                marqueeText={translation.marqueeLink}
                onToggle={handleToggle}
              />
            </div>
            <AnimatePresence>
              {showScroll && (
                <motion.div
                  ref={scrollRef}
                  className="w-full my-20 lg:my-40"
                  key="scroll"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <HorizontalScroll />
                </motion.div>
              )}
            </AnimatePresence> */}
            <FloatingLogos />
            <Footer />
          </>
        )}

        {step === 1 && (
          <div className="flex flex-col max-w-2xl gap-4 pb-10 mx-auto">
            <h3 className="text-2xl text-white dark:text-third font-regular lg:text-4xl">
              {translation.step1.text}
            </h3>
            <div className="flex my-5 lg:justify-center">
              <div className="flex flex-wrap gap-2 lg:gap-4">
                {translation.step1.goalItems.map((goal) => (
                  <label
                    key={goal.id}
                    htmlFor={goal.id}
                    className={`cursor-pointer goal-label flex items-center justify-center py-2 px-4 border ${
                      formData.goal.includes(goal.value)
                        ? "border-second bg-second "
                        : "border-white dark:border-third text-white dark:text-third"
                    } rounded-full hover:border-second `}
                  >
                    <input
                      type="checkbox"
                      name="goal"
                      id={goal.id}
                      value={goal.value}
                      checked={formData.goal.includes(goal.value)}
                      onChange={handleCheckboxChange}
                      className="hidden"
                    />
                    <p
                      className={
                        formData.goal.includes(goal.value)
                          ? "text-white"
                          : "dark:text-third"
                      }
                      dangerouslySetInnerHTML={{
                        __html: goal.label,
                      }}
                    ></p>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="px-4 py-2 underline text-second"
              >
                {translation.step1.prev}
              </button>
              <button
                onClick={nextStep}
                className={`py-2 text-sm font-medium text-white uppercase border-2 rounded-[30px] px-4 lg:text-lg lg:min-w-[240px] border-pink dark:text-third 3xl:text-2xl text-center ${
                  formData.goal.length > 0 ? "opacity-100" : "opacity-40"
                }`}
                disabled={formData.goal.length === 0}
              >
                <span className="px-2 text-white">
                  {translation.step1.next}
                </span>
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col max-w-2xl gap-4 pb-10 mx-auto">
            <h3 className="text-2xl text-white font-regular lg:text-4xl">
              {translation.step2.text}
            </h3>
            <div className="flex my-5 lg:justify-center">
              <div className="flex flex-wrap gap-2 lg:gap-4">
                {translation.step2.goalItems.map((goal) => (
                  <label
                    key={goal.id}
                    htmlFor={goal.id}
                    className={`cursor-pointer goal-label flex items-center justify-center py-2 px-4 border ${
                      formData.goal.includes(goal.value)
                        ? "border-second bg-second "
                        : "border-white text-white"
                    } rounded-full hover:border-second `}
                  >
                    <input
                      type="checkbox"
                      name="goal"
                      id={goal.id}
                      value={goal.value}
                      checked={formData.goal.includes(goal.value)}
                      onChange={handleCheckboxChange}
                      className="hidden"
                    />
                    <p
                      className={
                        formData.goal.includes(goal.value)
                          ? "text-white"
                          : "text-white"
                      }
                      dangerouslySetInnerHTML={{
                        __html: goal.label,
                      }}
                    ></p>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="px-4 py-2 underline text-second"
              >
                {translation.step2.prev}
              </button>
              <button
                onClick={nextStep}
                className={`py-2 text-sm font-medium text-white uppercase border-2 rounded-[30px] px-4 lg:text-lg lg:min-w-[240px] border-pink dark:text-third 3xl:text-2xl text-center ${
                  formData.goal.length > 0 ? "opacity-100" : "opacity-40"
                }`}
                disabled={formData.goal.length === 0}
              >
                <span className="px-2 text-white">
                  {translation.step2.next}
                </span>
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col max-w-2xl gap-4 pb-10 mx-auto">
            <h3 className="text-2xl text-white font-regular lg:text-4xl">
              {translation.step3.text}
            </h3>
            <div className="flex my-5 lg:justify-center">
              <div className="flex flex-wrap gap-2 lg:gap-4">
                {translation.step3.goalItems.map((goal) => (
                  <label
                    key={goal.id}
                    htmlFor={goal.id}
                    className={`cursor-pointer goal-label text-white flex items-center justify-center py-2 px-4 border ${
                      formData.goal.includes(goal.value)
                        ? "border-second"
                        : "border-white"
                    } rounded-full hover:border-second `}
                  >
                    <input
                      type="checkbox"
                      name="goal"
                      id={goal.id}
                      value={goal.value}
                      checked={formData.goal.includes(goal.value)}
                      onChange={handleCheckboxChange}
                      className="hidden"
                    />
                    <p
                      className={
                        formData.goal.includes(goal.value)
                          ? "text-second"
                          : "text-black"
                      }
                      dangerouslySetInnerHTML={{
                        __html: goal.label,
                      }}
                    ></p>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="px-4 py-2 underline text-second"
              >
                {translation.step3.prev}
              </button>
              <button
                onClick={nextStep}
                className={`py-2 text-sm font-medium text-white uppercase border-2 rounded-[30px] px-4 lg:text-lg lg:min-w-[240px] border-pink dark:text-third 3xl:text-2xl text-center ${
                  formData.goal.length > 0 ? "opacity-100" : "opacity-40"
                }`}
                disabled={formData.goal.length === 0}
              >
                <span className="px-2 text-white">
                  {translation.step3.next}
                </span>
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="flex flex-col max-w-2xl gap-4 pb-10 mx-auto lg:items-center lg:text-center lg:justify-center">
            <h3 className="text-2xl font-bold lg:text-4xl text-pink">
              {translation.step3.text}
            </h3>
            <div className="flex my-5 lg:justify-center">
              <div className="flex flex-wrap gap-2 lg:justify-center lg:gap-4">
                {translation.step3.goalItems.map((goal) => (
                  <label
                    key={goal.id}
                    htmlFor={goal.id}
                    className={`cursor-pointer goal-label text-pink flex items-center justify-center py-2 px-4 border ${
                      formData.goal.includes(goal.value)
                        ? "border-second"
                        : "border-pink"
                    } rounded-full hover:border-second `}
                  >
                    <input
                      type="checkbox"
                      name="goal"
                      id={goal.id}
                      value={goal.value}
                      checked={formData.goal.includes(goal.value)}
                      onChange={handleCheckboxChange}
                      className="hidden"
                    />
                    <p
                      className={
                        formData.goal.includes(goal.value)
                          ? "text-second"
                          : "text-black"
                      }
                      dangerouslySetInnerHTML={{
                        __html: goal.label,
                      }}
                    ></p>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="px-4 py-2 underline text-second"
              >
                {translation.step3.prev}
              </button>
              <button
                onClick={nextStep}
                className={`button-main ${
                  formData.goal.length > 0 ? "opacity-100" : "opacity-40"
                }`}
                disabled={formData.goal.length === 0}
              >
                <div className="button-circ-wrap">
                  <div className="button-content">
                    <div
                      className="button-circ-bg"
                      style={{
                        height: "42px",
                        width: "2.625rem",
                      }}
                    >
                      <Icon
                        icon="guidance:left-arrow"
                        className="text-[1.5rem] text-first"
                      />
                    </div>
                    <span className="px-2"> {translation.step3.next}</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="flex flex-col max-w-2xl gap-4 mx-auto lg:items-center lg:text-center lg:justify-center w-[90%] my-20">
            <h3 className="text-2xl text-white font-regular lg:text-4xl">
              {translation.step5.title} ,
            </h3>
            <h3 className="text-3xl text-white font-regular lg:text-4xl">
              {translation.step5.text}
            </h3>
            <input
              id="email"
              data-invalid="false"
              data-filled="false"
              className="text-pink contact-form__input text-l text-m_sm contact-form__input_pinched contact-form__input_pinched_t"
              name="email"
              placeholder={translation.step2.placeholder}
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {!isEmailValid && (
              <p className="text-second">{translation.step2.isValid}</p>
            )}
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="px-4 py-2 underline text-second "
              >
                {translation.step5.prev}
              </button>
              <button
                onClick={nextStep}
                className={`button-main ${
                  isNextButtonDisabled() ? "disabled opacity-40" : "opacity-100"
                }`}
                disabled={isNextButtonDisabled()}
              >
                <div className="button-circ-wrap">
                  <div className="button-content">
                    <div
                      className="button-circ-bg"
                      style={{
                        height: "42px",
                        width: "2.625rem",
                      }}
                    >
                      <Icon
                        icon="guidance:left-arrow"
                        className="text-[1.5rem] text-first"
                      />
                    </div>
                    <span className="px-2">{translation.step5.next}</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="flex flex-col max-w-2xl gap-4 pb-10 mx-auto lg:items-center lg:text-center lg:justify-center">
            <h2 className="text-2xl font-bold lg:text-5xl text-pink">
              {translation.step6.title}
            </h2>

            <h2
              className="mb-5 text-lg text-pink"
              dangerouslySetInnerHTML={{
                __html: translation.step6.text,
              }}
            ></h2>
            <div className="flex justify-between">
              <Link
                href="/portfolio"
                title="Contattami per una consulenza e parliamo insieme del tuo progetto"
                className="button-main max-w-max"
              >
                <div className="button-circ-wrap">
                  <div className="button-content">
                    <div
                      className="button-circ-bg"
                      style={{
                        height: "42px",
                        width: "2.625rem",
                      }}
                    >
                      <Icon
                        icon="guidance:left-arrow"
                        className="text-[1.5rem] text-first"
                      />
                    </div>
                    <span className="px-2">{translation.step6.cta}</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
