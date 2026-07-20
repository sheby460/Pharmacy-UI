import React from "react";
import { Card } from "antd";
import PageShell from "../components/PageShell";
import CustomerStats from "../components/customer/CustomerStats";
import CustomerSearch from "../components/customer/CustomerSearch";
import CustomerTable from "../components/customer/CustomerTable";
import CustomerModal from "../components/customer/CustomerModal";
import { useCustomers } from "../hooks/customer/useCustomers";
import { useCustomerOperations } from "../hooks/customer/useCustomerOperations";


function Customers() {
  const {
    Customers,
    loading,
    searchText,
    setSearchText,
    filteredCustomers,
    fetchCustomers,
    totalCustomers,
    activeCustomers,
  } = useCustomers();

  const {
    loading: operationLoading,
    isModalOpen,
    editingCustomer,
    openAddModal,
    openEditModal,
    closeModal,
    handleSubmit,
    handleDelete,
  } = useCustomerOperations(fetchCustomers);

  return (
    <PageShell
      title="Customers"
      subtitle="Manage trusted partners and service Customers connected to Pharmacy Portal."
    >
      {/* Stats Cards */}
      <CustomerStats
        total={totalCustomers}
        active={activeCustomers}
        searchResults={filteredCustomers.length}
      />

      {/* Main Table */}
      <Card 
        bordered={false} 
        style={{ 
          borderRadius: 12, 
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        }}
      >
        <CustomerSearch
          searchText={searchText}
          onSearchChange={setSearchText}
          onRefresh={fetchCustomers}
          onAdd={openAddModal}
          loading={loading}
        />

        <CustomerTable
          data={filteredCustomers}
          loading={loading}
          onEdit={openEditModal}
          onDelete={handleDelete}
          onAdd={openAddModal}
          searchText={searchText}
        />
      </Card>

      {/* Add/Edit Modal */}
      <CustomerModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
        editingCustomer={editingCustomer}
        loading={operationLoading}
      />
    </PageShell> 
  );
}

export default Customers;