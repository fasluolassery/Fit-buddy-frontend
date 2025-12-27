import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserRole } from "../../shared/types/roles";

export interface AuthUser {
  _id: string;
  email: string;
  role: UserRole;
}

interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  accessToken: string | null;
}

type AuthSuccessPayload = {
  user: AuthUser;
  accessToken: string;
};

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authSuccess(state, action: PayloadAction<AuthSuccessPayload>) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
    },
    tokenRefreshed(state, action: PayloadAction<{ accessToken: string }>) {
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;
    },
    updateUser(state, action: PayloadAction<AuthUser>) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
  },
});

export const { authSuccess, logout, tokenRefreshed, updateUser } =
  authSlice.actions;
export default authSlice.reducer;
