import Joi from "joi-oid"; //biblioteca de JS que

const mangaCreate = Joi.object({
  author_id: Joi.objectId().messages({
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

  content: Joi.string().min(10).max(600).required().messages({
    "any.required": "Description is required",
    "string.empty": "Description is required",
    "string.min": "Description is too short",
    "string.max": "Description is too long",
  }),

  recommends: Joi.boolean().messages({
    "any.required": "Choose one option please",
    "string.empty": "Choose one option please",
  }),
});

export default mangaCreate;
