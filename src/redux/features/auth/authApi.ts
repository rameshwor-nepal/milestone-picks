// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { rootApi } from "../root.api";
import { initAuthUser, logout } from "./authSlice";

export const authApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: { email: string; password: string }) => ({
        url: "/token/",
        method: "POST",
        body,
      }),
      onQueryStarted(_args, { dispatch, queryFulfilled }) {
        queryFulfilled.then((data) => {
          dispatch(initAuthUser(data.data));
        });
      },
    }),
    verifyToken: builder.mutation({
      query: (body: { refresh: string }) => ({
        url: "/verify-token/",
        method: "POST",
        headers: {},
        body,
      }),
      onQueryStarted(__args, { dispatch, queryFulfilled }) {
        queryFulfilled
          .then((data) => {
            dispatch(initAuthUser(data.data));
          })
          .catch(() => {
            dispatch(logout());
            dispatch(rootApi.util.resetApiState());
          });
      },
    }),
  }),
});

export const { useLoginMutation, useVerifyTokenMutation } = authApi;
