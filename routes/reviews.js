const express=require("express");
const route=express.Router({ mergeParams: true });;
const wrapAsync = require('../utils/wrapasync.js');
const { listingschema,reviewsSchema } = require("../schema.js");
const Review = require("../models/review.js");
const ExpressError = require('../utils/ExpressError.js');
const Listing = require("../models/listing.js");
const {validatereview, isLogedin, isreviewauthor}=require("../middlewares.js");

const reviewcontroller=require("../controllers/reviews.js")

const validateSchema = (req, res, next) => {
    const { error } = listingschema.validate(req.body);
    if (error) {
        const errmsg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400, errmsg);
    } else {
        next();
    }
};


route.post("/",isLogedin, validatereview,wrapAsync(reviewcontroller.postreview));

route.delete("/:reviews_id", isLogedin,isreviewauthor,wrapAsync(reviewcontroller.delete));


module.exports=route;