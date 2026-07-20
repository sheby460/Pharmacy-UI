import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Drugs from '../pages/Drugs';
import Suppliers from '../pages/Suppliers';
import Sales from '../pages/Sales';
import Reports from '../pages/Reports';
import Purchase from '../pages/purchase';
import { useAuth } from "../context/AuthContext";
import Customers from '../pages/Customers';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? 
  children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<PrivateRoute><AppLayout /></PrivateRoute>}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="drugs" element={<Drugs />} />
        <Route path="suppliers" element={<Suppliers />} />
        <Route path="purchases" element={<Purchase />} />
        <Route path="sales" element={<Sales />} />
        <Route path="customers" element={<Customers />} />
        <Route path="reports" element={<Reports />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
