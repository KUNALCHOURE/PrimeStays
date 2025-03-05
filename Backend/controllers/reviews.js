import Listing from "../models/listing.js";
import Review from "../models/review.js";
import Apierror from "../utils/Apierror.js";
import Apiresponse from "../utils/apiresponse.js";
import asynchandler from "../utils/asynchandler.js";
const createReview = asynchandler(async (req, res, next) => {
    // Find the listing by ID4
    console.log("helooooooooooooooooooo")
    console.log(req.params)
    let {id}=req.params;
    console.log(id);
    const listing = await Listing.findById(req.params.id);
    
    if (!listing) {
        return next(new Apierror(404, "Listing not found"));
    }

    // Extract data safely from req.body
    const { comment, rating } = req.body;
       console.log(comment);
       console.log(rating);
    // Validate input
    if (!comment || !rating || typeof rating !== "number" || rating < 1 || rating > 5) {
        return next(new Apierror(400, "Invalid review data. Comment is required, and rating must be between 1 and 5."));
    }

    // Create the new review
    const newReview = new Review({ 
        comment, 
        rating,
        author: req.user._id 
    });

    // Add review ID to listing
    listing.reviews.push(newReview._id);
    
    // Save both review and listing
    await Promise.all([
        newReview.save(),
        listing.save()
    ]);

    // Return the new review with author details
    const populatedReview = await Review.findById(newReview._id)
        .populate('author', 'username');
     
    console.log(populatedReview);
    return res.status(201).json(
        new Apiresponse(201, populatedReview, "Review created successfully")
    );
});

// Delete a review
 const deleteReview = asynchandler(async (req, res) => {
    const { id, reviews_id } = req.params;

    // Remove review from listing and delete review
    await Promise.all([
        Listing.findByIdAndUpdate(id, { 
            $pull: { reviews: reviews_id } 
        }),
        Review.findByIdAndDelete(reviews_id)
    ]);

    return res.status(200).json(
        new Apiresponse(200, null, "Review deleted successfully")
    );
});

export {createReview,deleteReview};
