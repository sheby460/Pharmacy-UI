// src/components/Supplier/SupplierTable.jsx
import React from "react";
import {
  Table,
  Button,
  Space,
  Avatar,
  Tooltip,
  Typography,
  Empty,
  Popconfirm,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  IdcardOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const SupplierTable = ({
  data,
  loading,
  onEdit,
  onDelete,
  onAdd,
  searchText,
}) => {
  const columns = [
    {
      title: "Supplier",
      dataIndex: "name",
      key: "name",
      render: (name, record) => (
        <Space>
          <Avatar
            style={{
              backgroundColor: '#0e6e72',
              verticalAlign: 'middle',
            }}
            size="default"
          >
            {name?.charAt(0).toUpperCase()}
          </Avatar>
          <div>
            <div style={{ fontWeight: 500 }}>{name}</div>
            {record.tax_id && (
              <Text type="secondary" style={{ fontSize: 12 }}>
                <IdcardOutlined /> Tax ID: {record.tax_id}
              </Text>
            )}
          </div>
        </Space>
      ),
      sorter: (a, b) => a.name?.localeCompare(b.name),
    },
    {
      title: "Contact Person",
      dataIndex: "contact_person",
      key: "contact_person",
      render: (contact) => contact || "—",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (email) => (
        email ? (
          <a href={`mailto:${email}`} style={{ color: '#0e6e72' }}>
            <MailOutlined /> {email}
          </a>
        ) : "—"
      ),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      render: (phone) => (
        phone ? (
          <a href={`tel:${phone}`}>
            <PhoneOutlined /> {phone}
          </a>
        ) : "—"
      ),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (address) => (
        address ? (
          <Tooltip title={address}>
            <Space>
              <EnvironmentOutlined />
              <Text ellipsis style={{ maxWidth: 150 }}>
                {address}
              </Text>
            </Space>
          </Tooltip>
        ) : "—"
      ),
    },
    {
      title: "Actions",
      key: "actions",
      width: 120,
      render: (_, record) => (
        <Space size="small">
          <Tooltip title="Edit">
            <Button
              type="text"
              icon={<EditOutlined />}
              onClick={() => onEdit(record)}
              style={{ color: '#0e6e72' }}
            />
          </Tooltip>
          <Popconfirm
            title="Delete Supplier"
            description={`Are you sure you want to delete "${record.name}"?`}
            onConfirm={() => onDelete(record.id)}
            okText="Yes"
            cancelText="No"
            okButtonProps={{ danger: true }}
          >
            <Tooltip title="Delete">
              <Button
                type="text"
                danger
                icon={<DeleteOutlined />}
              />
            </Tooltip>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey="id"
      loading={loading}
      pagination={{
        pageSize: 10,
        showSizeChanger: true,
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} of ${total} suppliers`,
        pageSizeOptions: ['10', '20', '50'],
      }}
      locale={{
        emptyText: (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={
              <span>
                {searchText ? "No suppliers found matching your search" : "No suppliers added yet"}
              </span>
            }
          >
            {!searchText && (
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={onAdd}
                style={{
                  background: '#0e6e72',
                  borderColor: '#0e6e72',
                  marginTop: 8,
                }}
              >
                Add Your First Supplier
              </Button>
            )}
          </Empty>
        ),
      }}
    />
  );
};

export default SupplierTable;