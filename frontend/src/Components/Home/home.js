import React from 'react';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import './Home.css'; // Importing the CSS file


function Home() {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <Nav />

      {/* Hero Section */}
      <header className="hero-section">
        <h1>Welcome to Teacher Management System</h1>
        <br></br>
      
      </header>

      {/* Quick Access Cards */}
      <section className="quick-links">
        <div className="card">
          <h3>Manage Assignment</h3>
          <p>View, Edit, and Delete Assignment</p>
          <Link to="/userDetails" className="card-link">Go to assignment →</Link>
        </div>

        

        <div className="card">
          <h3>admin</h3>
          <p>manage admin</p>
          <Link to="/adminHome" className="card-link">Go to assignment →</Link>
        </div>

        
        
        
        
        <div className="card">
          <h3>Generate Reports</h3>
          <p>View attendance and salary reports</p>
          <Link to="/reports" className="card-link">View Reports →</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>We provide a comprehensive solution for managing teachers and educational resources efficiently.</p>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@teachermanagement.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Teacher Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
)}


export default Home;
