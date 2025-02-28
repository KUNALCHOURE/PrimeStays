// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import authService  from '../services/authservice';
import { toast } from 'react-hot-toast';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (credentials) => {
        try {
            const data = await authService.login(credentials);
            setUser(data.user);
            toast.success('Welcome back!');
        } catch (error) {
            toast.error(error.message);
            throw error;
        }
    };

    const signup = async (userData) => {
        try {
            const data = await authService.signup(userData);
            setUser(data.user);
            toast.success('Welcome to Wanderlust!');
        } catch (error) {
            toast.error(error.message);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await authService.logout();
            setUser(null);
            toast.success('Logged out successfully');
        } catch (error) {
            toast.error('Error logging out');
            throw error;
        }
    };

    // Check if user is already logged in
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await api.get('/auth/check');
                if (response.data.user) {
                    setUser(response.data.user);
                }
            } catch (error) {
                console.error('Auth check failed:', error);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    return (
        <AuthContext.Provider 
            value={{ 
                user, 
                login, 
                logout, 
                signup, 
                isAuthenticated: !!user,
                loading 
            }}
        >
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};