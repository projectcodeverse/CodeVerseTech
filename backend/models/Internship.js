const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  college: { type: String, required: true },
  domain: { type: String, required: true },
  resumeUrl: { type: String },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Internship', internshipSchema);