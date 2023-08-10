import express from "express";
import game_router from "./games.js";
import auth_router from "./users.js";
import comment_router from "./comments.js";

let router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/games", game_router);
router.use("/auth", auth_router);
router.use("comments", comment_router);
export default router;
