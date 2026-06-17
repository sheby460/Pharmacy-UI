import { apiClient } from './apiClient';
import { API_ROUTES } from '../config/apiRoutes';

export const dashboardService = {
  summary: async () => {
    const { data } = await apiClient.get(API_ROUTES.dashboard.summary);
    return data;
  },
};
