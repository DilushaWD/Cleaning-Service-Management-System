// /frontend/src/pages/UserDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Make an API call to the backend to fetch bookings
    axios.get('http://localhost:5000/bookings')
      .then((response) => {
        setBookings(response.data); // Set the bookings data in the state
      })
      .catch((error) => {
        console.error('There was an error fetching bookings:', error);
      });
  }, []); // Empty dependency array ensures this runs only once after component mounts

  return (
    <div>
      <h1>User Dashboard</h1>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.customer_name} - {booking.service_type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;
