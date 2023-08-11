import { Schema, Types, model } from "mongoose";

let collection = "company";
let schema = new Schema(
  {
    name: { type: String, required: true },
    // last_name: {type: String},
    // city: {type: String},
    // country: {type: String},
    photo: { type: String, required: true },
    active: { type: Boolean },
    user_id: { type: Types.ObjectId, required: true, ref: "users" },
  },
  {
    timestamps: true,
  }
);

let Company = model(collection, schema);

export default Company;

// modelo COMPANY ----------------------
