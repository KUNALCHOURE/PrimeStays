const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapasync = require("../utils/wrapasync.js");
const passport = require("passport");
const { route } = require("./listings.js");
const { saveurl } = require("../middlewares.js");
const usercontroller=require("../controllers/user.js");



//combining route for signup
router.route("/signup")
//form
.get(usercontroller.signup)
//save
.post( wrapasync(usercontroller.signupindb));

/**************************************************************/
/*combining route for login*/
router.route("/login")
//login form
.get( usercontroller.loginform)
//save 
.post( saveurl, passport.authenticate("local", { failureRedirect: '/login', failureFlash: true }), usercontroller.savelogin);


/**************************************************************/

// Logout
router.get("/logout",usercontroller.logout );

module.exports = router;
