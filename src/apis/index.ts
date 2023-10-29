import axios from "axios";
import { API_ENDPOINT_LOCAL_SERVER } from "@/constants";
import { getAccessToken } from "@/utilities/tokenHelper";

// Create an Axios instance
const api = axios.create({
  baseURL: API_ENDPOINT_LOCAL_SERVER,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    console.log({ token });
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // Do something with the response data
    // For example, you can modify the response data or handle errors
    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default api;
