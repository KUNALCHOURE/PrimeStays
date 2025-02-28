import Listing from "./models/listing.js";
import Review from "./models/review.js";
import { listingschema, reviewsSchema } from "./schema.js";
import ExpressError from "./utils/ExpressError.js";


 const saveUrl = (req, res, next) => {
    console.log("done");
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

 const isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing.owner.equals(res.locals.currentUser._id)) {
        req.flash("error", "You are not the owner of the listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

 const validateSchema = (req, res, next) => {
    const { error } = listingschema.validate(req.body);
    if (error) {
        console.error("Validation Error:", error.details);
        const errMsg = error.details.map(el => el.message).join(",");
        next(new ExpressError(400, errMsg));
    } else {
        next();
    }
};

 const validateReview = (req, res, next) => {
    const { error } = reviewsSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

 const isReviewAuthor = async (req, res, next) => {
    let { id, reviews_id } = req.params;
    let review = await Review.findById(reviews_id);
    if (!review.author.equals(res.locals.currentUser._id)) {
        req.flash("error", "You are not the author of the review");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

export {saveUrl,isOwner,isReviewAuthor,validateReview,validateSchema}