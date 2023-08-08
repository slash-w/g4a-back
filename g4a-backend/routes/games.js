import Router from "express";
import read_one from "../controllers/games/read_one.js";
import read from "../controllers/games/read.js";


const game_router = Router();

game_router.get('/:id', read_one) 
game_router.get('/', read) //leer uno o todos



export default game_router;
