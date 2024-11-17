import React from 'react';
import './AdminLogin.css';

const AdminLogin = () => {
  return (
    <div className="admin-container">
      <div className="admin-left">
        <h2>Welcome Admin</h2>
        <form className="admin-form">
          <input type="email" placeholder="Email ID" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="login-btn">Log In</button>
        </form>
        <a href="#" className="forgot-password">forgot password?</a>
      </div>
      <div className="admin-right">
        <div className="logo-container">
          <img src="https://saneinfotech.com/images/Sane-Infotech-Logo.png" alt="Logo" />
        </div>
        <div className="dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
