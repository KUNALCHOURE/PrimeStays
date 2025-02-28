// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import authService  from '../services/authservice';
import { toast } from 'react-hot-toast';
import api from '../services/api';
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (credentials) => {
        try {
            const data = await authService.login(credentials);
            setUser(data.data.user);
            toast.success('Welcome back!');
        } catch (error) {
            toast.error(error.message);
            throw error;
        }
    };

    const register = async (userData) => {
        try {
            console.log("Inside register function in AuthContext", userData);
            
            // Call the authService to register the user
            const response = await authService.register(userData);  //we are getting response.data and we are naming it as response here
            
            console.log("User registered successfully", response);
            
            console.log("Full API Response:", response);

         
            console.log("Response Data:", response.data);
            // Check if response has user data
            if (!response || !response.data || !response.data.user) {
                throw new Error("Invalid response from the server");
            }
    
            // Set user in state
            setUser(response.data.user);

            toast.success("Welcome to Wanderlust!");
        } catch (error) {
            console.error("Error during registration:", error);
    
            // Extract error message correctly
            const errorMessage = error?.message || error?.response?.data?.message || "Signup failed. Please try again.";
    
            // Show error message in toast
            toast.error(errorMessage);
    
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

    useEffect(() => {
        const checkAuth = async () => {
            try {
               
                const response = await api.get("/auth/current-user");  // Use existing route
              

                 //console.log(response.data)
                if (response.data.data.userobject) {

                    setUser(response.data.data.userobject);
                }
            } catch (error) {
                console.error("Auth check failed:", error);
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
                register, 
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