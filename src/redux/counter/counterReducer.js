import { initialState } from "../initialState";
import { DECREMENT, INCREMENT, SETSTEP } from "./types";



export const counterReducer = (state = initialState.counter, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };
    case SETSTEP:
      return {
        ...state,
        step: action.payload,
      };

    default:
      return state;
  }
};
