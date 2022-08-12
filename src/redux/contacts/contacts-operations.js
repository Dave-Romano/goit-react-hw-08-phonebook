import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContacts = createAsyncThunk("contacts/Get", async () => {
  const { data } = await axios.get("/contacts");
  console.log("DATA FROM SERVER:", data);
  return data;
});

export const postContacts = createAsyncThunk(
  "contacts/Post",
  async (contact) => {
    const { data } = await axios.post("/contacts", contact);
    return data;
  }
);

export const deleteContact = createAsyncThunk("contacts/Delete", async (id) => {
  console.log("CONTACT ID:", id);
  await axios.delete(`/contacts/${id}`);

  return id;
});

export const updateContact = createAsyncThunk("contacts/Update", async (id) => {
  const { data } = await axios.patch(`/contacts/${id}`);
  return data;
});
