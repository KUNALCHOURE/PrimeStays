const { models } = require("mongoose");
const User = require("../models/user.js");
module.exports.signup=(req, res) => {
    res.render("users/signup.ejs");
}


module.exports.signupindb=async (req, res) => {   // wrapasync is used for the error handling 
    try {
        let { username, email, password } = req.body;

        let newuser = new User({
            email,
            username    
        });

        const registereduser = await User.register(newuser, password);
        
        req.login(registereduser, (err) => {
            if (err) {
                req.flash("error", err.message);
                return res.redirect("/signup");
            }
            req.flash("success", "Welcome to Wanderlust");
            res.redirect("/listings");
        });
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
}

module.exports.loginform=(req, res) => {
    res.render("users/login.ejs");
}

module.exports.savelogin=async(req, res) => {
    req.flash("success", "Welcome to Wanderlust, you are logged in")
   let redirect=res.locals.redirecturl || "/listings"; // agar res.locals.redirecturl khali hai toh /listing redirect url mai store hoga
    res.redirect(redirect);  // redirectUrl is the stored URL from the saveurl middleware
}

module.exports.logout=(req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You are logged out now");
        res.redirect("/listings");
    });
}