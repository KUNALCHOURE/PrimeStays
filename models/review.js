const mongoose = require("mongoose");
const { Schema } = mongoose; // Import Schema from mongoose
const MONGO_URL = 'mongodb://127.0.0.1:27017/wonderlust';

const reviewsSchema = new Schema({  // Corrected the typo here
    comment: String,
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User",
    }
});

module.exports = mongoose.model("Review", reviewsSchema);  // Corrected the typo here and used proper model name
