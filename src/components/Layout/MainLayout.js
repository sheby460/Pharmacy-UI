import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import Header from './Header';

const { Content } = Layout;

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} />
      <Layout style={{ 
        marginLeft: collapsed ? 80 : 250, 
        transition: 'all 0.2s',
        background: '#f5f7fa'
      }}>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
          marginTop: 88,
          background: '#fff',
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;