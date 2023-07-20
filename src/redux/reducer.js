import { combineReducers } from "redux";

import { todoReducer } from "./todo/todoReducer";
import { counterReducer } from "./counter/counterSlice";
import { newsReducer } from "./news/newssSice";
import { productReducer } from "./products/productsSlice";

export const reducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  news: newsReducer,
  products: productReducer,
});
