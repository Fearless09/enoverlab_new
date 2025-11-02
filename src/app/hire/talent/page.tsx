"use client";

import StepsIndicator from "@/components/shared/StepsIndicator";
import useSteps from "@/hooks/useSteps";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";

const stepsTitle = [
  "Organization Information",
  "Role Information",
  "Skill Requirements",
  "Work Expectations",
  "Additional Information",
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
            <main className="w-full max-w-[754px]">
              {step === 1 && <Step1 dispatcher={stepDispater} />}
              {step === 2 && <Step2 dispatcher={stepDispater} />}
              {step === 3 && <Step3 dispatcher={stepDispater} />}
              {step === 4 && <Step4 dispatcher={stepDispater} />}
              {step === 5 && <Step5 dispatcher={stepDispater} />}
            </main>

            <main className="flex-1">
              step:{step}
              <br />
              completedStep {completedStep}
              <br />
              completed {String(completed)}
            </main>
          </section>
        </>
      ) : (
        "Thank You"
      )}
    </section>
  );
};

export default page;
