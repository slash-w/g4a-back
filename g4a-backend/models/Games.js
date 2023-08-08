import { Schema, model, Types } from "mongoose";

let collection = "games"; //games
let schema = new Schema(
  {
    // author_id: {type: Types.ObjectId, ref: 'authors', required: true},
    name: { type: String, required: true }, //ya esta
    detailed_description: { type: String, required: true }, //ya esta
    short_description: { type: String, required: true}, //ya esta
    supported_languages: {type: String}, 
    header_image: { type: String, required: true }, //ya esta
    pc_requirements: {type: String},
    publishers: {type: Array, required: true},
    price: { type: Number, required: true }, // no esta
    platforms: { type: Object},
    genres: { type: Array, required: true },
    screenshots: { type: Array},
    movies: { type: Array },
    background: { type: String },
    keys: { type: Array }, // no esta
    rating_pos: { type: Number },
    rating_neg: { type: Number },
    
  },
  {
    timestamps: true,
  }
);

let Game = model(collection, schema);
export default Game;

//modelo GAMES ---------------
