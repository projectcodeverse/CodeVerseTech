const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { sendContactNotification, sendInternshipNotification } = require('./utils/emailService');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: ['https://projectcodeverse.github.io', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());

// In-memory storage as fallback
let internships = [];
let contacts = [];

// MongoDB Connection with fallback
let useDatabase = false;
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
    useDatabase = true;
  })
  .catch(err => {
    console.log('MongoDB connection failed:', err.message);
    console.log('Using in-memory storage as fallback');
    useDatabase = false;
  });

// Routes with fallback logic
app.post('/api/internships', async (req, res) => {
  try {
    console.log('Received internship data:', req.body);
    
    let savedData;
    if (useDatabase) {
      const Internship = require('./models/Internship');
      const internship = new Internship(req.body);
      savedData = await internship.save();
      console.log('Saved to MongoDB:', savedData._id);
    } else {
      savedData = { id: Date.now(), ...req.body, createdAt: new Date() };
      internships.push(savedData);
      console.log('Saved to memory:', savedData.id);
    }
    
    // Email notification disabled for now
    console.log('Email notification skipped');
    
    res.status(201).json({ message: 'Application submitted successfully', data: savedData });
  } catch (error) {
    console.error('Error:', error);
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    console.log('Received contact data:', req.body);
    
    let savedData;
    if (useDatabase) {
      const Contact = require('./models/Contact');
      const contact = new Contact(req.body);
      savedData = await contact.save();
      console.log('Saved to MongoDB:', savedData._id);
    } else {
      savedData = { id: Date.now(), ...req.body, createdAt: new Date() };
      contacts.push(savedData);
      console.log('Saved to memory:', savedData.id);
    }
    
    // Email notification disabled for now
    console.log('Email notification skipped');
    
    res.status(201).json({ message: 'Message sent successfully', data: savedData });
  } catch (error) {
    console.error('Error:', error);
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/internships', async (req, res) => {
  try {
    if (useDatabase) {
      const Internship = require('./models/Internship');
      const data = await Internship.find().sort({ createdAt: -1 });
      res.json(data);
    } else {
      res.json(internships);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Backend is working', 
    database: useDatabase ? 'MongoDB' : 'Memory',
    internships: useDatabase ? 'Check MongoDB' : internships.length,
    contacts: useDatabase ? 'Check MongoDB' : contacts.length
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Storage: ${useDatabase ? 'MongoDB Atlas' : 'In-Memory (fallback)'}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Please stop the existing server or use a different port.`);
    process.exit(1);
  } else {
    console.error('Server error:', err);
  }
});