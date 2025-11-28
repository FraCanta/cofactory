import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Footer from "../layout/Footer";
import FloatingLogos from "../FloatingLogos/FloatingLogos";
import CtaOutline from "../layout/CtaOutline";
import Cta from "../Cta/Cta";

export default function StepsContact({ translation }) {
  const [step, setStep] = useState(0);

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

      const timeout = setTimeout(() => {
        setProgressWidth(targetWidth);
      }, 50);

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

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "email") {
      validateEmail(value);
    }
  };

  /* ---------------------------
      CHECKBOX HANDLER
  ----------------------------*/
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    const key =
      step === 1
        ? "goal1"
        : step === 2
        ? "goal2"
        : step === 3
        ? "goal3"
        : "goal4";

    setFormData((prev) => ({
      ...prev,
      [key]: checked
        ? [...prev[key], value]
        : prev[key].filter((item) => item !== value),
    }));
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
  const nextStep = () => step < 6 && setStep(step + 1);
  const prevStep = () => step > 0 && setStep(step - 1);

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
      nextStep(); // Vai allo step 6
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

  return (
    <div className="flex items-center justify-center h-[90svh] lg:h-[90vh] bg-third dark:bg-white">
      <div className="relative w-full h-full pt-6 lg:pt-0">
        {/* ---------------------------
                PROGRESS BAR
        ----------------------------*/}
        <div
          className={`transition-opacity duration-500 flex justify-center w-[90%] mx-auto pb-10 lg:pt-20 ${
            showBar ? "opacity-100" : "opacity-0"
          }`}
        >
          {showBar && (
            <div className="w-full lg:w-[500px] dark:bg-third/20 bg-white/20 rounded-full h-2.5 mb-2 overflow-hidden">
              <div
                className="h-full transition-all duration-700 ease-in-out rounded-full bg-pink "
                style={{ width: `${progressWidth}%` }}
              />
            </div>
          )}
        </div>

        {/* ---------------------------
                STEP 0
        ----------------------------*/}

        {step === 0 && (
          <div className="w-full h-full bg-third dark:bg-white">
            <div className="flex flex-col items-start lg:items-center w-[90%]  mx-auto lg:max-w-max">
              <h1
                className="text-[14vw] lg:text-8xl text-white uppercase font-bebas leading-none dark:text-third"
                dangerouslySetInnerHTML={{ __html: translation.step0.title }}
              />

              <div className="flex items-center justify-between w-full gap-4">
                <h2
                  className="flex-1 text-[14vw] lg:text-8xl text-white dark:text-third"
                  dangerouslySetInnerHTML={{ __html: translation.step0.title2 }}
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
        )}
        {step === 0 && <Footer />}
        {/* ---------------------------
                STEP 1
        ----------------------------*/}
        {step === 1 && (
          <div className="flex flex-col w-[90%]  lg:w-[90%]  lg:max-w-2xl gap-4 pb-10 mx-auto ">
            <h3 className="text-3xl font-bold text-center text-white lg:text-5xl dark:text-third">
              {translation.step1.text}
            </h3>

            <div className="flex items-center my-5 lg:justify-center">
              <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4">
                {translation.step1.goalItems.map((goal) => {
                  const active = formData.goal1.includes(goal.value);
                  return (
                    <label
                      key={goal.id}
                      htmlFor={goal.id}
                      className={`cursor-pointer flex items-center justify-center py-2 px-4 w-full   border ${
                        active
                          ? "border-second bg-second text-white text-lg"
                          : "border-white dark:border-third text-white dark:text-third text-lg"
                      }`}
                    >
                      <input
                        type="checkbox"
                        id={goal.id}
                        value={goal.value}
                        checked={active}
                        onChange={handleCheckboxChange}
                        className="hidden"
                      />
                      <p dangerouslySetInnerHTML={{ __html: goal.label }}></p>
                    </label>
                  );
                })}
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
                disabled={isNextDisabled()}
                className={`relative px-6 py-3 overflow-hidden text-sm font-medium text-white uppercase transition-all duration-300 border-2 max-w-max dark:text-third  border-pink lg:px-10 4xl:px-10 4xl:py-8 lg:text-base 3xl:text-2xl 4xl:text-3xl group ${
                  isNextDisabled() ? "opacity-40" : "opacity-100"
                }`}
              >
                <span className="relative z-10 text-white dark:text-third">
                  {translation.step1.next}
                </span>
                <span className="absolute top-0 left-0 w-0 h-full transition-all duration-500 ease-out bg-pink group-hover:w-full"></span>
              </button>
            </div>
          </div>
        )}

        {/* ---------------------------
                STEP 2
        ----------------------------*/}
        {step === 2 && (
          <div className="flex flex-col w-[90%]  lg:max-w-2xl gap-4 pb-10 mx-auto">
            <h3 className="text-3xl font-bold text-center text-white lg:text-5xl dark:text-third">
              {translation.step2.text}
            </h3>

            <div className="flex items-center my-5 lg:justify-center">
              <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4">
                {translation.step2.goalItems.map((goal) => {
                  const active = formData.goal2.includes(goal.value);
                  return (
                    <label
                      key={goal.id}
                      htmlFor={goal.id}
                      className={`cursor-pointer flex items-center justify-center py-2 px-4 w-full   border ${
                        active
                          ? "border-second bg-second text-white text-lg"
                          : "border-white dark:border-third text-white dark:text-third text-lg"
                      }`}
                    >
                      <input
                        type="checkbox"
                        id={goal.id}
                        value={goal.value}
                        checked={active}
                        onChange={handleCheckboxChange}
                        className="hidden"
                      />
                      <p dangerouslySetInnerHTML={{ __html: goal.label }}></p>
                    </label>
                  );
                })}
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
                disabled={isNextDisabled()}
                className={`relative px-6 py-3 overflow-hidden text-sm font-medium text-white uppercase transition-all duration-300 border-2 max-w-max dark:text-third  border-pink lg:px-10 4xl:px-10 4xl:py-8 lg:text-base 3xl:text-2xl 4xl:text-3xl group ${
                  isNextDisabled() ? "opacity-40" : "opacity-100"
                }`}
              >
                <span className="relative z-10 text-white dark:text-third">
                  {translation.step2.next}
                </span>
                <span className="absolute top-0 left-0 w-0 h-full transition-all duration-500 ease-out bg-pink group-hover:w-full"></span>
              </button>
            </div>
          </div>
        )}

        {/* ---------------------------
                STEP 3
        ----------------------------*/}
        {step === 3 && (
          <div className="flex flex-col w-[90%]  lg:max-w-2xl gap-4 pb-10 mx-auto">
            <h3 className="text-3xl font-bold text-center text-white lg:text-5xl dark:text-third">
              {translation.step3.text}
            </h3>

            <div className="flex items-center my-5 lg:justify-center">
              <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4">
                {translation.step3.goalItems.map((goal) => {
                  const active = formData.goal3.includes(goal.value);
                  return (
                    <label
                      key={goal.id}
                      htmlFor={goal.id}
                      className={`cursor-pointer flex items-center justify-center w-full py-2 px-4  border ${
                        active
                          ? "border-second bg-second text-white text-lg"
                          : "border-white dark:border-third text-white dark:text-third text-lg"
                      }`}
                    >
                      <input
                        type="checkbox"
                        id={goal.id}
                        value={goal.value}
                        checked={active}
                        onChange={handleCheckboxChange}
                        className="hidden"
                      />
                      <p dangerouslySetInnerHTML={{ __html: goal.label }}></p>
                    </label>
                  );
                })}
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
                disabled={isNextDisabled()}
                className={`relative px-6 py-3 overflow-hidden text-sm font-medium text-white uppercase transition-all duration-300 border-2 max-w-max dark:text-third  border-pink lg:px-10 4xl:px-10 4xl:py-8 lg:text-base 3xl:text-2xl 4xl:text-3xl group ${
                  isNextDisabled() ? "opacity-40" : "opacity-100"
                }`}
              >
                <span className="relative z-10 text-white dark:text-third">
                  {translation.step3.next}
                </span>
                <span className="absolute top-0 left-0 w-0 h-full transition-all duration-500 ease-out bg-pink group-hover:w-full"></span>
              </button>
            </div>
          </div>
        )}

        {/* ---------------------------
                STEP 4
        ----------------------------*/}
        {step === 4 && (
          <div className="flex flex-col w-[90%]  lg:max-w-2xl gap-4 pb-10 mx-auto lg:text-center">
            <h3 className="text-3xl font-bold text-center text-white lg:text-5xl dark:text-third">
              {translation.step4?.text || translation.step3.text}
            </h3>

            <div className="flex items-center my-5 lg:justify-center">
              <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4">
                {translation.step4.goalItems.map((goal) => {
                  const active = formData.goal4.includes(goal.value);
                  return (
                    <label
                      key={goal.id}
                      htmlFor={goal.id}
                      className={`cursor-pointer flex items-center justify-center w-full py-2 px-4  border ${
                        active
                          ? "border-second bg-second text-white text-lg"
                          : "border-white dark:border-third text-white dark:text-third text-lg"
                      }`}
                    >
                      <input
                        type="checkbox"
                        id={goal.id}
                        value={goal.value}
                        checked={active}
                        onChange={handleCheckboxChange}
                        className="hidden"
                      />
                      <p dangerouslySetInnerHTML={{ __html: goal.label }}></p>
                    </label>
                  );
                })}
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
                disabled={isNextDisabled()}
                className={`relative px-6 py-3 overflow-hidden text-sm font-medium text-white uppercase transition-all duration-300 border-2 max-w-max dark:text-third  border-pink lg:px-10 4xl:px-10 4xl:py-8 lg:text-base 3xl:text-2xl 4xl:text-3xl group ${
                  isNextDisabled() ? "opacity-40" : "opacity-100"
                }`}
              >
                <span className="relative z-10 text-white dark:text-third">
                  {translation.step4.next}
                </span>
                <span className="absolute top-0 left-0 w-0 h-full transition-all duration-500 ease-out bg-pink group-hover:w-full"></span>
              </button>
            </div>
          </div>
        )}

        {/* ---------------------------
                STEP 5
        ----------------------------*/}
        {step === 5 && (
          <div className="flex flex-col w-[90%]  lg:max-w-2xl gap-4 mx-auto my-20 text-center">
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
              placeholder={translation.step2.placeholder}
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
                className={`relative px-3 py-3 overflow-hidden text-sm font-medium text-white uppercase transition-all duration-300 border-2 max-w-max dark:text-third  border-pink lg:px-10 4xl:px-10 4xl:py-8 lg:text-base 3xl:text-2xl 4xl:text-3xl group ${
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

        {/* ---------------------------
                STEP 6 (SUCCESS)
        ----------------------------*/}
        {step === 6 && (
          <div className="flex flex-col items-center w-[90%]  lg:max-w-2xl gap-4 pb-20 mx-auto text-center">
            <h2 className="text-4xl font-bold lg:text-5xl text-pink">
              {translation.step6.title}
            </h2>

            <p
              className="text-white dark:text-third lg:text-xl"
              dangerouslySetInnerHTML={{
                __html: translation.step6.text,
              }}
            ></p>

            <Cta link="/stories">{translation.step6.cta}</Cta>
          </div>
        )}
      </div>
    </div>
  );
}
