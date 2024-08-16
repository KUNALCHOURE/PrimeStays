const { string, required } = require("joi");
const mongoose=require("mongoose");
const schema=mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");

const userschema=new schema({
    email:{
        type:String,
        required:true,
    }
})

userschema.plugin(passportLocalMongoose);

module.exports=mongoose.model("User",userschema);