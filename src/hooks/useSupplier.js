import { useState, useEffect, useCallback } from "react";
import { message } from "antd";
import { suppliersService } from "../services/suppliersService";

export const useSuppliers = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const fetchSuppliers = useCallback(async () => {
    try {
      setLoading(true);
      const response = await suppliersService.list();
      setSuppliers(response.data || []);
    } catch (err) {
      message.error("Failed to fetch suppliers.");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSuppliers();
  }, [fetchSuppliers]);

  const filteredSuppliers = suppliers.filter((supplier) =>
    supplier.supplier_name?.toLowerCase().includes(searchText.toLowerCase()) ||
    supplier.location?.toLowerCase().includes(searchText.toLowerCase()) ||
    supplier.address?.includes(searchText) ||
    supplier.contacts?.toLowerCase().includes(searchText.toLowerCase())
  );

  const totalSuppliers = suppliers.length;
  const activeSuppliers = suppliers.filter(s => s.status !== 'inactive').length;

  return {
    suppliers,
    loading,
    searchText,
    setSearchText,
    filteredSuppliers,
    fetchSuppliers,
    totalSuppliers,
    activeSuppliers,
  };
};