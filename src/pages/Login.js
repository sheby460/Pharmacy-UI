import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);

    const result = await login(values.username, values.password);

    setLoading(false);

    if (result.success) {
      message.success('Login successful!');
      navigate('/dashboard', { replace: true });
    } else {
      message.error(result.error || 'Login failed');
    }
  };


  return (
    <div className="pms-login-shell">
      <Card className="pms-login-card" bordered={false}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div className="pms-login-header" style={{ justifyContent: 'center' }}>
            <img
              src="/meds.jpg"
              alt=""
              style={{ height: 56, width: 56, borderRadius: 12, objectFit: 'cover' }}
            />
            <div>
              <Title level={3} className="pms-login-title">
                Pharmacy Portal
              </Title>
              <Text className="pms-login-subtitle">Pharmacy Management System</Text>
            </div>
          </div>
        </div>

        <Form name="login" onFinish={onFinish} layout="vertical" size="large">
          <Form.Item
            name="username"
            rules={[
              { required: true, message: 'Please input your username!' },
              { type: 'username', message: 'Please enter a valid username!' },
            ]}
          >
            <Input prefix={<UserOutlined style={{ color: '#bfbfbf' }} />} placeholder="username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined style={{ color: '#bfbfbf' }} />}
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block style={{ height: 44 }}>
              Log In
            </Button>
          </Form.Item>
        </Form>

        <div style={{ textAlign: 'center', marginTop: 12 }}>
          <Text type="secondary">© 2026 Pharmacy Portal. All rights reserved.</Text>
        </div>
      </Card>
    </div>
  );
};

export default Login;
