import { apiClient } from './apiClient';
import { appConfig } from '../config/appConfig';

export const suppliersService = {
   list: async () => {
     const response = await apiClient.get(appConfig.apiEndpoints.supplier.index);
     return response.data;
   },

  getById: async (supplierId) => {
    const response = await apiClient.get(
      `${appConfig.apiEndpoints.supplier.show}${supplierId}`
    );
    return response.data;
  },

  create: async (payload) => {
    const response = await apiClient.post(
      appConfig.apiEndpoints.supplier.store,
      payload
    );
    return response.data;
  },

  update: async (supplierId, payload) => {
    const response = await apiClient.put(
      `${appConfig.apiEndpoints.supplier.update}${supplierId}`,
      payload
    );
    return response.data;
  },

  delete: async (supplierId) => {
    const response = await apiClient.delete(
      `${appConfig.apiEndpoints.supplier.destroy}${supplierId}`
    );
    return response.data;
  },
};