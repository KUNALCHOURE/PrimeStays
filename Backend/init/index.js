const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const { data } = require("./data.js"); // Your sample listings data

// If using environment variables
if(process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const dbUrl = process.env.ATLASDB_URL;

async function main() {
    try {
        await mongoose.connect(dbUrl);
        console.log("Connected to DB");
        
        // Delete existing data
        await Listing.deleteMany({});
        console.log("Old data deleted");

        // Insert new data
        await Listing.insertMany(data);
        console.log("New data inserted");

    } catch (err) {
        console.log("Error occurred:");
        console.log(err);
    } finally {
        // Close the connection
        mongoose.connection.close();
    }
}

main()
    .then(() => {
        console.log("Seeding completed!");
    })
    .catch((err) => {
        console.log("Error in seeding:");
        console.log(err);
    });