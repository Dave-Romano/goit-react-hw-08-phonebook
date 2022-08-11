import { createSelector } from "@reduxjs/toolkit";

export const getUserInformation = (state) => state.user.entities;
export const getUserLogeedIn = (state) => {
  console.log("CHECK:", state.user.isLoggedIn);
  return state.user.isLoggedIn;
};
