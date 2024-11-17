// DashboardLayout.jsx
import React from 'react';
import { 
  Home, Crown, Settings, CreditCard, LogOut,
  Layout, Users, Briefcase, FileText, MessageSquare,
  ThumbsUp, Share2, HelpCircle, PhoneCall, Files,
  MessageCircle
} from 'lucide-react';
import './DashboardLayout.css';

// Navigation menu data
const menuItems = [
  { icon: <Home size={20} />, text: 'Home', active: true },
  { icon: <Crown size={20} />, text: 'Branding' },
  { icon: <Settings size={20} />, text: 'Services' },
  { icon: <CreditCard size={20} />, text: 'Subscription' },
  { icon: <LogOut size={20} />, text: 'Log Out' }
];

// Dashboard cards data
const cards = [
  {
    icon: <Crown className="icon" />,
    title: 'Branding',
    description: 'View or edit your logo, website title and tagline',
    className: 'card--wide'
  },
  {
    icon: <Settings className="icon" />,
    title: 'Services',
    description: 'Manage your services',
    className: 'card--normal'
  },
  {
    icon: <Layout className="icon" />,
    title: 'Header',
    description: 'Manage the top section of your website'
  },
  {
    icon: <Users className="icon" />,
    title: 'Client Logos',
    description: 'Showcase your clients'
  },
  {
    icon: <FileText className="icon" />,
    title: 'About You',
    description: 'Manage the details about your work/yourself'
  },
  {
    icon: <Briefcase className="icon" />,
    title: 'Portfolio',
    description: "Manage the 'Portfolio' section of your website"
  },
  {
    icon: <FileText className="icon" />,
    title: 'Your Works',
    description: 'Showcase your works'
  },
  {
    icon: <Share2 className="icon" />,
    title: 'Comparison',
    description: 'Make yourself stand out by comparing your advantages with others'
  },
  {
    icon: <MessageSquare className="icon" />,
    title: 'Testimonials',
    description: "Manage client's reviews"
  },
  {
    icon: <HelpCircle className="icon" />,
    title: 'Q&A',
    description: 'Make it easier for your clients by answering the most asked questions'
  },
  {
    icon: <PhoneCall className="icon" />,
    title: 'CTA (Call To Action)',
    description: 'Generate a recall value to take an action by your clients'
  },
  {
    icon: <Share2 className="icon" />,
    title: 'Social Handles',
    description: 'Link your social networks'
  },
  {
    icon: <Files className="icon" />,
    title: 'Your Process',
    description: 'Describe your working process'
  },
  {
    icon: <MessageCircle className="icon" />,
    title: 'Other Pages',
    description: 'Contact Us, Privacy Policy, Refund Policy, Terms & Conditions'
  }
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

// Card Component
const DashboardCard = ({ icon, title, description, className = '' }) => (
  <div className={`card ${className}`}>
    <div className="card__content">
      <div className="card__icon">
        {icon}
      </div>
      <div className="card__text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

// Main Dashboard Component
const DashboardLayout = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      
      <main className="main-content">
        <div className="header">
          <div className="header__title">
            <Layout className="header__icon" />
            <h1>Dashboard</h1>
          </div>
          <div className="subscription-banner">
            Your subscription ends on 01.11.2025
          </div>
        </div>

        <div className="card-grid">
          {cards.map((card, index) => (
            <DashboardCard key={index} {...card} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;