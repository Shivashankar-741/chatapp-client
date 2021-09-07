import axios from 'axios';
// import { baseURL } from "src/config/config";

// const API = axios.create({ baseURL: 'http://localhost:6400/api/v1' });
const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('chatapp')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('chatapp') || '').token}`;
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

interface IPostMessageType {
  senderId: string;
  receiverId: string;
  message: string;
}

interface personalNotification {
  notificationSenderId: string;
  notificationReceiverId: string;
}

export const signUp = (formData: IFormData) =>
  API.post(`/users/signup`, { ...formData, createdAt: new Date() });
export const LogIn = (formData: IFormData) => API.post(`/users/login`, formData);

export const getAllUsers = () => API.get(`/users`);

export const getAllMessages = () => API.get(`/messages`);
export const postMessageData = (data: IPostMessageType) => API.post(`/messages`, data);

export const getNotification = () => API.get(`/personalnotifications`);
export const postNotification = (personalNotification: personalNotification) =>
  API.post(`/personalnotifications`, personalNotification);
export const updateNotification = (id: string) => API.patch(`/personalnotifications`, { id });
