import { message } from "antd";
import axios, { AxiosRequestConfig } from "axios";

import env from "@/constants/env";

export const axiosInstance = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_DEPLOYMENT_URL,
  baseURL: env.API_LOCAL_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Credentials": "true",
    accept: "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) message.error(error.response.data.message);
    return Promise.reject(error);
  }
);

export type DefaultResponse<T> = {
  status: number;
  message?: string;
  data: T;
};

export const get = async <T>(url: string, option?: AxiosRequestConfig) => {
  const response = await axiosInstance.get(url, option);

  return response.data as DefaultResponse<T>;
};

export const post = async <T, K>(url: string, data?: K, option?: AxiosRequestConfig) => {
  const response = await axiosInstance.post(url, data, option);

  return response.data as DefaultResponse<T>;
};

export const put = async <T, K>(url: string, data?: K, option?: AxiosRequestConfig) => {
  const response = await axiosInstance.put(url, data, option);
  return response.data as DefaultResponse<T>;
};

export const remove = async <T>(url: string, option?: AxiosRequestConfig) => {
  const response = await axiosInstance.delete(url, option);
  return response.data as DefaultResponse<T>;
};
