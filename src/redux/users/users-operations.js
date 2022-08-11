import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { token } from "../../api/index";

export const registerUser = createAsyncThunk(
  "user/Get",
  async (userData) => await axios.post("/users/signup", userData)
);

export const getUserInfo = createAsyncThunk("user/Get", async (_, thunkAPI) => {
  const thunk = thunkAPI.getState().user.userToken;

  console.log("THUNKAPI:", thunk);
  if (thunk !== null) {
    token.set(thunk);
    const { data } = await axios.get("/users/current");
    return data;
  }
  throw thunkAPI.rejectWithValue(null);
});

export const loginUser = createAsyncThunk("user/Login", async (userData) => {
  const { data } = await axios.post("/users/login", userData);
  token.set(data.token);
  console.log("TOKEN LOGGED IN:", axios.defaults.headers.common.Authorization);
  return data;
});

export const logoutUser = createAsyncThunk("user/Logout", async () => {
  const { data } = await axios.post("/users/logout");
  token.unset();
  console.log("TOKEN LOGGED OUT:", axios.defaults.headers.common.Authorization);

  return data;
});
