import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">
        <h1>Student Scores Dashboard</h1>
      </div>
      <div className="header-actions">
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="user-profile">
          <span>Admin</span>
          <img src="/profile-avatar.png" alt="Profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;