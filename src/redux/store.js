import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  REGISTER,
  PURGE,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "todos",
  storage,
  whitelist: ["todo"],
};

// const customMiddleware = (state) => {
//   return (next) => {
//     return (action) => {
//       if (typeof action === "function") {
//         action(state.dispatch);
//         return;
//       }
//       console.log(action);
//       return next(action);
//     };
//   };
// };

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // customMiddleware,
  ],
});

export const persistor = persistStore(store);

// import { configureStore } from "@reduxjs/toolkit";
// import { reducer } from "./reducer";

// export const store = configureStore({ reducer });
