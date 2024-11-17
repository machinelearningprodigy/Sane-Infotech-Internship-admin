// AddService.jsx
import React, { useState } from 'react';
import { 
  Home, 
  Crown, 
  Settings, 
  CreditCard, 
  LogOut,
  Plus 
} from 'lucide-react';
import './AddService.css';

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

const AddService = () => {
  const [serviceName, setServiceName] = useState('');
  const [subCategories, setSubCategories] = useState(['', '', '', '']);

  const handleAddMore = () => {
    setSubCategories([...subCategories, '']);
  };

  const handleSubCategoryChange = (index, value) => {
    const newSubCategories = [...subCategories];
    newSubCategories[index] = value;
    setSubCategories(newSubCategories);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      serviceName,
      subCategories: subCategories.filter(cat => cat.trim() !== '')
    });
  };

  return (
    <div className="add-service-page">
      <Sidebar />
      
      <main className="main-content">
        <div className="page-header">
          <Settings className="header-icon" />
          <h1>Services | Add New</h1>
        </div>
        
        <form className="add-service-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name of the Service (category)</label>
            <input
              type="text"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              className="text-input"
              placeholder="Enter service name"
            />
          </div>

          <div className="input-group">
            <label>Sub Categories</label>
            <div className="sub-categories">
              {subCategories.map((category, index) => (
                <input
                  key={index}
                  type="text"
                  value={category}
                  onChange={(e) => handleSubCategoryChange(index, e.target.value)}
                  className="text-input"
                  placeholder={`Enter sub category ${index + 1}`}
                />
              ))}
              
              <button 
                type="button" 
                className="add-more-button"
                onClick={handleAddMore}
              >
                + Add More
              </button>
            </div>
          </div>

          <button type="submit" className="save-button">
            SAVE
          </button>
        </form>
      </main>
    </div>
  );
};

export default AddService;