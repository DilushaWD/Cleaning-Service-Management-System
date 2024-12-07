// src/services_api.js
import axios from 'axios';

const API_URL = 'http://yourapiurl.com'; // Change this to your actual API URL

// Example API call to fetch services
const getServices = async () => {
  try {
    const response = await axios.get(`${API_URL}/services`);
    return response.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};
const servicesApi = {
  // Correctly define the 'get' method
  get: () => {
    return axios.get(`${API_URL}/services`);
  },
  getServices: () => {
    return axios.get(`${API_URL}/services`);  // Make sure the endpoint is correct
  },
};
export default servicesApi;

