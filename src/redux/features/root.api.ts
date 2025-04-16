import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";
import { BASE_API_URL } from "@/redux/utils/urlConfig";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'
import { initAuthUser, logout } from "./auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_API_URL,
  prepareHeaders: (headers, { getState }) => {
    // const token = (getState() as RootState).auth.access;
    const token = localStorage.getItem("msp_auth_access") || "";
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
  // mode: 'no-cors'
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // try to get a new token
    const authToken = localStorage.getItem("msp_auth_refresh") || "";
    const refreshResult = await baseQuery(
      {
        url: "/api/token/refresh/",
        method: "POST",
        body: { refresh: authToken },
      },
      api,
      extraOptions
    );
    if (refreshResult.data) {
      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
      api.dispatch(initAuthUser(refreshResult.data as LoginPayloadI));
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

export const rootApi = createApi({
  reducerPath: "root",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  tagTypes: [
    "GeneralInfo",
    "FaqContent",
    "SportCategory",
    "Testimonials",
    "Matches",
    "Sports",
    "Predictions",
  ]
});