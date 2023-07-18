import { createReducer } from "@reduxjs/toolkit";

import { decrement, increment, setStep } from "./actions";
import { counterInitialState } from "./counterInitialState";

export const counterReducer = createReducer(counterInitialState, {
  [increment]: (state, action) => {
    return {
      ...state,
      value: state.value + action.payload,
    };
  },
  [decrement]: (state, action) => {
    return {
      ...state,
      value: state.value - action.payload,
    };
  },
  [setStep]: (state, action) => {
    return {
      ...state,
      step: action.payload,
    };
  },
});

// export const counterReducer = (state = initialState.counter, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         value: state.value + action.payload,
//       };
//     case DECREMENT:
//       return {
//         ...state,
//         value: state.value - action.payload,
//       };
//     case SETSTEP:
//       return {
//         ...state,
//         step: action.payload,
//       };

//     default:
//       return state;
//   }
// };
