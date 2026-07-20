import React from "react";
import {Table,
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
  PhoneOutlined,
  EnvironmentOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const CustomerTable = ({
  data,
  loading,
  onEdit,
  onDelete,
  onAdd,
  searchText,
}) => {
 const columns = [
  {
    title: "Customer",
    dataIndex: "customer_name",
    key: "customer_name",
    render: (name, record) => (
      <Space>
        <Avatar
          style={{
            backgroundColor: "#0e6e72",
            verticalAlign: "middle",
          }}
        >
          {name?.charAt(0)?.toUpperCase()}
        </Avatar>

    
      </Space>
    ),
    sorter: (a, b) =>
      (a.customer_name || "").localeCompare(
        b.customer_name || ""
      ),
  },

  {
    title: "Contacts",
    dataIndex: "contacts",
    key: "contacts",
    render: (contacts) =>
      contacts ? (
        <Space>
          <PhoneOutlined />
          {contacts}
        </Space>
      ) : (
        "—"
      ),
  },

  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    render: (address) =>
      address ? (
        <Tooltip title={address}>
          <Text ellipsis style={{ maxWidth: 200 }}>
            {address}
          </Text>
        </Tooltip>
      ) : (
        "—"
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
            style={{ color: "#0e6e72" }}
          />
        </Tooltip>

        <Popconfirm
          title="Delete Customer"
          description={`Are you sure you want to delete "${record.customer_name}"?`}
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
          `${range[0]}-${range[1]} of ${total} customers`,
        pageSizeOptions: ['10', '20', '50'],
      }}
      locale={{
        emptyText: (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={
              <span>
                {searchText ? "No customers found matching your search" : "No customers added yet"}
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
                Add Your First Customer
              </Button>
            )}
          </Empty>
        ),
      }}
    />
  );
};

export default CustomerTable;