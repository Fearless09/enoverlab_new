"use client";

import { useReducer } from "react";

export type State = {
  step: number;
  completedStep: number;
  completed: boolean;
  maximumStep: number;
};

export type Action = {
  type: "UPDATE_STEP" | "NEXT_STEP";
  payload: {
    step: number;
  };
};

/**
 * useSteps is a hook that manages the state of a step-by-step process.
 * It returns an object with the current state and a function to dispatch actions to update the state.
 * The state contains the current step, the completed step, whether the process is completed, and the maximum step.
 * The function to dispatch actions takes an object with the type of action and a payload containing the step to update to.
 * The available types of actions are "UPDATE_STEP" and "NEXT_STEP".
 * "UPDATE_STEP" updates the current step to the given step.
 * "NEXT_STEP" updates the current step to the next step.
 * @param {Object} options - The options object.
 * @param {number} options.max - The maximum step.
 * @param {number} [options.initialNum=1] - The initial step.
 * @returns {Object} An object containing the state and the function to dispatch actions.
 */

const useSteps = ({
  max,
  initialNum = 1,
}: {
  max: number;
  initialNum?: number;
}) => {
  const initialState: State = {
    step: initialNum,
    completedStep: initialNum - 1, //0,
    completed: false,
    maximumStep: max,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const stepDispater = (action: Action) => dispatch(action);
  return { ...state, stepDispater };
};

export default useSteps;

function reducer(state: State, action: Action): State {
  const { payload, type } = action;

  switch (type) {
    case "UPDATE_STEP": {
      if (payload.step > state.completedStep + 1) return state;
      return { ...state, step: payload.step };
    }

    case "NEXT_STEP": {
      if (payload.step > state.maximumStep) {
        return {
          ...state,
          completed: true,
          step: state.maximumStep,
          completedStep: state.maximumStep,
        };
      }
      return { ...state, step: payload.step, completedStep: payload.step - 1 };
    }

    default:
      return state;
  }
}
