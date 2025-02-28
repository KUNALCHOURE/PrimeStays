import Joi from "joi";

export const listingschema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().min(0).required(),
    image: Joi.string().allow("", null),
});

export const reviewsSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().max(5).min(1).required(),
        comment: Joi.string().required(),
    }).required(),
});
