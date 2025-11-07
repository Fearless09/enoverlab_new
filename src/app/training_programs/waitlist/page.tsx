"use client";

import StepsIndicator from "@/components/shared/StepsIndicator";
import useSteps from "@/hooks/useSteps";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import FAQ, { Faq } from "@/components/shared/FAQ";
import Success from "@/components/shared/Success";

const stepsTitle = [
  "Personal Information",
  "Motivation",
  "Updates & Consent",
];

const page = () => {
  const { completed, completedStep, step, stepDispater } = useSteps({
    max: stepsTitle.length,
    initialNum: 1,
  });

  return (
    <section className="wrapper relative mt-18 mb-25">
      {!completed ? (
        <>
          {/* Steps */}
          <StepsIndicator
            completedStep={completedStep}
            step={step}
            stepsTitle={stepsTitle}
            dispatcher={stepDispater}
          />

          <section className="mt-19 flex justify-between gap-5">
            <main className="w-full max-w-[720px]">
              {step === 1 && <Step1 dispatcher={stepDispater} />}
              {step === 2 && <Step2 dispatcher={stepDispater} />}
              {step === 3 && <Step3 dispatcher={stepDispater} />}
            </main>

            <main className="grid flex-1">
              <FAQ faqs={faqs[step - 1]} />
            </main>
          </section>
        </>
      ) : (
        <Success />
      )}
    </section>
  );
};

export default page;

const faqs: Faq[][] = [
  [
    {
      question: "Why do you need my organization’s information?",
      answer: "We collect basic details to understand your company’s goals, structure, and culture — so we can match you with the best-fit talent.",
    },
    {
      question:
        "Can individuals or startups without a registered company hire a talent?",
      answer: "Yes! We work with startups, founders, and growing teams at all stages — formal registration isn’t required to access talent.",
    },
    {
      question: "Will my company details remain confidential?",
      answer: "No problem. You can provide a social media handle, portfolio, or short description of your work instead.",
    },
    {
      question: "What if my organization doesn’t have a website yet?",
      answer: "Absolutely. All shared information is handled securely and used only for matching and communication purposes.",
    },
    {
      question:
        "Can I update my organization’s contact person after submitting the form?",
      answer: "Yes — simply contact our support team, and we’ll update your records right away.",
    },
  ],
  [
    {
      question: "Why do you need my organization’s information?",
      answer: "We collect basic details to understand your company’s goals, structure, and culture — so we can match you with the best-fit talent.",
    },
    {
      question:
        "Can individuals or startups without a registered company hire a talent?",
      answer: "Yes! We work with startups, founders, and growing teams at all stages — formal registration isn’t required to access talent.",
    },
    {
      question: "Will my company details remain confidential?",
      answer: "No problem. You can provide a social media handle, portfolio, or short description of your work instead.",
    },
    {
      question: "What if my organization doesn’t have a website yet?",
      answer: "Absolutely. All shared information is handled securely and used only for matching and communication purposes.",
    },
    {
      question:
        "Can I update my organization’s contact person after submitting the form?",
      answer: "Yes — simply contact our support team, and we’ll update your records right away.",
    },
  ],
  [
    {
      question: "Why do you need my organization’s information?",
      answer: "We collect basic details to understand your company’s goals, structure, and culture — so we can match you with the best-fit talent.",
    },
    {
      question:
        "Can individuals or startups without a registered company hire a talent?",
      answer: "Yes! We work with startups, founders, and growing teams at all stages — formal registration isn’t required to access talent.",
    },
    {
      question: "Will my company details remain confidential?",
      answer: "No problem. You can provide a social media handle, portfolio, or short description of your work instead.",
    },
    {
      question: "What if my organization doesn’t have a website yet?",
      answer: "Absolutely. All shared information is handled securely and used only for matching and communication purposes.",
    },
    {
      question:
        "Can I update my organization’s contact person after submitting the form?",
      answer: "Yes — simply contact our support team, and we’ll update your records right away.",
    },
  ],
];
