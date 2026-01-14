import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/auth.slice";
import globalErrorReducer from "./store/global-error.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    globalError: globalErrorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
