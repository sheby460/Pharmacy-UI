import { apiClient } from './apiClient';
import { API_ROUTES } from '../config/apiRoutes';

export const suppliersService = {
  list: async () => {
    const { data } = await apiClient.get(API_ROUTES.suppliers.list);
    return data;
  },
  getById: async (supplierId) => {
    const { data } = await apiClient.get(API_ROUTES.suppliers.detail(supplierId));
    return data;
  },
  update: async (supplierId, payload) => {
    const { data } = await apiClient.put(API_ROUTES.suppliers.detail(supplierId), payload);
    return data;
  },
};
