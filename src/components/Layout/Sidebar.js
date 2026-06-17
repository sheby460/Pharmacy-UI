import React from 'react';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  GlobalOutlined,
  CloudServerOutlined,
  UserOutlined,
  IdcardOutlined,
  AuditOutlined,
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: '/dashboard',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
    },
    {
      key: '/drugs',
      icon: <GlobalOutlined />,
      label: 'Drugs',
    },
    {
      key: '/suppliers',
      icon: <CloudServerOutlined />,
      label: 'Suppliers',
    },
    {
      key: '/purchases',
      icon: <UserOutlined />,
      label: 'Purchases',
    },
    {
      key: '/sales',
      icon: <IdcardOutlined />,
      label: 'Sales',
    },
    {
      key: '/reports',
      icon: <AuditOutlined />,
      label: 'Reports',
    },
  ];

  return (
    <Sider
      className="pms-sidebar"
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        background: '#0e6e72',
        boxShadow: '2px 0 8px rgba(0,0,0,0.15)',
      }}
      width={250}
    >
      <div style={{ 
        height: 64, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: collapsed ? 'center' : 'flex-start',
        padding: collapsed ? 0 : '0 24px',
        background: '#0e6e72',
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
      }}>
        <img 
          src="/meds.jpg" 
          alt="medicine" 
          style={{ 
            height: 40, 
            width: 40,
            marginRight: collapsed ? 0 : 12,
            borderRadius: 8,
            objectFit: 'cover'
          }} 
        />
        {!collapsed && (
          <div style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
            Pharmacy-Portal
          </div>
        )}
      </div>
      <Menu
        className="pms-sidebar-menu"
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        onClick={({ key }) => navigate(key)}
        style={{ 
          background: '#0e6e72',
          borderRight: 'none',
          padding: '16px 8px'
        }}
      />
    </Sider>
  );
};

export default Sidebar;
