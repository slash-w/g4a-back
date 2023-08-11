import { Schema, model, Types } from "mongoose";

let collection = "comments";
let schema = new Schema(
  {
    product_id: { type: String, required: true },
    user_id: { type: String, required: true },
    // user_name: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    recommends: { type: Boolean, default: false }, //similar a steam, like/dislike
  },
  {
    timestamps: true,
  }
);

let Comment = model(collection, schema);
export default Comment;
