import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contacts-reducer";
import { filterReducer } from "./filter/filter-reducer";
import usersReducer from "./users/users-reducer";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    user: usersReducer,
  },
});

export default store;
