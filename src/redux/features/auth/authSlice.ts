import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialStateI {
  noAuth: boolean;
  authenticated: boolean;
  // authUser: any; 
  access: string | null;
  refresh: string | null;
}

const initialState: InitialStateI = {
  noAuth: true,
  authenticated: false,
  // authUser: null,
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
      console.log("payload inside slice", payload)
      // state.authUser = payload.user;
      state.access = payload.access;
      state.refresh = payload.refresh;

      localStorage.setItem("msp_auth_refresh", payload.refresh);
      localStorage.setItem("msp_auth_access", payload.access);
    },

    logout: (state) => {
      // state.authUser = null;
      state.authenticated = false;
      state.noAuth = false;

      localStorage.removeItem("msp_auth_refresh");
      localStorage.removeItem("msp_auth_access");

    },
  },
});

export const { initAuthUser, logout } = AuthSlice.actions;
