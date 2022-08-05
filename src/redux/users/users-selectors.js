import { createSelector } from "@reduxjs/toolkit";

export const getUserInformation = (state) => state.user.entities;
export const getUserLogeedIn = (state) => state.user.isLoggedIn;
