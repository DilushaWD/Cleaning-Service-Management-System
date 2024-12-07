import React, { useEffect, useState } from 'react';
import servicesApi from '../services_api';  // Correct import for your API service

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [totalBookings, setTotalBookings] = useState(0);
  const [popularServices, setPopularServices] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await servicesApi.get('/bookings');
        setBookings(response.data);
        setTotalBookings(response.data.length);

        const services = response.data.map(booking => booking.serviceName);
        const serviceCount = services.reduce((acc, service) => {
          acc[service] = (acc[service] || 0) + 1;
          return acc;
        }, {});
        setPopularServices(Object.entries(serviceCount).sort((a, b) => b[1] - a[1]));
      } catch (error) {
        console.error("There was an error fetching the bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Total Bookings: {totalBookings}</h2>
      <h3>Popular Services:</h3>
      <ul>
        {popularServices.map(([service, count], index) => (
          <li key={index}>{service}: {count} bookings</li>
        ))}
      </ul>

      <h3>Bookings:</h3>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Service</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.customerName}</td>
              <td>{booking.serviceName}</td>
              <td>{booking.date}</td>
              <td>
                <button>Edit</button> | 
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
