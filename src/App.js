import React from 'react';
import './App.css';
import AdminLogin from './components/AdminLogin';
import DashboardLayout from './components/DashboardLayout';
import Services from './components/Services';
import AddService from './components/AddService';
import BrandingPage from './components/BrandingPage';
import Header from './components/Header';
import AdminHeader from './components/AdminHeader';
// import Branding from './components/Branding';

function App() {
  return (
    <div className="App">
      <AdminLogin />
      <DashboardLayout />
      <Services />
      <AddService />
      <BrandingPage />
      <Header />
      <AdminHeader />
    </div>
  );
}

export default App;
