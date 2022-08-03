import { createSelector } from "@reduxjs/toolkit";
import { getFilter } from "../filter/filter-selectors";

export const getContacts = (state) => state.contacts.entities;
// export const getFilteredContacts = (state) =>
//   state.contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(state.filter.toLocaleLowerCase())
//   );

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    )
);
