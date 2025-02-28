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

    signup: async (userData) => {
        try {
            const response = await api.post('/auth/signup', userData);
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    logout: async () => {
        try {
            const response = await api.get('/auth/logout');
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    }
};
export default authService;