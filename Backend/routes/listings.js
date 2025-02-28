import { Router } from "express";
import asynchandler from "../utils/asynchandler.js";
import { verifyJWT } from "../middlewares/authmiddleware.js";
import { 
    index,
    show,
    create,
    updateListing,
    deleteListing
} from "../controllers/listings.js";

const router = Router();

router.route("/")
    .get(index)
    .post(verifyJWT, create);

router.route("/:id")
    .get(show)
    .put(verifyJWT, updateListing)
    .delete(verifyJWT, deleteListing);

export default router;