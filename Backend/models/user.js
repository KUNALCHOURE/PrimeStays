import mongoose from "mongoose";
import bcrypt from'bcrypt';
import jwt from 'jsonwebtoken';
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
   
},{timestamps:true});


UserSchema.pre('save',async function (next) {
    if(!this.isModified("password")) return next();

    this.password=await bcrypt.hash(this.password,10)
    next();
})

UserSchema.methods.ispasswordcorrect=async function(password){
    // this will return true or false 
      return await bcrypt.compare(password,this.password);
  }


  
UserSchema.methods.generateAcessToken=async function(){
    return jwt.sign(
     { //PAYLOD -INFO GIVEN
         _id:this._id,
         email:this.email,
         username:this.username,
       
 
     },
     process.env.ACCESS_TOKEN_SECRET, 
     {
         expiresIn:process.env.ACCESS_TOKEN_EXPIRY 
 
     },
 
    )
 }
 
 UserSchema.methods.generateRefreshToken=async function(){
     return jwt.sign(
         {
             _id:this._id,
            
     
         },
         process.env.REFRESH_TOKEN_SECRET,
         {
             expiresIn:process.env.REFRESH_TOKEN_EXPIRY
     
         },
     
        )
 }
 
// Export the model using ES Module syntax
const user = mongoose.model("user", UserSchema);
export default user;
