const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Create a new user
router.post('/users', async (req, res) => {
  try {
    const { username, password_hash } = req.body;
    const user = await User.create({ username, password_hash });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
