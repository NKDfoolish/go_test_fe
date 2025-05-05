import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>StudyScore</h2>
      </div>
      <ul className="navbar-menu">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            <i className="fas fa-home"></i>
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/students" className={({ isActive }) => isActive ? 'active' : ''}>
            <i className="fas fa-user-graduate"></i>
            <span>Students</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" className={({ isActive }) => isActive ? 'active' : ''}>
            <i className="fas fa-chart-bar"></i>
            <span>Statistics</span>
          </NavLink>
        </li>
      </ul>
      <div className="navbar-footer">
        <p>© 2025 StudyScore</p>
      </div>
    </nav>
  );
};

export default Navbar;