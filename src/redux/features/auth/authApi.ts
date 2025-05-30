// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { rootApi } from "../root.api";
import { initAuthUser, logout } from "./authSlice";
import Cookies from "js-cookie";

export const authApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginPayloadI, { email: string; password: string }>({
      query: (body) => ({
        url: "/api/token/access",
        method: "POST",
        body,
      }),
      onQueryStarted(_args, { dispatch, queryFulfilled }) {
        queryFulfilled.then((result) => {
          dispatch(initAuthUser(result.data));
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
            Cookies.set("authenticated", "true");
            Cookies.set("is_admin", data?.data?.is_admin.toString());
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
