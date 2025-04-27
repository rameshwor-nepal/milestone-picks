// authSlice.ts
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface InitialStateI {
  noAuth: boolean;
  authenticated: boolean;
  access: string | null;
  refresh: string | null;
  is_admin: boolean;
  is_verified: boolean;
  username: string | null;
  email: string | null;
}

const initialState: InitialStateI = {
  noAuth: true,
  authenticated: false,
  access: null,
  refresh: null,
  is_admin: false,
  is_verified: false,
  username: null,
  email: null,
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    initAuthUser: (state, { payload }: PayloadAction<LoginPayloadI>) => {
      state.noAuth = false;
      state.authenticated = true;
      state.access = payload.access;
      state.refresh = payload.refresh;
      state.is_admin = payload.is_admin;
      state.is_verified = payload.is_verified;
      state.username = payload.username;
      state.email = payload.email;

      // Set cookies for middleware access
      Cookies.set("msp_auth_refresh", payload.refresh);
      Cookies.set("msp_auth_access", payload.access);
      Cookies.set("authenticated", "true");
      Cookies.set("is_admin", payload.is_admin.toString());
    },
    logout: (state) => {
      state.authenticated = false;
      state.noAuth = true;
      state.access = null;
      state.refresh = null;
      state.is_admin = false;
      state.is_verified = false;
      state.username = null;
      state.email = null;

      // Clear all cookies
      Cookies.remove("msp_auth_refresh");
      Cookies.remove("msp_auth_access");
      Cookies.remove("authenticated");
      Cookies.remove("is_admin");
    },
  },
});

export const { initAuthUser, logout } = AuthSlice.actions;