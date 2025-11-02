"use client";

import Steps from "@/components/shared/Steps";
import useSteps from "@/hooks/useSteps";
import { cn } from "@/utilities/utils";
import React from "react";

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
    <section className="wrapper relative mt-18">
      {/* Steps */}
      <Steps
        completedStep={completedStep}
        step={step}
        stepsTitle={stepsTitle}
        dispatcher={stepDispater}
      />
      <button
        onClick={() =>
          stepDispater({ type: "NEXT_STEP", payload: { step: step + 1 } })
        }
      >
        btn +1
      </button>
      <br />
      step: {step} <br /> completed steps {completedStep} <br />
      completed {String(completed)}
    </section>
  );
};

export default page;
