import React from 'react';
import './AdminHeader.css';
import { Home, Palette, Settings, CreditCard, LogOut } from 'lucide-react';

const AdminHeader = () => {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="admin-label">ADMIN</div>
        
        <nav className="nav-menu">
          <a href="#" className="nav-item active">
            <Home size={20} />
            <span>Home</span>
          </a>
          <a href="#" className="nav-item">
            <Palette size={20} />
            <span>Branding</span>
          </a>
          <a href="#" className="nav-item">
            <Settings size={20} />
            <span>Services</span>
          </a>
          <a href="#" className="nav-item">
            <CreditCard size={20} />
            <span>Subscription</span>
          </a>
          <a href="#" className="nav-item logout">
            <LogOut size={20} />
            <span>Log Out</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="header-section">
          <h1>Header</h1>
          
          <div className="header-config">
            <div className="header-group">
              <label>Header 1</label>
              <input type="text" placeholder="" className="input-field" />
              
              <label>Header 2</label>
              <input type="text" placeholder="" className="input-field" />
            </div>

            <div className="button-config">
              <div className="button-group">
                <h3>Button 1</h3>
                <input type="text" placeholder="Text" className="input-field" />
                <input type="text" placeholder="Link" className="input-field" />
              </div>

              <div className="button-group">
                <h3>Button 2</h3>
                <input type="text" placeholder="Text" className="input-field" />
                <input type="text" placeholder="Link" className="input-field" />
              </div>
            </div>
          </div>

          <button className="save-button">SAVE</button>
        </div>
      </main>
    </div>
  );
};

export default AdminHeader;