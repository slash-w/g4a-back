import express from "express";
import game_router from "./games.js";

let router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/games", game_router);


export default router;
