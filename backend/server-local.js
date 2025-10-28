const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// In-memory storage for testing
let internships = [];
let contacts = [];

// Routes
app.post('/api/internships', (req, res) => {
  console.log('Received internship data:', req.body);
  const internship = {
    id: Date.now(),
    ...req.body,
    createdAt: new Date()
  };
  internships.push(internship);
  console.log('Saved internship:', internship);
  res.status(201).json({ message: 'Application submitted successfully', data: internship });
});

app.get('/api/internships', (req, res) => {
  res.json(internships);
});

app.post('/api/contact', (req, res) => {
  console.log('Received contact data:', req.body);
  const contact = {
    id: Date.now(),
    ...req.body,
    createdAt: new Date()
  };
  contacts.push(contact);
  console.log('Saved contact:', contact);
  res.status(201).json({ message: 'Message sent successfully', data: contact });
});

app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Backend is working', 
    internships: internships.length,
    contacts: contacts.length
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} (In-memory storage)`);
});