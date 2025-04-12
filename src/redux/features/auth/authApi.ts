// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { rootApi } from "../root.api";
import { initAuthUser, logout } from "./authSlice";

export const authApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: { email: string; password: string }) => ({
        url: "/api/token/access",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
        url: "/api/token/refresh/",
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
    signUp: builder.mutation<void, SignUpI>({
      query: (body) => ({
        url: "/user/register/",
        method: "POST",
        body
      })
    }),
    forgetPassword: builder.mutation<void, Omit<LoginI, 'password'>>({
      query: (body) => ({
        url: "/user/forgot-password/",
        method: "POST",
        body
      })
    }),
    verifyOtp: builder.mutation<void, Omit<ResetPasswordI, 'new_password'>>({
      query: (body) => ({
        url: "/user/verify-otp/",
        method: "POST",
        body
      })
    }),
    resetPassword: builder.mutation<void, ResetPasswordI>({
      query: (body) => ({
        url: "/user/reset-password/",
        method: "POST",
        body
      })
    }),

  }),
});

export const {
  useLoginMutation,
  useVerifyTokenMutation,
  useSignUpMutation,
  useForgetPasswordMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
} = authApi;
