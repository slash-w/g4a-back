import Joi from "joi-oid";

const gameUpdate = Joi.object({
  name: Joi.string().messages({}),

  detailed_description: Joi.string().min(30).messages({
    "string.min": "detailed description is too short",
  }),

  short_description: Joi.string().messages({}),

  header_image: Joi.string().uri().messages({
    "string.uri": "Invalid URL",
  }),

  publishers: Joi.array().items(Joi.string()).min(1).messages({
    "string.min": "Description is too short",
    "string.max": "Description is too long",
  }),

  price: Joi.number().positive().precision(2).messages({
    "number.positive": "Price must ve a valid number",
    "number.base": "Price must be a valid number",
    "number.precision": "Price can have up to 2 decimal places",
  }),
  genres: Joi.array()
    .items(
      Joi.object({
        id: Joi.string().messages({
          "string.base": "Genre ID must be a string",
        }),
        description: Joi.string().messages({
          "string.base": "Genre description must be a string",
        }),
      })
    )
    .min(1)
    .messages({
      "array.base": "Genres must be an array",
      "array.min": "At least one genre is required",
    }),
});

export default gameUpdate;
