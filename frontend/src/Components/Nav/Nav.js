import React, { useState } from 'react';
import './Nav.css';
import { Link } from "react-router-dom";

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo/Brand */}
        <Link to="/mainhome" className="nav-logo">
          <span className="logo-text">SmartSchool</span>
        </Link>

        {/* Hamburger Menu Button for Mobile */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className="hamburger-icon">&#9776;</span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/mainhome" 
              className="nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/adduser" 
              className="nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Assignment
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/userDetails" 
              className="nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Assignment Details
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/adminHome" 
              className="nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;