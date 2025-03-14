import pkg from 'cloudinary';
import streamifier from 'streamifier';
import dotenv from 'dotenv';

dotenv.config();

// Destructure the v2 property from the imported package
const { v2: cloudinary } = pkg;

// Configure Cloudinary with environment variables
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY,  
    api_secret: process.env.CLOUDINARY_API_SECRET  
});

// Function to upload a buffer to Cloudinary
const uploadToCloudinary = (buffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result.secure_url);
            }
        });

        streamifier.createReadStream(buffer).pipe(stream);
    });
};

export { uploadToCloudinary };