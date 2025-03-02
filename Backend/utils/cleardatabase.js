// utils/clearDatabase.js
import mongoose from 'mongoose';
import User from '../models/user.js';
import dotenv from 'dotenv';

dotenv.config();

const clearDatabase = async () => {
    try {
        await mongoose.connect(process.env.ATLASDB_URL);
        console.log("Connected to MongoDB");

        await User.deleteMany({});
        console.log("All users deleted successfully");

    } catch (error) {
        console.error("Error clearing database:", error);
    } finally {
        await mongoose.connection.close();
        console.log("MongoDB connection closed");
    }
};

clearDatabase();

