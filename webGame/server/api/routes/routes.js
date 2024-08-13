const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || 'Server error' });
  }
});

module.exports = router;
