import { createSlice } from "@reduxjs/toolkit";
import { counterInitialState } from "./counterInitialState";

export const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const { increment, decrement, setStep } = counterSlice.actions;
