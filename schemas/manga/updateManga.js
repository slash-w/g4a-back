import Joi from "joi-oid";

const mangaUpdate = Joi.object({
    title: Joi.string()
    .min(3)
    .max(40)
    .required()
    .messages({
      'any.required': "TITLE REQUIRED",
      'string.empty': "TITLE REQUIRED",
      'string.min':   "TITLE TOO SHORT",
      'string.max':   "TITLE TOO LARGE"
    }),

  cover_photo: Joi.string()
  .uri()
  .required()
  .messages({
    'any.required': "IMG URL REQUIRED",
    'string.empty': "IMG URL REQUIRED",
    'string.uri':   "INVALID URL"
  }),

  description: Joi.string()
  .min(12)
  .max(500)
  .required()
  .messages({
    'any.required': "DESCRIPTION REQUIRED",
    'string.empty': "DESCRIPTION REQUIRED",
    'string.min':   "DESCRIPTION TOO SHORT",
    "string.max":   "DESCRIPTION TOO LARGE"

  }),
  
  category_id: Joi.objectId()
  .messages({
    'any.required': "CATEGORY ID REQUIRED",
    'string.empty': "CATEGORY ID REQUIRED",
    'string.min':   "CATEGORY ID TOO SHORT"
  }),
});

export default mangaUpdate;
