import Listing from "../models/listing.js";
import Apierror from "../utils/Apierror.js";
import Apiresponse from "../utils/apiresponse.js";
import asynchandler from "../utils/asynchandler.js";

// Get all listings
const index = asynchandler(async (req, res) => {
    const listings = await Listing.find({});
    return res.status(200).json(
        new Apiresponse(200, listings, "Listings fetched successfully")
    );
});

// Show single listing
const show = asynchandler(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author"
            }
        })
        .populate("owner");

    if (!listing) {
        return res.status(404).json(
            new Apierror(404, "Listing not found")
        );
    }

    return res.status(200).json(
        new Apiresponse(200, listing, "Listing fetched successfully")
    );
});

// Create new listing
const create = asynchandler(async (req, res) => {
    //let url = req.file.path;
   // let filename = req.file.filename;
//console.log(url);
    const { title, description, price, location, country,image } = req.body;
    
    const newListing = new Listing({
        title,
        description,
        price,
        location,
        country,
        image: image,
        owner: req.user._id
    });

    await newListing.save();
    
    return res.status(201).json(
        new Apiresponse(201, newListing, "Listing created successfully")
    );
});

// Update listing
const updateListing = asynchandler(async (req, res) => {
    const { id } = req.params;
    const { title, description, price, location, country } = req.body;

    const existingListing = await Listing.findById(id);
    
    if (!existingListing) {
        return res.status(404).json(
            new Apiresponse(404, null, "Listing not found")
        );
    }

    const updateData = {
        title,
        description,
        price,
        location,
        country,
        image: existingListing.image,
    };

    if (req.file) {
        updateData.image = {
            url: req.file.path,
            filename: req.file.filename
        };
    }

    const updatedListing = await Listing.findByIdAndUpdate(
        id, 
        updateData, 
        { new: true }
    );

    return res.status(200).json(
        new Apiresponse(200, updatedListing, "Listing updated successfully")
    );
});

// Delete listing
const deleteListing = asynchandler(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findByIdAndDelete(id);
    
    if (!listing) {
        return res.status(404).json(
            new Apiresponse(404, null, "Listing not found")
        );
    }

    return res.status(200).json(
        new Apiresponse(200, null, "Listing deleted successfully")
    );
});

export { index, show, deleteListing, updateListing, create };
