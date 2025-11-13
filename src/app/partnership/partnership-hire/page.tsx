"use client";

import StepsIndicator from "@/components/shared/StepsIndicator";
import useSteps from "@/hooks/useSteps";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import FAQ, { Faq } from "@/components/shared/FAQ";
import Success from "@/components/shared/Success";

const stepsTitle = [
  "Organization Information",
  "Partnership Interest",
  "Partnership Goals",
  "Budget & Support",
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
              {step === 4 && <Step4 dispatcher={stepDispater} />}
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
      question: "Why do you need my organization's information?",
      answer: "Answer",
    },
    {
      question:
        "Can individuals or startups without a registered company hire a talent?",
      answer: "Answer",
    },
    {
      question: "Will my company details remain confidential?",
      answer: "Answer",
    },
    {
      question: "What if my organization doesn't have a website yet?",
      answer: "Answer",
    },
    {
      question:
        "Can I update my organization's contact person after submitting the form?",
      answer: "Answer",
    },
  ],
  [
    {
      question: "What types of roles can I hire for through Enoverlab?",
      answer: "Answer",
    },
    {
      question: "Can I hire more than one person for the same role?",
      answer: "Answer",
    },
    {
      question: "Do you provide interns as well as full-time employees?",
      answer: "Answer",
    },
    {
      question: "How long does it take to match candidates to a role?",
      answer: "Answer",
    },
    {
      question: "Can I request temporary or project-based hires?",
      answer: "Answer",
    },
  ],
  [
    {
      question: "What skill areas are available for hire from Enoverlab?",
      answer: "Answer",
    },
    {
      question: "Are all talents trained and certified by Enoverlab?",
      answer: "Answer",
    },
    {
      question: "Can I request a mix of technical and non-technical skills?",
      answer: "Answer",
    },
    {
      question:
        "How do I specify the tools or technologies I need a talent to know?",
      answer: "Answer",
    },
    {
      question: "What if I'm not sure which skills fit my company's needs?",
      answer: "Answer",
    },
  ],
  [
    {
      question: "Can the hired talent work remotely or must they be on-site?",
      answer: "Answer",
    },
    {
      question:
        "How do I communicate my preferred work schedule or deliverables?",
      answer: "Answer",
    },
    {
      question:
        "Will the talent work directly under our team or Enoverlab supervision?",
      answer: "Answer",
    },
    {
      question: "What happens if a talent isn't meeting expectations?",
      answer: "Answer",
    },
    {
      question: "Can we extend the duration of the engagement if needed?",
      answer: "Answer",
    },
  ],
  [
    {
      question: "Is there a minimum or maximum budget for hiring a talent?",
      answer: "Answer",
    },
    {
      question: "Does Enoverlab assist in the interview and selection process?",
      answer: "Answer",
    },
    {
      question: "How soon can I start working with a recommended candidate?",
      answer: "Answer",
    },
    {
      question:
        "What kind of follow-up support does Enoverlab offer after placement?",
      answer: "Answer",
    },
    {
      question:
        "Can I request a replacement if the first hire isn't a good fit?",
      answer: "Answer",
    },
  ],
];
