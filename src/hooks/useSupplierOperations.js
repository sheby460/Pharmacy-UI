import { useState } from "react";
import { message } from "antd";
import { suppliersService } from "../services/suppliersService";

export const useSupplierOperations = (fetchSuppliers) => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSupplier, setEditingSupplier] = useState(null);

  const openAddModal = () => {
    setEditingSupplier(null);
    setIsModalOpen(true);
  };

  const openEditModal = (supplier) => {
    setEditingSupplier(supplier);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingSupplier(null);
  };

  const handleSubmit = async (values, form) => {
    try {
      // Trim string fields
      const trimmedValues = Object.keys(values).reduce((acc, key) => {
        acc[key] = typeof values[key] === 'string' ? values[key].trim() : values[key];
        return acc;
      }, {});

      setLoading(true);

      if (editingSupplier) {
        await suppliersService.update(editingSupplier.id, trimmedValues);
        message.success("Supplier updated successfully");
      } else {
        await suppliersService.create(trimmedValues);
        message.success("Supplier added successfully");
      }

      closeModal();
      form.resetFields();
      await fetchSuppliers();
    } catch (err) {
      message.error(
        err.response?.data?.message || "Failed to save supplier."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await suppliersService.delete(id);
      message.success("Supplier deleted successfully");
      await fetchSuppliers();
    } catch (err) {
      message.error(
        err.response?.data?.message || "Failed to delete supplier."
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    isModalOpen,
    editingSupplier,
    openAddModal,
    openEditModal,
    closeModal,
    handleSubmit,
    handleDelete,
  };
};