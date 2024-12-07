// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Booking App</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/user/dashboard">User Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user/bookings/new">Add Booking</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/dashboard">Admin Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/services">Manage Services</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
