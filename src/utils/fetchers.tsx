import { getAuth } from "$lib";
import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
  transformRequest: [
    ...(Array.isArray(axios.defaults.transformRequest) ? axios.defaults.transformRequest : []),
    (data, headers) => {
      if (typeof document !== "undefined") {
        headers["Authorization"] = `Bearer ${getAuth()}`;
      }
      return data;
    },
  ],
});

export const $get = async (route: string) => {
  const { data } = await AxiosInstance.get(route);
  return data;
};

export const $post = async (route = "", arg: any) => {
  const { data } = await AxiosInstance.post(route, arg);
  return data;
};

export const $put = async (route = "", arg = {}) => {
  const { data } = await AxiosInstance.put(route, arg);
  return data;
};

export const $delete = async (route = "", arg = {}) => {
  const { data } = await AxiosInstance.delete(route, arg);
  return data;
};

export const $patch = async (route = "", arg = {}) => {
  const { data } = await AxiosInstance.patch(route, arg);
  return data;
};
