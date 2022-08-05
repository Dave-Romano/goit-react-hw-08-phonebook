import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as apiFuncs from "../../api/index";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const getUserInfo = createAsyncThunk("user/Get", async () => {
  const userInfo = await apiFuncs.getUserInfo();
  return userInfo;
});

export const loginUser = createAsyncThunk("user/Login", async (data) => {
  const userData = await apiFuncs.loginUser(data);
  token.set(userData.token);
  console.log("TOKEN LOGGED IN:", axios.defaults.headers.common.Authorization);
  return userData;
});

export const logoutUser = createAsyncThunk("user/Logout", async () => {
  const userData = await apiFuncs.logoutUser();
  token.unset();
  console.log("TOKEN LOGGED OUT:", axios.defaults.headers.common.Authorization);

  return userData;
});
