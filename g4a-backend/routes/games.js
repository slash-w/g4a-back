import Router from "express";
import read_one from "../controllers/games/read_one.js";
import read from "../controllers/games/read.js";
import gameUpdate from "../schemas/game/updateGame.js";
import updateGame from "../controllers/games/update.js";
import destroyGame from "../controllers/games/destroy.js";
import passport from "../middlewares/passport.js";
import validator from "../middlewares/validator.js";
import create from "../controllers/games/create.js";
import pay from "../controllers/games/pay.js";

const game_router = Router();

game_router.get("/:id", read_one);
game_router.get("/", read); //leer uno o todos
game_router.post("/create", create); //leer uno o todos
game_router.post("/payment", pay);
game_router.put(
  "/:id",
  validator(gameUpdate),
  passport.authenticate("jwt", { session: false }),
  updateGame
);
game_router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  destroyGame
);

export default game_router;
