import { createAction } from "@reduxjs/toolkit";

export const increment = createAction("INCREMENT");
export const decrement = createAction("DECREMENT");
export const setStep = createAction("SETSTEP");

// export const increment = (step) => {
//   return { type: INCREMENT, payload: step };
// };

// export const decrement = (step) => {
//   return { type: DECREMENT, payload: step };
// };

// export const setStep = (value) => {
//   return { type: SETSTEP, payload: value };
// };
