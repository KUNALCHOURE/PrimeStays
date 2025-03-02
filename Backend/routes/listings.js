import { Router } from "express";
import asynchandler from "../utils/asynchandler.js";
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
const router = Router();

router.route("/")
    .get(index)
    .post(verifyJWT,ishotellister, create);

router.route("/:id")
    .get(show)
    .put(verifyJWT,ishotellister, updateListing)
    .delete(verifyJWT,ishotellister, deleteListing);

router.route('/filters').get(filterdata);

export default router;