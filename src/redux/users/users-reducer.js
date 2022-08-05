import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as user from "./users-operations";

const userData = { email: null, name: null };

const userInfo = createReducer(userData, {
  [user.getUserInfo.fulfilled]: (_, action) => action.payload,
  [user.loginUser.fulfilled]: (_, action) => {
    console.log("REDUSER: ", action.payload);
    return action.payload.user;
  },
  [user.logoutUser.fulfilled]: () => userData,
});

const userToken = createReducer(null, {
  [user.loginUser.fulfilled]: (_, { payload }) => payload.token,
  [user.logoutUser.fulfilled]: () => null,
});

const isLoggedIn = createReducer(false, {
  [user.loginUser.fulfilled]: () => true,
  [user.logoutUser.fulfilled]: () => false,
});

const isLoading = createReducer(false, {
  [user.getUserInfo.pending]: () => true,
  [user.getUserInfo.fulfilled]: () => false,
  [user.getUserInfo.rejected]: () => false,
  [user.loginUser.pending]: () => true,
  [user.loginUser.fulfilled]: () => false,
  [user.loginUser.rejected]: () => false,
  [user.logoutUser.pending]: () => true,
  [user.logoutUser.fulfilled]: () => false,
  [user.logoutUser.rejected]: () => false,
});

const error = createReducer(null, {
  [user.getUserInfo.rejected]: (_, action) => action.payload,
  [user.getUserInfo.pending]: () => null,
  [user.loginUser.rejected]: (_, action) => action.payload,
  [user.loginUser.pending]: () => null,
  [user.logoutUser.rejected]: (_, action) => action.payload,
  [user.logoutUser.pending]: () => null,
});

export default combineReducers({
  userToken,
  userInfo,
  isLoggedIn,
  isLoading,
  error,
});
