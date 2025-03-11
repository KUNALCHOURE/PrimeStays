import { Router } from "express";
import multer from "multer";
import { uploadcloudinary } from "../utils/cloudinary.js";
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
    .post(
        verifyJWT, // Middleware to verify JWT
        ishotellister, // Middleware to check if user is a hotel lister
        upload.single('image'), // Middleware to handle image upload
        async (req, res) => {
            try {
                // Upload image to Cloudinary
                const result = await new Promise((resolve, reject) => {
                    const uploadStream = uploadcloudinary.uploader.upload_stream(
                        { folder: 'listings' },
                        (error, result) => {
                            if (error) return reject(error);
                            resolve(result);
                        }
                    );
                    uploadStream.end(req.file.buffer);
                });

                // Call the create function with the image URL
                create(req, res, result.secure_url);
            } catch (error) {
                res.status(500).json({ error: 'An error occurred while uploading the image' });
            }
        }
    );

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