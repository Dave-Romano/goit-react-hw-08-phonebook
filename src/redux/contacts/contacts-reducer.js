import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  getContacts,
  postContacts,
  deleteContact,
  updateContact,
} from "./contacts-operations";

const entities = createReducer([], {
  [getContacts.fulfilled]: (_, action) => action.payload,
  [postContacts.fulfilled]: (state, { payload }) =>
    state.map((item) => {
      if (item.name === payload.name) {
        alert("This name is already exist in contact list");
        return state;
      } else if (item.number === payload.number) {
        alert("This number is already exist in contact list");
        return state;
      } else {
        return [...state, payload];
      }
    }),
  // [...state, action.payload]
  [deleteContact.fulfilled]: (state, action) => {
    // console.log("JERONIMO:", action.payload);
    return state.filter((e) => e.id !== action.payload);
  },
  [updateContact.fulfilled]: (state, { payload }) => {
    console.log("PATCHING-REDUCER:", payload);
    return state.map((item) => (item.id !== payload.id ? item : payload));
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
  [updateContact.pending]: () => true,
  [updateContact.fulfilled]: () => false,
  [updateContact.rejected]: () => false,
});

const error = createReducer(null, {
  [getContacts.rejected]: (_, action) => action.payload,
  [getContacts.pending]: () => null,
  [postContacts.rejected]: (_, action) => action.payload,
  [postContacts.pending]: () => null,
  [deleteContact.rejected]: (_, action) => action.payload,
  [deleteContact.pending]: () => null,
  [updateContact.rejected]: (_, action) => action.payload,
  [updateContact.pending]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
