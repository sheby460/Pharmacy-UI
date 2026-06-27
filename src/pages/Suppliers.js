import React from "react";
import { Card } from "antd";
import PageShell from "../components/PageShell";
import { useSuppliers } from "../hooks/useSupplier";
import { useSupplierOperations } from "../hooks/useSupplierOperations";
import SupplierStats from "../components/Supplier/SupplierStats";
import SupplierSearch from "../components/Supplier/SupplierSearch";
import SupplierTable from "../components/Supplier/SupplierTable";
import SupplierModal from "../components/Supplier/SupplierModal";

function Suppliers() {
  const {
    suppliers,
    loading,
    searchText,
    setSearchText,
    filteredSuppliers,
    fetchSuppliers,
    totalSuppliers,
    activeSuppliers,
  } = useSuppliers();

  const {
    loading: operationLoading,
    isModalOpen,
    editingSupplier,
    openAddModal,
    openEditModal,
    closeModal,
    handleSubmit,
    handleDelete,
  } = useSupplierOperations(fetchSuppliers);

  return (
    <PageShell
      title="Suppliers"
      subtitle="Manage trusted partners and service suppliers connected to Pharmacy Portal."
    >
      {/* Stats Cards */}
      <SupplierStats
        total={totalSuppliers}
        active={activeSuppliers}
        searchResults={filteredSuppliers.length}
      />

      {/* Main Table */}
      <Card 
        bordered={false} 
        style={{ 
          borderRadius: 12, 
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        }}
      >
        <SupplierSearch
          searchText={searchText}
          onSearchChange={setSearchText}
          onRefresh={fetchSuppliers}
          onAdd={openAddModal}
          loading={loading}
        />

        <SupplierTable
          data={filteredSuppliers}
          loading={loading}
          onEdit={openEditModal}
          onDelete={handleDelete}
          onAdd={openAddModal}
          searchText={searchText}
        />
      </Card>

      {/* Add/Edit Modal */}
      <SupplierModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
        editingSupplier={editingSupplier}
        loading={operationLoading}
      />
    </PageShell>
  );
}

export default Suppliers;