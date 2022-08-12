import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contacts-reducer";
import { filterReducer } from "./filter/filter-reducer";
import usersReducer from "./users/users-reducer";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["userInfo", "userToken"],
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    user: persistReducer(userPersistConfig, usersReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
