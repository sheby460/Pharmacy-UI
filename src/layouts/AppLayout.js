import { Layout, Menu, Typography, Avatar, Space, Tag, Button, Dropdown } from 'antd';
import {
  AppstoreOutlined,
  ClusterOutlined,
  IdcardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const { Header, Sider, Content, Footer } = Layout;

const menuItems = [
  { key: '/dashboard', icon: <AppstoreOutlined />, label: 'Dashboard' },
  { key: '/drugs', icon: <ClusterOutlined />, label: 'Drugs' },
  { key: '/suppliers', icon: <TeamOutlined />, label: 'Suppliers' },
  { key: '/purchases', icon: <IdcardOutlined />, label: 'Purchases' },
  { key: '/sales', icon: <UserOutlined />, label: 'Sales' },
  { key: '/reports', icon: <SafetyCertificateOutlined />, label: 'Reports' },
];

function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const selectedKey = menuItems.find((item) => location.pathname.startsWith(item.key))?.key;
  const pageTitle = menuItems.find((item) => location.pathname.startsWith(item.key))?.label || 'Dashboard';

  return (
    <Layout className="pms-shell">
      <Sider
        width={260}
        className="pms-sider"
        breakpoint="lg"
        collapsedWidth={80}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className={`pms-logo ${collapsed ? 'pms-logo-collapsed' : ''}`}>
          <img src="/meds.jpg" alt="medicine" />
          {!collapsed && (
            <div>
              <div className="pms-logo-title">Pharmacy-Portal</div>
              <div className="pms-logo-sub">Pharmacy Management System</div>
            </div>
          )}
        </div>
        <Menu
          mode="inline"
          className="pms-menu"
          selectedKeys={selectedKey ? [selectedKey] : []}
          theme="dark"
          items={menuItems}
          onClick={(item) => navigate(item.key)}
        />
      </Sider>
      <Layout>
        <Header className="pms-header">
          <div className="pms-header-left">
            <Button
              type="text"
              className="pms-collapse-btn"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed((prev) => !prev)}
            />
            <div className="pms-header-title">
              <Typography.Text className="pms-header-sub">Welcome back</Typography.Text>
              <Typography.Title level={4} className="pms-header-main">
                {pageTitle}
              </Typography.Title>
            </div>
          </div>
          <Dropdown
            trigger={['click']}
            menu={{
              className: 'pms-user-menu',
              items: [{ key: 'logout', label: 'Logout' }],
              onClick: ({ key }) => {
                if (key === 'logout') {
                  console.log('Logout clicked (placeholder).');
                }
              },
            }}
          >
            <button type="button" className="pms-user">
              <Space size="middle">
                <Avatar style={{ backgroundColor: '#0e6e72' }} icon={<UserOutlined />} />
                <div className="pms-user-meta">
                  <Typography.Text strong className="pms-user-name">
                    {user?.name || 'Guest User'}
                  </Typography.Text>
                  <Tag color="green">{user?.role || 'Viewer'}</Tag>
                </div>
              </Space>
            </button>
          </Dropdown>
        </Header>
        <Content className="pms-content">
          <Outlet />
        </Content>
        <Footer className="pms-footer">
          <Typography.Text type="secondary">
            © {new Date().getFullYear()} Pharmacy-Portal | All rights reserved.
          </Typography.Text>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default AppLayout;
