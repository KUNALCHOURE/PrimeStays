import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewsSchema = new Schema({
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
    author: {
        type: Schema.Types.ObjectId,
        ref: "user",
    }
});

const Review = mongoose.model("Review", reviewsSchema);

export default Review;
