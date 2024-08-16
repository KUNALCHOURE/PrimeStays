const { models } = require("mongoose");
const Listing=require("../models/listing")
const Review=require("../models/review")

module.exports.postreview=async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    
    
    const { comment, rating } = req.body.review; // Ensure this matches the form data
    const newReview = new Review({ comment, rating });
    newReview.author=req.user._id;
    console.log(newReview);
    listing.reviews.push(newReview);
    
    await newReview.save();
    await listing.save();
    req.flash("success","New review created");
    console.log("review saved");
    
    res.redirect(`/listings/${listing.id}`);
}

module.exports.delete=async (req, res) => {
    let { id, reviews_id } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviews_id } });
    await Review.findByIdAndDelete(reviews_id);
    req.flash("success"," review deleted");
    res.redirect(`/listings/${id}`);
}