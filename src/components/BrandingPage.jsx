// src/components/BrandingPage.js
import React, { useState } from 'react';
import { 
  Home, 
  Settings, 
  CreditCard, 
  LogOut,
  Upload
} from 'lucide-react';
import './BrandingPage.css';

const BrandingPage = () => {
  const [formData, setFormData] = useState({
    websiteTitle: '',
    tagline: '',
    logo: null
  });

  // Simplified navigation items matching the image
  const navigationItems = [
    { icon: <Home size={20} />, text: 'Home', path: '/home' },
    { icon: <Settings size={20} />, text: 'Branding', path: '/branding', active: true },
    { icon: <Settings size={20} />, text: 'Services', path: '/services' },
    { icon: <CreditCard size={20} />, text: 'Subscription', path: '/subscription' },
    { icon: <LogOut size={20} />, text: 'Log Out', path: '/logout' }
  ];

  const themeColors = [
    '#DC2626', '#4F46E5', '#BE185D', '#0D9488',
    '#7E22CE', '#F59E0B', '#EC4899', '#8B5CF6'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          logo: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    console.log('Saving branding data:', formData);
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="admin-label">ADMIN</div>
        <nav className="nav-list">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className={`nav-item ${item.active ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="page-header">
          <Settings size={24} />
          <h1 className="page-title">Branding</h1>
        </div>

        <div className="content-wrapper">
          {/* Current Branding Card */}
          <div className="card">
            <h2>Current Branding</h2>
            <div className="branding-card">
              <div className="logo-container">
                <img 
                  src="https://saneinfotech.com/images/Sane-Infotech-Logo.png"
                  alt="Company Logo"
                />
              </div>
              <div>
                <h3>Sane Infotech</h3>
                <p>Making your IT solutions possible</p>
              </div>
            </div>
          </div>

          {/* Branding Form Card */}
          <div className="card form-card">
            <div className="form-group">
              <label className="form-label">Website Title</label>
              <input
                type="text"
                name="websiteTitle"
                className="form-input"
                value={formData.websiteTitle}
                onChange={handleInputChange}
                placeholder="Enter website title"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Tagline</label>
              <input
                type="text"
                name="tagline"
                className="form-input"
                value={formData.tagline}
                onChange={handleInputChange}
                placeholder="Enter tagline"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Logo</label>
              <div className="upload-area">
                <input
                  type="file"
                  id="logo-upload"
                  accept="image/png,image/jpeg"
                  onChange={handleLogoUpload}
                  style={{ display: 'none' }}
                />
                <label htmlFor="logo-upload">
                  <Upload size={32} />
                  <p>Upload a file (png/jpg)</p>
                </label>
              </div>
            </div>

            <button className="save-button" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>

        {/* Theme Colors Card */}
        <div className="card">
          <h2>Theme for website</h2>
          <div className="theme-colors">
            {themeColors.map((color, index) => (
              <button
                key={index}
                className="color-button"
                style={{ backgroundColor: color }}
                aria-label={`Theme color ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BrandingPage;