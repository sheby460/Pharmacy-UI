// src/components/Supplier/SupplierStats.jsx
import React from "react";
import { Card, Col, Row, Statistic } from "antd";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";

const SupplierStats = ({ total, active, searchResults }) => {
  return (
    <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
      <Col xs={24} sm={8}>
        <Card 
          bordered={false} 
          style={{ 
            borderRadius: 12, 
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            background: 'linear-gradient(135deg, #f5f7f9 0%, #ffffff 100%)'
          }}
        >
          <Statistic
            title="Total Suppliers"
            value={total}
            prefix={<UserOutlined style={{ color: '#0e6e72' }} />}
            valueStyle={{ color: '#0f2b2f', fontFamily: 'Fraunces, serif' }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={8}>
        <Card 
          bordered={false} 
          style={{ 
            borderRadius: 12, 
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            background: 'linear-gradient(135deg, #f5f7f9 0%, #ffffff 100%)'
          }}
        >
          <Statistic
            title="Active Suppliers"
            value={active}
            prefix={<UserOutlined style={{ color: '#52c41a' }} />}
            valueStyle={{ color: '#0f2b2f', fontFamily: 'Fraunces, serif' }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={8}>
        <Card 
          bordered={false} 
          style={{ 
            borderRadius: 12, 
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            background: 'linear-gradient(135deg, #f5f7f9 0%, #ffffff 100%)'
          }}
        >
          <Statistic
            title="Search Results"
            value={searchResults}
            prefix={<SearchOutlined style={{ color: '#1890ff' }} />}
            valueStyle={{ color: '#0f2b2f', fontFamily: 'Fraunces, serif' }}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default SupplierStats;