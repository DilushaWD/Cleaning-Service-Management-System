// /backend/routes/bookingRoutes.js
const express = require('express');
const Booking = require('../models/booking');
const router = express.Router();

// Get all bookings
router.get('/bookings', async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving bookings' });
  }
});

// Create a new booking
router.post('/bookings', async (req, res) => {
  try {
    const { customer_name, service_type, booking_date } = req.body;
    const newBooking = await Booking.create({
      customer_name,
      service_type,
      booking_date,
    });
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(500).json({ message: 'Error creating booking' });
  }
});

module.exports = router;
