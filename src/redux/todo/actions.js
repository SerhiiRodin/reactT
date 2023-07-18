import { CREATETODO } from "./types";

export const createTodo = (todo) => {
  return { type: CREATETODO, payload: todo };
};
