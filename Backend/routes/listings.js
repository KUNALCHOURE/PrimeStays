import { Router } from "express";
import multer from "multer";
import { verifyJWT } from "../middlewares/authmiddleware.js";
import {
    index,
    show,
    create,
    updateListing,
    deleteListing,
    filterdata
} from "../controllers/listings.js";
import ishotellister from "../middlewares/ishotellister.js";

const router = Router(); // Initialize the router

// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to get all listings
router.route("/")
    .get(index)
    .post(verifyJWT, upload.single("image"), create);

// Route to get, update, or delete a specific listing by ID
router.route("/:id")
    .get(show)
    .put(
        verifyJWT, // Middleware to verify JWT
        ishotellister, // Middleware to check if user is a hotel lister
        updateListing
    )
    .delete(
        verifyJWT, // Middleware to verify JWT
        ishotellister, // Middleware to check if user is a hotel lister
        deleteListing
    );

// Route to get filter data
router.route('/filters').get(filterdata);

export default router;