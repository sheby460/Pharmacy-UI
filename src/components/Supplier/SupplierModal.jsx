// src/components/Supplier/SupplierModal.jsx
import React, { useEffect } from "react";
import { Modal, Form, Input, Row, Col, Typography } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  IdcardOutlined,
  ShopOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const SupplierModal = ({
  isOpen,
  onClose,
  onSubmit,
  editingSupplier,
  loading,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (editingSupplier) {
      form.setFieldsValue(editingSupplier);
    } else {
      form.resetFields();
    }
  }, [editingSupplier, isOpen, form]);

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
          {editingSupplier ? "Edit Supplier" : "Add New Supplier"}
        </div>
      }
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={editingSupplier ? "Update Supplier" : "Add Supplier"}
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
          label={<Text strong style={{ color: '#0f2b2f' }}>Supplier Name</Text>}
          name="name"
          rules={[
            { required: true, message: "Please enter supplier name" },
            { max: 100, message: "Name cannot exceed 100 characters" },
          ]}
        >
          <Input
            placeholder="Enter supplier name"
            prefix={<ShopOutlined style={{ color: '#bfbfbf' }} />}
            style={{ borderRadius: 8 }}
          />
        </Form.Item>

        <Form.Item
          label={<Text strong style={{ color: '#0f2b2f' }}>Contact Person</Text>}
          name="contact_person"
        >
          <Input
            placeholder="Enter contact person name"
            prefix={<UserOutlined style={{ color: '#bfbfbf' }} />}
            style={{ borderRadius: 8 }}
          />
        </Form.Item>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label={<Text strong style={{ color: '#0f2b2f' }}>Email</Text>}
              name="email"
              rules={[
                { type: 'email', message: "Please enter a valid email" },
              ]}
            >
              <Input
                placeholder="email@example.com"
                prefix={<MailOutlined style={{ color: '#bfbfbf' }} />}
                style={{ borderRadius: 8 }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={<Text strong style={{ color: '#0f2b2f' }}>Phone</Text>}
              name="phone"
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
            placeholder="Enter supplier address"
            rows={3}
            style={{ borderRadius: 8 }}
          />
        </Form.Item>

        <Form.Item
          label={<Text strong style={{ color: '#0f2b2f' }}>Tax ID / VAT Number</Text>}
          name="tax_id"
        >
          <Input
            placeholder="Enter tax identification number"
            prefix={<IdcardOutlined style={{ color: '#bfbfbf' }} />}
            style={{ borderRadius: 8 }}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SupplierModal;