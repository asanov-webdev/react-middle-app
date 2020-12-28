import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authorizationReducer from "slices/authorizationSlice";
import loadingReducer from "slices/loadingSlice";

export const store = configureStore({
  reducer: {
    authorization: authorizationReducer,
    loading: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
