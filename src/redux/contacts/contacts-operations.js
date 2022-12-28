import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContacts = createAsyncThunk("contacts/Get", async () => {
  const { data } = await axios.get("/contacts");
  console.log("DATA FROM SERVER:", data);
  return data;
});

export const postContacts = createAsyncThunk(
  "contacts/Post",
  async (contact, { getState }) => {
    const state = getState();
    const isfound = state.find(
      (item) => item.name === contact.name || item.number === contact.number
    );

    const { data } = await axios.post("/contacts", contact);
    // return data;

    //    if (item.name === contact.name) {
    //      alert("This name is already exist in contact list");
    //      return state;
    //    } else if (item.number === contact.number) {
    //      alert("This number is already exist in contact list");
    //      return state;
    //    } else {
    //
    //    }
  }
);

export const deleteContact = createAsyncThunk("contacts/Delete", async (id) => {
  // console.log("CONTACT ID:", id);
  await axios.delete(`/contacts/${id}`);

  return id;
});

export const updateContact = createAsyncThunk(
  "contacts/Update",
  async (test) => {
    console.log("FETCH REQUEST:", test.contact);
    const { data } = await axios.patch(`/contacts/${test.id}`, test.contact);
    return data;
  }
);
