import { apiClient } from './apiClient';
import { API_ROUTES } from '../config/apiRoutes';

export const drugsService = {
  list: async () => {
    const { data } = await apiClient.get(API_ROUTES.drugs.list);
    return data;
  },
  create: async (payload) => {
    const { data } = await apiClient.post(API_ROUTES.drugs.create, payload);
    return data;
  },
  detail: async (id) => {
    const { data } = await apiClient.get(API_ROUTES.drugs.detail(id));
    return data;
  },
};
