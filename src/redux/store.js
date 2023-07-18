import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "todos",
  storage,
  blacklist: ["counter"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false, // Разрешить сохранение несериализуемых данных
  }),
});

export const persistor = persistStore(store);

// import { configureStore } from "@reduxjs/toolkit";
// import { reducer } from "./reducer";

// export const store = configureStore({ reducer });
