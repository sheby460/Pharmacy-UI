import React, { useEffect } from "react";
import { Modal, Form, Input, Row, Col, Typography } from "antd";
import {
  UserOutlined,
  PhoneOutlined,
  IdcardOutlined,
  ShopOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const CustomerModal = ({
  isOpen,
  onClose,
  onSubmit,
  editingCustomer,
  loading,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (editingCustomer) {
      form.setFieldsValue(editingCustomer);
    } else {
      form.resetFields();
    }
  }, [editingCustomer, isOpen, form]);

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      await onSubmit(values, form);
    } catch (error) {
      // Validation error
    }
  };

  const handleCancel = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title={
        <div style={{ fontSize: 20, fontFamily: 'Fraunces, serif', color: '#0f2b2f' }}>
          {editingCustomer ? "Edit Customer" : "Add New Customer"}
        </div>
      }
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={editingCustomer ? "Update Customer" : "Add Customer"}
      cancelText="Cancel"
      confirmLoading={loading}
      width={560}
      okButtonProps={{
        style: {
          background: '#0e6e72',
          borderColor: '#0e6e72',
          borderRadius: 8,
        }
      }}
      cancelButtonProps={{
        style: { borderRadius: 8 }
      }}
      styles={{
        body: { paddingTop: 24 },
      }}
    >
      <Form
        form={form}
        layout="vertical"
        size="middle"
        requiredMark="optional"
      >
        <Form.Item
          label={<Text strong style={{ color: '#0f2b2f' }}>Customer Name</Text>}
          name="customer_name"
          rules={[
            { required: true, message: "Please enter customer name" },
            { max: 100, message: "Name cannot exceed 100 characters" },
          ]}
        >
          <Input
            placeholder="Enter customer name"
            prefix={<ShopOutlined style={{ color: '#bfbfbf' }} />}
            style={{ borderRadius: 8 }}
          />
        </Form.Item>

        <Form.Item
          label={<Text strong style={{ color: '#0f2b2f' }}>Customer Contacts</Text>}
          name="contacts"
        >
          <Input
            placeholder="Enter customer contacts"
            prefix={<UserOutlined style={{ color: '#bfbfbf' }} />}
            style={{ borderRadius: 8 }}
          />
        </Form.Item>

        <Row gutter={16}>
        
          <Col span={12}>
            <Form.Item
              label={<Text strong style={{ color: '#0f2b2f' }}>Phone</Text>}
              name="contacts"
            >
              <Input
                placeholder="Enter phone number"
                prefix={<PhoneOutlined style={{ color: '#bfbfbf' }} />}
                style={{ borderRadius: 8 }}
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label={<Text strong style={{ color: '#0f2b2f' }}>Address</Text>}
          name="address"
        >
          <Input.TextArea
            placeholder="Enter  address"
            rows={3}
            style={{ borderRadius: 8 }}
          />
        </Form.Item>


      </Form>
    </Modal>
  );
};

export default CustomerModal;