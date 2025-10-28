const express = require('express');
const Contact = require('../models/Contact');
const { sendContactNotification } = require('../utils/emailService');
const router = express.Router();

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    console.log('Received contact data:', req.body);
    const contact = new Contact(req.body);
    const savedContact = await contact.save();
    console.log('Saved contact:', savedContact);
    
    // Send email notification
    try {
      await sendContactNotification(savedContact);
      console.log('Email notification sent');
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
    }
    
    res.status(201).json({ message: 'Message sent successfully', data: savedContact });
  } catch (error) {
    console.error('Contact save error:', error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;