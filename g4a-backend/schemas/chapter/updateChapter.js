import joi from "joi-oid";

const chapterUpdate = joi.object({
  title: joi.string().min(3).max(40).messages({
    "string.min": "TITLE TOO SHORT",
    "string.max": "TITLE TOO LARGE",
  }),
  cover_photo: joi.string().uri().messages({
    "string.uri": "INVALID URL",
  }),
  pages: joi.string().uri().messages({
    "string.uri": "INVALID URL",
  }),
  order: joi.number().min(0).messages({
    "number.min": "INVALID ORDER NUM",
  }),
});

export default chapterUpdate;
