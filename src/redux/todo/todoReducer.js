import { createReducer } from "@reduxjs/toolkit";

import { todoInitialState } from "./todoInitialState";
import { createTodo, deleteTodo, updateCompleted } from "./actions";

export const todoReducer = createReducer(todoInitialState, {
  // [createTodo]: (state, action) => {
  //   return {
  //     ...state,
  //     todo: [...state.todo, { ...action.payload }],
  //   };
  // },
  [createTodo]: (state, action) => {
    state.todo.push(action.payload);
  },

  [updateCompleted]: (state, action) => {
    const { id, completed } = action.payload;
    const todoItem = state.todo.find((todo) => todo.id === id);
    if (todoItem) {
      todoItem.completed = completed;
    }
  },

  [deleteTodo]: (state, action) => {
    const id = action.payload;
    state.todo = state.todo.filter((todo) => todo.id !== id);
  },
});

// export const todoReducer = (state = initialState.todo, action) => {
//   switch (action.type) {
//     case CREATETODO:
//       return {
//         ...state,
//         todo: [...state.todo, { ...action.payload }],
//       };

//     default:
//       return state;
//   }
// };
