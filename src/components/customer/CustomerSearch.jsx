import React from "react";
import { Input, Button, Space, Tooltip, Flex } from "antd";
import { SearchOutlined, ReloadOutlined, PlusOutlined } from "@ant-design/icons";

const CustomerSearch = ({
  searchText,
  onSearchChange,
  onRefresh,
  onAdd,
  loading,
}) => {
  return (
    <Flex justify="space-between" align="center" style={{ marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
      <Input
        placeholder="Search customers by name, email, or phone..."
        prefix={<SearchOutlined style={{ color: '#bfbfbf' }} />}
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ width: 320, borderRadius: 8 }}
        allowClear
        size="middle"
      />
      <Space>
        <Tooltip title="Refresh data">
          <Button
            icon={<ReloadOutlined />}
            onClick={onRefresh}
            loading={loading}
          />
        </Tooltip>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={onAdd}
          style={{
            background: '#0e6e72',
            borderColor: '#0e6e72',
            borderRadius: 8,
            fontWeight: 500,
            boxShadow: '0 2px 8px rgba(14, 110, 114, 0.3)',
          }}
        >
          Add Customer
        </Button>
      </Space>
    </Flex>
  );
};

export default CustomerSearch;