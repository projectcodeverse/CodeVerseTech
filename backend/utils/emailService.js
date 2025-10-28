const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendContactNotification = async (contactData) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `New Contact Form Submission - ${contactData.subject}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${contactData.name}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      <p><strong>Subject:</strong> ${contactData.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${contactData.message}</p>
      <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
    `
  };

  return transporter.sendMail(mailOptions);
};

const sendInternshipNotification = async (internshipData) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `New Internship Application - ${internshipData.domain}`,
    html: `
      <h3>New Internship Application</h3>
      <p><strong>Name:</strong> ${internshipData.name}</p>
      <p><strong>Email:</strong> ${internshipData.email}</p>
      <p><strong>College:</strong> ${internshipData.college}</p>
      <p><strong>Domain:</strong> ${internshipData.domain}</p>
      <p><strong>Resume URL:</strong> ${internshipData.resumeUrl}</p>
      <p><strong>Message:</strong></p>
      <p>${internshipData.message}</p>
      <p><strong>Applied at:</strong> ${new Date().toLocaleString()}</p>
    `
  };

  return transporter.sendMail(mailOptions);
};

module.exports = {
  sendContactNotification,
  sendInternshipNotification
};