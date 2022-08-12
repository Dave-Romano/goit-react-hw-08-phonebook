import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  getContacts,
  postContacts,
  deleteContact,
} from "./contacts-operations";

const entities = createReducer([], {
  [getContacts.fulfilled]: (_, action) => action.payload,
  [postContacts.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContact.fulfilled]: (state, action) => {
    console.log("JERONIMO:", action.payload);
    return state.filter((e) => e.id !== action.payload);
  },
});

const isLoading = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
  [postContacts.pending]: () => true,
  [postContacts.fulfilled]: () => false,
  [postContacts.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
  [getContacts.rejected]: (_, action) => action.payload,
  [getContacts.pending]: () => null,
  [postContacts.rejected]: (_, action) => action.payload,
  [postContacts.pending]: () => null,
  [deleteContact.rejected]: (_, action) => action.payload,
  [deleteContact.pending]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
