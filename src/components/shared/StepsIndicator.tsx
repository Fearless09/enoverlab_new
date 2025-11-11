"use client";

import { Action } from "@/hooks/useSteps";
import { cn } from "@/utilities/utils";
import React, { FC } from "react";

type Props = FC<{
  stepsTitle: string[];
  step: number;
  completedStep: number;
  dispatcher: (action: Action) => void;
}>;

/**
 * Steps is a component that displays a list of steps.
 * It takes in 4 props: completedStep, dispatcher, step, and stepsTitle.
 * completedStep is the number of steps that have been completed.
 * dispatcher is a function that takes an Action object and updates the state.
 * step is the current step.
 * stepsTitle is an array of strings that represent the titles of the steps.
 * It renders a list of steps with the current step highlighted and the completed steps checked.
 * It also renders a line between each step, with the completed steps line being highlighted.
 */

const StepsIndicator: Props = ({
  completedStep,
  dispatcher,
  step,
  stepsTitle,
}) => {
  return (
    <section className="flex items-start justify-center gap-6">
      {stepsTitle.map((title, index) => (
        <React.Fragment key={index}>
          <div
            className={cn(
              "transition-300 text-center font-semibold text-[#838383]",
              {
                "text-primary-400": index + 1 <= step || index <= completedStep,
                "cursor-pointer": index < completedStep + 1,
              },
            )}
            onClick={() => {
              if (index >= completedStep + 1) return;

              dispatcher({
                type: "UPDATE_STEP",
                payload: { step: index + 1 },
              });
            }}
          >
            <span
              className={cn(
                "transition-300 mx-auto flex size-10 items-center justify-center rounded-full border text-lg md:size-12 md:text-xl",
                {
                  "bg-primary-400 text-white": index + 1 <= completedStep,
                  "text-primary-400 bg-transparent": index + 1 === step,
                },
              )}
            >
              {index + 1}
            </span>
            <h1 className="transition-300 mx-auto mt-3 max-w-[125px] text-sm capitalize md:text-base">
              {title}
            </h1>
          </div>

          {index + 1 < stepsTitle.length && (
            <hr
              className={cn("transition-300 max-w-20 flex-1 border-[#838383]", {
                "border-primary-400": index + 1 <= step,
              })}
            />
          )}
        </React.Fragment>
      ))}
    </section>
  );
};

export default StepsIndicator;
