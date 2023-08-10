import mongoose from "mongoose";

let url_link = "mongodb+srv://samuelgarciam03:WieWHxm38QLCU8h1@cluster0.c3gn6nm.mongodb.net/G4A";
console.log('DB LINK >>>', url_link)

mongoose
  .connect(url_link)
  .then(() => console.log("Database Connect"))
  .catch((error) => console.log(error));
