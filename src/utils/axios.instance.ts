import axios from "axios";
import { signOut } from "next-auth/react";
import { getToken } from "./session.token";
export const ErrorCodes = {
  INVALID_TOKEN: 419,
  SESSION_EXPIRED: 401,
};

export const LogoutCodes: number[] = [
  ErrorCodes.INVALID_TOKEN,
  ErrorCodes.SESSION_EXPIRED,
];


export const $axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
$axios.interceptors.request.use(async (config: any) => {
  const token = await getToken();

  if (!config.headers) config.headers = {};
  if (token) {
    (config.headers as any).Authorization = `Bearer ${token}`;
  }
  (config.headers as any)["Accept-Language"] = "en";
  return config;
});

$axios.interceptors.response.use(
  (response: any) => {
    return response;
  },
  async (error: any) => {
    const originalRequest = error.config || {};
    const status = error?.response?.status as number | undefined;
    const code = error?.response?.data?.code as number | undefined;

    const shouldLogout =
      (typeof status === "number" && LogoutCodes.includes(status)) ||
      (typeof code === "number" && LogoutCodes.includes(code));

    if (shouldLogout && !originalRequest._retry) {
      originalRequest._retry = true; // prevent multiple signOut calls
      await signOut({ callbackUrl: "/" });
    }

    return Promise.reject(error);
  }
);
