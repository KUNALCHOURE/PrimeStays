const Listing=require("./models/listing.js")
const Review=require("./models/review.js")
const { listingschema, reviewsSchema } = require("./schema.js");

const ExpressError = require('./utils/ExpressError.js');

module.exports.isLogedin=(req,res,next)=>{
   
    if(!req.isAuthenticated()){
        //regirect url
        console.log(req.originalUrl);
        req.session.redirecturl=req.originalUrl;
        req.flash("error","you must be logged in to creat Listing!!");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveurl=(req,res,next)=>{
    console.log("done");
    if(req.session.redirecturl){
        res.locals.redirecturl=req.session.redirecturl;
    }
    next();
}

module.exports.isowner=async(req,res,next)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currentuser._id)){
        req.flash("error","you are not the owner of the listing ");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.validateSchema = (req, res, next) => {
    const { error } = listingschema.validate(req.body);
    if (error) {
        console.error("Validation Error:", error.details);
        const errmsg = error.details.map(el => el.message).join(",");
        next(new ExpressError(400, errmsg));
    } else {
        next();
    }
};

module.exports.validatereview = (req, res, next) => {
    const { error } = reviewsSchema.validate(req.body);
    if (error) {
        const errmsg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400, errmsg);
    } else {
        next();
    }
};


module.exports.isreviewauthor=async(req,res,next)=>{
    let {id,reviews_id}=req.params;
    let review=await Review.findById(reviews_id);
    if(!review.author.equals(res.locals.currentuser._id)){
        req.flash("error","you are not the author of the review");
        return res.redirect(`/listings/${id}`);
    }
    next();
}
