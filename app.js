if(process.env.NODE_EVN !="production"){
    require('dotenv').config();
    console.log(process.env);
}

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require('ejs-mate');
const wrapAsync = require('./utils/wrapasync.js');
const ExpressError = require('./utils/ExpressError.js');
const { listingschema,reviewsSchema } = require("./schema.js");
const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const wrapasync = require("./utils/wrapasync.js");
//routes
const listingroute=require("./routes/listings.js");
const reviewsroute=require("./routes/reviews.js");
const userroute=require("./routes/user.js");

const session=require('express-session');
const Mongostore=require('connect-mongo')
const app = express();
const port = 3030;

//const MONGO_URL = 'mongodb://127.0.0.1:27017/wonderlust';
const dburl=process.env.ATLASDB_URL;

const flash=require("connect-flash");
const passport=require("passport");
const localstrategy=require("passport-local");
const User=require("./models/user.js");




const EventEmitter = require('events');

const emitter = new EventEmitter();
emitter.setMaxListeners(20);

async function main() {
    await mongoose.connect(dburl);
}

main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const store=Mongostore.create({
    mongoUrl:dburl,
    crypto:{
        secret:process.env.SECRET,
    },
    touchAfter:24*3600,
})

store.on("error",()=>{
    console.log("Error in mongo session store");
})
//session 
const sessionoptions={
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:false,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // 1 week from now
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
}
// app.get("/", (req, res) => {
//     res.send("It is working");
// });



//using session 
app.use(session(sessionoptions));
app.use(flash());

//using passport 
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localstrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
    console.log('Current User:', req.user);
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentuser = req.user||null;
    next();
});

//creating a fake user
app.get("/demouser",async(req,res)=>{
    let fakeuser=new User({
        email:"abc@gmail.com",
        username:"delta-student"
    });
   let registereduser=await User.register(fakeuser,"helloworld");
   res.send(registereduser);

})


app.use("/listings",listingroute);
app.use("/listings/:id/reviews",reviewsroute);
app.use("/",userroute);



app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found"));
});

app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong" } = err;
    res.status(status).render("listings/error", { message });
});

app.listen(port, () => {
    console.log(`Working on port ${port}`);
});
