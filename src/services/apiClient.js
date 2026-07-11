import axios from 'axios';
import { appConfig } from '../config/appConfig';

export const apiClient = axios.create({
  baseURL: appConfig.apiBaseUrl,
  timeout: 50000,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('pms_access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('pms_access_token');
      localStorage.removeItem('pms_user');
    }
    return Promise.reject(error);
  }
);
