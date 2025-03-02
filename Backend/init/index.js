import mongoose from "mongoose";
import Listing from "../models/listing.js";
import { sampleListings } from "./data.js"; // Your new listings data
import dotenv from 'dotenv';

dotenv.config();

const initDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.ATLASDB_URL);
        console.log("Connected to MongoDB");

        // Delete all existing listings
        await Listing.deleteMany({});
        console.log("Cleared existing listings");

        // Insert new listings
        await Listing.insertMany(sampleListings);
        console.log("Added new listings successfully");

    } catch (error) {
        console.error("Error:", error);
    } finally {
        // Close the connection
        await mongoose.connection.close();
        console.log("MongoDB connection closed");
    }
};

// Run the initialization
initDB();