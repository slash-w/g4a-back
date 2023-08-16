import Joi from "joi-oid";

const gameCreate = Joi.object({
  name: Joi.string().messages({
    "any.required": "Name is required",
    "string.empty": "Name is required",
  }),

  detailed_description: Joi.string().min(30).required().messages({
    "any.required": "detailed description is required",
    "string.empty": "detailed description is required",
    "string.min": "detailed description is too short",
  }),

  short_description: Joi.string().required().messages({
    "any.required": "short description description is required",
    "string.empty": "short description description is required",
  }),

  header_image: Joi.string().uri().required().messages({
    "any.required": "Header Image URL is required",
    "string.empty": "Header Image URL is required",
    "string.uri": "Invalid URL",
  }),

  publishers: Joi.array().items(Joi.string().required()).min(1).messages({
    "any.required": "Description is required",
    "string.empty": "Description is required",
    "string.min": "Description is too short",
    "string.max": "Description is too long",
  }),

  price: Joi.number().positive().precision(2).messages({
    "any.required": "Price is required",
    "number.positive": "Price must ve a valid number",
    "number.base": "Price must be a valid number",
    "number.precision": "Price can have up to 2 decimal places",
  }),
  genres: Joi.array()
    .items(
      Joi.object({
        id: Joi.string().required().messages({
          "string.base": "Genre ID must be a string",
          "any.required": "Genre ID is required",
        }),
        description: Joi.string().required().messages({
          "string.base": "Genre description must be a string",
          "any.required": "Genre description is required",
        }),
      })
    )
    .min(1)
    .messages({
      "array.base": "Genres must be an array",
      "array.min": "At least one genre is required",
      "any.required": "Genres are required",
    }),
});

export default gameCreate;
