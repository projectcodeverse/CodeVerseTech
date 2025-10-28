const axios = require('axios');

// Test internship submission
const testData = {
  name: 'Test User',
  email: 'test@example.com',
  college: 'Test College',
  domain: 'Web Development',
  message: 'Test message'
};

axios.post('http://localhost:5000/api/internships', testData)
  .then(response => {
    console.log('Success:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response?.data || error.message);
  });