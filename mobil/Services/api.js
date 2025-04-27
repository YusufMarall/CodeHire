import axios from 'axios';

const API_URL = "http://10.0.2.2:5000/api"; // Android Emulator için, gerçek cihazda IP değişir

export const login = (username, password) => 
  axios.post(`${API_URL}/login`, { username, password });

export const submitTest = (username, result) => 
  axios.post(`${API_URL}/submit_test`, { username, result });

export const getTestHistory = (username) => 
  axios.get(`${API_URL}/tests/${username}`);
