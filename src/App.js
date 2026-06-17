import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';
import './App.css';
import './styles/global.css';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0e6e72',
          colorInfo: '#0e6e72',
          borderRadius: 10,
          colorBgLayout: '#f5f7f9',
          colorTextBase: '#0f2b2f',
          fontFamily: "'Manrope', 'Segoe UI', system-ui, -apple-system, sans-serif",
        },
      }}
    >
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
