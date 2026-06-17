import { apiClient } from './apiClient';
import { API_ROUTES } from '../config/apiRoutes';

export const reportsService = {
  list: async () => {
    const { data } = await apiClient.get(API_ROUTES.reports.list);
    return data;
  },
  getById: async (recordId) => {
    const { data } = await apiClient.get(API_ROUTES.reports.detail(recordId));
    return data;
  },
};
