const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({  //KEYS NAME SHOUL BE THIS ONLY
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET,
})

 
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'wanderlust_DEV',
      allowedformat: ['png','jpg','jpeg'] ,//files extension that will be uploaded
      
    },
  });

  module.exports={
    cloudinary,
    storage,
  }