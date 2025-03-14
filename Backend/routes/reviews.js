import { Router } from "express";
import asynchandler from "../utils/asynchandler.js";
import { verifyJWT } from "../middlewares/authmiddleware.js";
import { createReview, deleteReview } from "../controllers/reviews.js"; // Ensure the file path is correct


const router = Router();

// Route to create a review
router.route("/:id/reviews").post( // ✅ Now `id` is correctly captured from the URL
    verifyJWT, 
    createReview
);


// Route to delete a review
router.route("/:id/reviews/:reviews_id").delete(
    verifyJWT, 
    asynchandler(deleteReview)
);


export default router;
