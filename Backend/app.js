// ES Module way to load environment variables
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

// Import routes
import listingRoutes from "./routes/listings.js";
import reviewsRoutes from "./routes/reviews.js";
import userRoutes from "./routes/user.js";

// Import models and utilities
import Apierror from "./utils/Apierror.js"; // Import Apierror

const port = process.env.PORT || 3030;
const dbUrl = process.env.ATLASDB_URL;

// Connect to MongoDB
mongoose.connect(dbUrl)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });

// Middleware
app.use(cors({
    origin: "http://localhost:5173", // Your React app URL
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API Routes
app.use("/api/listings", listingRoutes);
app.use("/api/listing", reviewsRoutes);
app.use("/api/auth", userRoutes);

// Catch All Invalid Routes (404 Handler)

app.use((err, req, res, next) => {
    // If error is an instance of Apierror, use its properties
    if (err instanceof Apierror) {
        return res.status(err.statuscode).json({
            success: false,
            status: err.statuscode,
            message: err.message || "An error occurred", // ✅ Ensure message is included
            errors: err.errors || [],
        });
    }

    // Handle other unexpected errors
    res.status(500).json({
        success: false,
        status: 500,
        message: "Something went wrong",
        errors: [],
    });
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
