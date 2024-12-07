const express = require('express');
const Booking = require('../models/booking');
const Service = require('../models/service');
const router = express.Router();

// Create a new booking
router.post('/bookings', async (req, res) => {
  try {
    const { customer_name, address, date_time, user_id, service_id } = req.body;
    const booking = await Booking.create({ customer_name, address, date_time, user_id, service_id });
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch all bookings
router.get('/bookings', async (req, res) => {
  try {
    const bookings = await Booking.findAll({ include: ['User', 'Service'] });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
