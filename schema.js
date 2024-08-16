const Joi = require('joi');
const review = require('./models/review');
module.exports.listingschema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().min(0).required(),
    image: Joi.string().allow("", null)
});
module.exports.reviewsSchema=Joi.object({
    review:Joi.object({
        rating:Joi.number().max(5).min(1).required(),
        comment:Joi.string().required(),
        
    }).required()
})