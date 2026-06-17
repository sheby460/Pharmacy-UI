import { apiClient } from './apiClient';
import { appConfig } from '../config/appConfig';

export const authService = {
  async login(username, password) {
    try {
  
      const response = await apiClient.post(
        appConfig.apiEndpoints.user.login,
        { username, password }
      );

      return response.data;
    } catch (error) {
      return {
        status: false,
        message:
          error.response?.data?.message || "Login failed, try again",
      };
    }
  },

  async logout() {
    try {
      const response = await apiClient.post(
        appConfig.apiEndpoints.user.logout
      );

      return response.data;
    } catch (error) {
      return {
        status: false,
        message:
          error.response?.data?.message || "Logout failed, try again",
      };
    }
  },

  async register(userData) {
    try {
      const response = await apiClient.post(
        appConfig.apiEndpoints.user.register,
        userData
      );

      return response.data;
    } catch (error) {
      return {
        status: false,
        message:
          error.response?.data?.message || "Registration failed, try again",
      };
    }
  },

};
