import axios, { AxiosError, AxiosResponse } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const request = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor
request.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Handle unauthorized error
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default request;
