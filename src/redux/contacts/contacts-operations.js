import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apiFuncs from "../../api/index";

export const getContacts = createAsyncThunk("contacts/Get", async () => {
  const contacts = await apiFuncs.getData();
  return contacts;
});

export const postContacts = createAsyncThunk("contacts/Post", async (data) => {
  const contact = await apiFuncs.postData(data);
  return contact;
});

export const deleteContact = createAsyncThunk("contacts/Delete", async (id) => {
  const contacts = await apiFuncs.deleteData(id);
  return contacts;
});
