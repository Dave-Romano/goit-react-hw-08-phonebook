import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { getUserInfo } from "./users-operations";

const entities = createReducer(
  {},
  {
    [getUserInfo.fulfilled]: (_, action) => action.payload,
  }
);

const isLoading = createReducer(false, {
  [getUserInfo.pending]: () => true,
  [getUserInfo.fulfilled]: () => false,
  [getUserInfo.rejected]: () => false,
});

const error = createReducer(null, {
  [getUserInfo.rejected]: (_, action) => action.payload,
  [getUserInfo.pending]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
