const express = require("express");
const router = express.Router();
const wrapAsync = require('../utils/wrapasync.js');
const { listingschema, reviewsSchema } = require("../schema.js");

const ExpressError = require('../utils/ExpressError.js');
const Listing = require("../models/listing.js");
const { isLogedin,isowner,validateSchema} = require("../middlewares.js");
const listingcontroller=require("../controllers/listings.js");

const multer  = require('multer')
const {storage}=require("../cloudconfig.js")
const upload = multer({ storage })

//we are merging all routes with same address 
router
.route("/")
.get(wrapAsync(listingcontroller.index))
// CREATE ROUTE
.post(isLogedin,upload.single('image'),validateSchema,wrapAsync(listingcontroller.create));


/****************************************************************** */
// NEW LISTING ROUTE
router.get("/new", isLogedin,listingcontroller.rendernew);

/****************************************************************** */

/*combine route for show ,update,delete********/
router
.route("/:id")
//show route
.get(wrapAsync(listingcontroller.show))
//update route
.put( isLogedin,isowner,upload.single('image'), validateSchema, wrapAsync(listingcontroller.updatedbafteredit))
//delete route
.delete( isLogedin,isowner, wrapAsync(listingcontroller.delete));


/****************************************************************** */

// EDIT ROUTE
router.get("/:id/edit", wrapAsync(listingcontroller.edit));

module.exports = router;
