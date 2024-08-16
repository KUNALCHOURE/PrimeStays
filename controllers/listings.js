const { models } = require("mongoose");
const Listing=require("../models/listing")

module.exports.index=async (req, res) => {
    console.log("hello");
    const data = await Listing.find({});
    res.render("listings/index", { data });
};
module.exports.rendernew=(req, res) => {
    res.render("listings/new.ejs");
}

module.exports.show=async (req, res) => {
    const { id } = req.params;
    const data = await Listing.findById(id).populate({path:"reviews",
        populate:{
            path:"author"
        }
    }).populate("owner");
    if (!data) {
        req.flash("error", "Listing you requested for does not exist");
        return res.redirect("/listings");
    }
    res.render("listings/show", { data });
    console.log(data);
};

module.exports.create=async (req, res) => {
    let url=req.file.path;      //url of image in cloud 
    let filename=req.file.filename;
    console.log("create");
   // const newListing=new Listing(req.body.listing);

    
    const { title, description, image, price, location, country } = req.body;
    const newListing = new Listing({
        title,
        description,
        price,
        location,
        country
    });
newListing.image={url,filename};
newListing.owner=req.user._id; //passport stores the info of user in req 
    await newListing.save();
    req.flash("success", "New listing created");
    res.redirect("/listings");
}

module.exports.edit=async (req, res) => {
    const { id } = req.params;
    const data = await Listing.findById(id);
    if (!data) {
        req.flash("error", "Listing you requested for does not exist");
        return res.redirect("/listings");
    }
    let orignalimageurl=data.image.url;
    orignalimageurl=orignalimageurl.replace("/upload","/upload/h_300,w_250");
    res.render("listings/edit", { data,orignalimageurl });
}

module.exports.updatedbafteredit=async (req, res) => {
    const { id } = req.params;
    const { title, description, image, price, location, country } = req.body;
 // let listing=await Listing.findByIdAndUpdate(id,{...req.body.listing});
    const existingListing = await Listing.findById(id);

    const updateData = {
        title,
        description,
        price,
        location,
        country,
        image:existingListing.image,
    };
/* 
    if (image && image.url) {
        updateData.image = image;
    } else {
        updateData.image = existingListing.image;
    }
*/
        // Update image if new image file provided
        if (typeof req.file!=="undefined") {
            console.log("file founded ");
            let url=req.file.path;
           let filename=req.file.filename;
        updateData.image={url,filename};
         //  await listing.save();
        }

   let updatedListing = await Listing.findByIdAndUpdate(id, updateData, { new: true });

 
    req.flash("success", "Listing updated");
    res.redirect(`/listings/${id}`);
}

module.exports.delete=async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted");
    res.redirect("/listings");
}