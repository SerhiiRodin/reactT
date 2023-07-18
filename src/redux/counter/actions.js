import { DECREMENT, INCREMENT, SETSTEP } from "./types";

export const increment = (step) => {
  return { type: INCREMENT, payload: step };
};

export const decrement = (step) => {
  return { type: DECREMENT, payload: step };
};

export const setStep = (value) => {
  return { type: SETSTEP, payload: value };
};
