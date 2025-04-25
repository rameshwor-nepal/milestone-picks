import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { initAuthUser, logout } from "./auth/authSlice";

import { BASE_API_URL } from "@/redux/utils/urlConfig";

interface LoginPayloadI {
  refresh: string;
  access: string;
  is_admin: boolean;
  is_verified: boolean;
  username: string;
  email: string;
}

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_API_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("msp_auth_access") || "";
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // Handle 401 Unauthorized errors
  if (result.error && result.error.status === 401) {
    // Get the refresh token from localStorage
    const refreshToken = localStorage.getItem("msp_auth_refresh") || "";

    if (!refreshToken) {
      api.dispatch(logout());
      return result;
    }

    const refreshResult = await baseQuery(
      {
        url: "/api/token/refresh/",
        method: "POST",
        body: { refresh: refreshToken },
      },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      api.dispatch(initAuthUser(refreshResult.data as LoginPayloadI));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
      api.dispatch(rootApi.util.resetApiState());
      return {
        error: {
          status: 401,
          data: { message: "Session expired. Please log in again." },
        },
      };
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
  ],
});