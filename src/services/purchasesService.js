import { apiClient } from './apiClient';
import { API_ROUTES } from '../config/apiRoutes';

export const purchasesService = {
  list: async () => {
    const { data } = await apiClient.get(API_ROUTES.purchases.list);
    return data;
  },
  create: async (payload) => {
    const { data } = await apiClient.post(API_ROUTES.purchases.create, payload);
    return data;
  },
  updateStatus: async (purchaseId, payload) => {
    const { data } = await apiClient.patch(API_ROUTES.purchases.detail(purchaseId), payload);
    return data;
  },
};
