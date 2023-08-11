import { Schema, model } from "mongoose";

let collection = "users";
let schema = new Schema(
  {
    email: { type: String, required: true }, //ya esta
    password: { type: String, required: true }, //ya esta
    photo: { type: String, required: false }, //ya esta
    role: { type: Number, default: 0 },
    // online:{type: Boolean, default:false},
    verified: { type: Boolean, default: true },
    verify_code: { type: String },
  },
  {
    timestamps: true,
  }
);

let User = model(collection, schema);

export default User;
