import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Update with your backend URL

// User Signup
export const registerUser = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/signup`, { name, email, password });
  return response.data;
};

// User Login
export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/signin`, { email, password });
  return response.data;
};

// Admin Signup
export const registerAdmin = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/admin-signup`, { name, email, password });
  return response.data;
};

// Admin Login
export const loginAdmin = async (email, password) => {
  const response = await axios.post(`${API_URL}/admin-signin`, { email, password });
  return response.data;
};
