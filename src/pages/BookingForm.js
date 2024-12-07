import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../services_api";  // Make sure axios is set up

const BookingForm = () => {
  const { id } = useParams(); // Extract 'id' from URL
  const navigate = useNavigate(); // For navigation after form submission
  const [formData, setFormData] = useState({
    customer_name: "",
    address: "",
    date_time: "",
    service_id: "",
  });

  useEffect(() => {
    if (id) {
      // Fetch booking details from API if 'id' exists (for editing)
      axios
        .get(`/api/bookings/${id}`)
        .then((response) => {
          setFormData(response.data); // Populate form with fetched data
        })
        .catch((error) => console.error("Error fetching booking data", error));
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      // If editing, update the existing booking
      axios
        .put(`/api/bookings/${id}`, formData)
        .then(() => {
          navigate("/user/dashboard"); // Navigate to user dashboard after save
        })
        .catch((error) => console.error("Error updating booking", error));
    } else {
      // If creating, create a new booking
      axios
        .post("/api/bookings", formData)
        .then(() => {
          navigate("/user/dashboard");
        })
        .catch((error) => console.error("Error creating booking", error));
    }
  };

  return (
    <div className="container">
      <h2>{id ? "Edit Booking" : "New Booking"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Customer Name</label>
          <input
            type="text"
            className="form-control"
            name="customer_name"
            value={formData.customer_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Date & Time</label>
          <input
            type="datetime-local"
            className="form-control"
            name="date_time"
            value={formData.date_time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Service</label>
          <select
            className="form-control"
            name="service_id"
            value={formData.service_id}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option value="1">Deep Cleaning</option>
            <option value="2">Basic Cleaning</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success">
          {id ? "Update Booking" : "Create Booking"}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
