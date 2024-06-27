// frontend/src/services/authService.js
import axios from 'axios';
// src/services/authService.js
import jwtDecode from 'jwt-decode';

export const decodeToken = (token) => {
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error('Invalid token', error);
    return null;
  }
};


const API_URL = 'http://localhost:5000/api/auth';

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  const { token } = response.data;
  localStorage.setItem('jwtToken', token);
  return decodeToken(token);
};

export const logout = () => {
  localStorage.removeItem('jwtToken');
};

export const getToken = () => {
  return localStorage.getItem('jwtToken');
};

export const isAuthenticated = () => {
  const token = getToken();
  if (!token) return false;
  try {
    const { exp } = decodeToken(token);
    return exp > Date.now() / 1000;
  } catch (error) {
    return false;
  }
};
