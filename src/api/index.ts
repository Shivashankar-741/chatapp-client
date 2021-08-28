import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:6400/api/v1" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("chatapp")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("chatapp") || "").token}`;
  }
  return req;
});

interface IFormData {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
  photo?: string;
}

export const signUp = (formData: IFormData) =>
  API.post(`/users/signup`, { ...formData, createdAt: new Date() });
export const LogIn = (formData: IFormData) => API.post(`/users/login`, formData);

export const getAllUsers = () => API.get(`/users`);
