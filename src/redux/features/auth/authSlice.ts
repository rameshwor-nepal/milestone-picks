import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialStateI {
  noAuth: boolean;
  authenticated: boolean;
  access: string | null;
  refresh: string | null;
}

const initialState: InitialStateI = {
  noAuth: true,
  authenticated: false,
  access: null,
  refresh: null,
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

      localStorage.setItem("msp_auth_refresh", payload.refresh);
      localStorage.setItem("msp_auth_access", payload.access);
    },
    logout: (state) => {
      state.authenticated = false;
      state.noAuth = false;
      state.access = null;
      state.refresh = null;

      localStorage.removeItem("msp_auth_refresh");
      localStorage.removeItem("msp_auth_access");
    },
  },
});

export const { initAuthUser, logout } = AuthSlice.actions;