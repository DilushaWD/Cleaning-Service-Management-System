// src/pages/Home.js
import React from "react";
import './Home.css'; // Importing external CSS for additional styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to the Cleaning Service Booking App!</h1>
        <p className="home-description">
          Simplifying your booking process for cleaning services. Easily manage your appointments and more.
        </p>
        <button className="home-button">Get Started</button>
      </div>
    </div>
  );
};

export default Home;
