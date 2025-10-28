import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const submitInternship = async (data: any) => {
  const response = await api.post('/internships', data);
  return response.data;
};

export const submitContact = async (data: any) => {
  const response = await api.post('/contact', data);
  return response.data;
};

export default api;