import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ServiceManagement from "./pages/ServiceManagement";
import BookingForm from "./pages/BookingForm";

// Add a Home component for the homepage
import Home from "./pages/Home";  // Make sure to create this component

function App() {
  return (
    <Router>
      <div>
        {/* Navbar component */}
        <Navbar />

        {/* Define Routes */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} /> {/* This will handle the homepage */}

          {/* User Pages */}
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/bookings/new" element={<BookingForm />} />
          <Route path="/user/bookings/edit/:id" element={<BookingForm />} />

          {/* Admin Pages */}
          
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/services" element={<ServiceManagement />} />

          {/* Default Route for 404 */}
          <Route path="*" element={<h2>404: Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 