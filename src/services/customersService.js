import { appConfig } from "../config/appConfig"
import { apiClient } from "./apiClient"

export const customersService = {
    list: async () => {
        const response = await apiClient.get(appConfig.apiEndpoints.customer.index)
        return response.data;
    },
    getById: async (customerId) => {
        const response = await apiClient.get(
            `${appConfig.apiEndpoints.customer.show}${customerId}`)
        return response.data;
    },

    create: async (payload) => {
        const response = await apiClient.post(
            appConfig.apiEndpoints.customer.store,
            payload
        )
        return response.data;
    },
    update: async (customerId, payload) => {
        const response = await apiClient.put(
            `${appConfig.apiEndpoints.customer.update}${customerId}`,
            payload
        )
        return response.data;
    },  

    delete: async (customerId) => {
        const response = await apiClient.delete(
            `${appConfig.apiEndpoints.customer.destroy}${customerId}`
        )
        return response.data;
    },
}