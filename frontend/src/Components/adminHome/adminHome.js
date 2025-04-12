import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./adminHome.css";


function AdminHome() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="admin-container">
      {/* Sidebar Navigation */}
      <aside className={`sidebar ${isMobileMenuOpen ? "open" : ""}`}>
        <h2>Admin Panel</h2>
        <ul>
          <li>
            <Link to="/teachers">
             Manage Teachers
            </Link>
          </li>
          <li>
            <Link to="/students">
             Manage Students
            </Link>
          </li>
          <li>
            <Link to="/reports">
               Reports & Analytics
            </Link>
          </li>
          <li>
            <Link to="/settings">
             Settings
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="admin-content">
        <header>
          <h1>Welcome, Admin</h1>
          <p>Manage your system efficiently with the tools below.</p>
        </header>

        {/* Dashboard Cards */}
        <section className="dashboard">
          <div className="card">
           
            <h3>Teachers</h3>
            <p>Manage all registered teachers.</p>
            <Link to="/teachers" className="btn">View</Link>
          </div>

          <div className="card">
          
            <h3>Students</h3>
            <p>Manage student details and performance.</p>
            <Link to="/students" className="btn">View</Link>
          </div>

          <div className="card">
          
            <h3>Reports</h3>
            <p>View analytics and reports.</p>
            <Link to="/reports" className="btn">View</Link>
          </div>

          <div className="card">
           
            <h3>Settings</h3>
            <p>Update system configurations.</p>
            <Link to="/settings" className="btn">View</Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminHome;
