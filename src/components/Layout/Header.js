import React, { useState } from 'react';
import { Layout, Avatar, Dropdown, Space, Typography, Badge } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  BellOutlined
} from '@ant-design/icons';
import { useAuth } from '../../context/AuthContext';

const { Header: AntHeader } = Layout;
const { Text } = Typography;

const Header = ({ collapsed, setCollapsed }) => {
  const { user, logout } = useAuth();

  const userMenuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      danger: true,
    },
  ];

  const handleMenuClick = ({ key }) => {
    if (key === 'logout') {
      logout();
    }
  };

  return (
    <AntHeader style={{
      padding: 0,
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      position: 'fixed',
      left: collapsed ? 80 : 250,
      width: `calc(100% - ${collapsed ? 80 : 250}px)`,
      marginLeft: 0,
      transition: 'all 0.2s',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div style={{ paddingLeft: 0 }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () => setCollapsed(!collapsed),
          style: { fontSize: 18, cursor: 'pointer', padding: '0 16px' }
        })}
      </div>

      <div style={{ paddingRight: 24, display: 'flex', alignItems: 'center', gap: 16 }}>
        <Badge count={5} size="small">
          <BellOutlined style={{ fontSize: 18, cursor: 'pointer' }} />
        </Badge>

        <Dropdown
          menu={{ items: userMenuItems, onClick: handleMenuClick }}
          trigger={['click']}
          placement="bottomRight"
        >
          <Space style={{ cursor: 'pointer' }}>
            <Avatar
              icon={<UserOutlined />}
              style={{
                backgroundColor: '#1890ff',
                cursor: 'pointer'
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Text strong style={{ lineHeight: 1.2 }}>
                {user?.fname} {user?.lname}
              </Text>
              <Text type="secondary" style={{ fontSize: 12 }}>
                {user?.role || 'Administrator'}
              </Text>
            </div>
          </Space>
        </Dropdown>
      </div>
    </AntHeader>
  );
};

export default Header;
