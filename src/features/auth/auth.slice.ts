import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  AuthState,
  AuthUser,
  LoginResponseData,
  RefreshResponseData,
} from "./types";

const initialState: AuthState = {
  user: null,
  accessToken: null,
  isLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authSuccess(state, action: PayloadAction<LoginResponseData>) {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
      state.isLoading = false;
    },
    logout(state) {
      state.user = null;
      state.accessToken = null;
      state.isLoading = false;
    },
    tokenRefreshed(state, action: PayloadAction<RefreshResponseData>) {
      const { accessToken } = action.payload;
      state.accessToken = accessToken;
    },
    updateUser(state, action: PayloadAction<AuthUser>) {
      const { payload } = action;
      state.user = payload;
      state.isLoading = false;
    },
    authResolved(state) {
      state.isLoading = false;
    },
  },
});

export const { authSuccess, logout, tokenRefreshed, updateUser, authResolved } =
  authSlice.actions;
export default authSlice.reducer;
