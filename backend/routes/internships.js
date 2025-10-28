const express = require('express');
const Internship = require('../models/Internship');
const { sendInternshipNotification } = require('../utils/emailService');
const router = express.Router();

// POST /api/internships
router.post('/', async (req, res) => {
  try {
    console.log('Received internship data:', req.body);
    const internship = new Internship(req.body);
    const savedInternship = await internship.save();
    console.log('Saved internship:', savedInternship);
    
    // Send email notification
    try {
      await sendInternshipNotification(savedInternship);
      console.log('Email notification sent');
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
    }
    
    res.status(201).json({ message: 'Application submitted successfully', data: savedInternship });
  } catch (error) {
    console.error('Internship save error:', error);
    res.status(400).json({ error: error.message });
  }
});

// GET /api/internships
router.get('/', async (req, res) => {
  try {
    const internships = await Internship.find().sort({ createdAt: -1 });
    res.json(internships);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;