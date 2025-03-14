// src/services/authService.js
import api from './api';

const authService = {
    login: async (credentials) => {
        try {
            const response = await api.post('/auth/login', credentials);
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    register: async (userData) => {
        try {
            console.log("inside the register ");
            const response = await api.post('/auth/register', userData);
            console.log("data added");
            return response.data;
        } catch (error) {
            console.error("API Error:", error.response?.data);
    
            // Extract proper error message
            const errorMessage = error.response?.data?.message || "Registration failed. Please try again.";
    
            // Throw an error object with the correct message
            throw new Error(errorMessage);
        }
    },
    

    logout: async () => {
        try {
            console.log("hello");
            const response = await api.post('/auth/logout');
            return response;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    }
};
export default authService;