// src/services/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3030/api',  // Your backend URL
    withCredentials: true  // Important for sessions/auth
});
export default api;
