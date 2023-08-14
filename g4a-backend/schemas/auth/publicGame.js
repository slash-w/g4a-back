import Joi from "joi-oid"; //biblioteca de JS que

const publicGame = Joi.object({
  author_id: Joi.objectId().messages({
    // company_id
    "any.required": "Author ID is required",
    "string.empty": "Author ID is required",
    "string.min": "Author ID is required",
  }),

  title: Joi.string().min(3).max(30).required().messages({
    "any.required": "Title is required",
    "string.empty": "Title is required",
    "string.min": "Title is too short",
    "string.max": "Title is too long",
  }),

  cover_photo: Joi.string().uri().required().messages({
    "any.required": "Image URL is required",
    "string.empty": "Image URL is required",
    "string.uri": "Invalid URL",
  }),

  description: Joi.string().min(10).max(350).required().messages({
    "any.required": "Description is required",
    "string.empty": "Description is required",
    "string.min": "Description is too short",
    "string.max": "Description is too large",
  }),

  category_id: Joi.objectId().messages({
    "any.required": "Category ID is required",
    "string.empty": "Category ID is required",
    "string.min": "Category ID is too short",
  }),
});

export default publicGame;
