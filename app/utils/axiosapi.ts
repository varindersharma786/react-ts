import axios from "axios";
import { logout } from "~/redux/features/authSlice";
import { store } from "~/redux/store";


export const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  withCredentials: true,
});

// Attach Authorization header automatically
api.interceptors.request.use((config) => {
  const token = store.getState().auth.accessToken;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Token expired → auto logout or refresh later
api.interceptors.response.use(
  res => res,
  async (err) => {
    if (err.response?.status === 401) {
      store.dispatch(logout());
    }
    return Promise.reject(err);
  }
);
