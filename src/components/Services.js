// Services.jsx
import React, { useState } from 'react';
import { 
  Home, 
  Crown, 
  Settings, 
  CreditCard, 
  LogOut,
  Plus 
} from 'lucide-react';
import './Services.css';

const menuItems = [
  { icon: <Home size={20} />, text: 'Home' },
  { icon: <Crown size={20} />, text: 'Branding' },
  { icon: <Settings size={20} />, text: 'Services', active: true },
  { icon: <CreditCard size={20} />, text: 'Subscription' },
  { icon: <LogOut size={20} />, text: 'Log Out' }
];

// Sidebar Component
const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar__header">
      <h2>ADMIN</h2>
    </div>
    <nav className="sidebar__nav">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`nav-item ${item.active ? 'nav-item--active' : ''}`}
        >
          {item.icon}
          <span>{item.text}</span>
        </div>
      ))}
    </nav>
  </aside>
);

// Service Card Component
const ServiceCard = ({ title, description, isAddNew }) => (
  <div className={`service-card ${isAddNew ? 'service-card--add-new' : ''}`}>
    {isAddNew ? (
      <div className="service-card__add">
        <Plus size={24} />
        <span>Add New</span>
      </div>
    ) : (
      <>
        <h3>{title}</h3>
        <p>{description}</p>
      </>
    )}
  </div>
);

// Main Services Component
const Services = () => {
  const [headerText, setHeaderText] = useState('');
  const [subheaderText, setSubheaderText] = useState('');

  return (
    <div className="services-page">
      <Sidebar />
      
      <main className="main-content">
        <div className="page-header">
          <Settings className="header-icon" />
          <h1>Services</h1>
        </div>
        
        <div className="services-form">
          <div className="input-group">
            <label>Services Header</label>
            <input
              type="text"
              value={headerText}
              onChange={(e) => setHeaderText(e.target.value)}
              placeholder="Enter services header"
              className="text-input"
            />
          </div>
          
          <div className="input-group">
            <label>Services Subheader</label>
            <input
              type="text"
              value={subheaderText}
              onChange={(e) => setSubheaderText(e.target.value)}
              placeholder="Enter services subheader"
              className="text-input"
            />
          </div>

          <section className="services-section">
            <h2>Added Services</h2>
            <div className="services-grid">
              <ServiceCard
                title="3D animation"
                description="Our team has decades of combined experience creating winning Facebook & Instagram campaigns."
              />
              <ServiceCard isAddNew={true} />
            </div>
          </section>

          <button className="save-button">
            SAVE
          </button>
        </div>
      </main>
    </div>
  );
};

export default Services;