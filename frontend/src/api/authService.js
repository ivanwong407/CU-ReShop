// authService.js
import axios from 'axios';

const API_URL_LOGIN = 'http://localhost:5000/api/users/login';
const API_URL_REGISTER = 'http://localhost:5000/api/users/register';

// Function to handle user login
const login = async (username, password) => {
  const response = await axios.post(API_URL_LOGIN, {
    username,
    password,
  });
  if (response.data.token) {
    // Store the token in local storage
    localStorage.setItem('token', JSON.stringify(response.data.token));
  }
  return response.data;
};

// Function to handle user registration
const register = async (username, password) => {
  const response = await axios.post(API_URL_REGISTER, {
    username,
    password,
  });
  // Assuming the API response also sends back a token on successful registration
  if (response.data.token) {
    // Store the token in local storage
    localStorage.setItem('token', JSON.stringify(response.data.token));
  }
  return response.data;
};

// Exporting the functions inside an object as the default export
export default {
  login,
  register,
};