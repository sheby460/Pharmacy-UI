import { useState } from "react";
import { message } from "antd";
import { customersService } from "../../services/customersService";

export const useCustomerOperations = (fetchCustomers) => {
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCustomer, setEditingCustomer] = useState(null);

    const openAddModal = () => {
        setEditingCustomer(null);
        setIsModalOpen(true);
    };
    const openEditModal = (customer) => {
        setEditingCustomer(customer);
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
        setEditingCustomer(null);
    };

    const handleSubmit = async (values, form) => {
        try {
            // Trim string fields
            const trimmedValues = Object.keys(values).reduce((acc, key) => {
                acc[key] = typeof values[key] === 'string' ? values[key].trim() : values[key];
                return acc;
            }, {});
            setLoading(true);

            if (editingCustomer) {
                await customersService.update(editingCustomer.id, trimmedValues);
                message.success("Customer updated successfully");
            } else {
                await customersService.create(trimmedValues);
                message.success("Customer added successfully");
            }
            closeModal();
            form.resetFields();
            await fetchCustomers();
        }   catch (err) {
            message.error(
                err.response?.data?.message || "Failed to save customer."
            );
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            setLoading(true);
            await customersService.delete(id);
            message.success("Customer deleted successfully");
            await fetchCustomers();
        } catch (err) {
            message.error(
                err.response?.data?.message || "Failed to delete customer."
            );
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        isModalOpen,
        editingCustomer,
        openAddModal,
        openEditModal,
        closeModal,
        handleSubmit,
        handleDelete
    };
};