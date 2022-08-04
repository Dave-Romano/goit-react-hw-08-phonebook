import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apiFuncs from "../../api/index";

export const getUserInfo = createAsyncThunk("user/Get", async () => {
  const userInfo = await apiFuncs.getUserInfo();
  return userInfo;
});
