import Router from "express";
import read_one from "../controllers/games/read_one.js";
import read from "../controllers/games/read.js";
import { game_filter } from "../controllers/games/filter.js";


const game_router = Router();

game_router.get('/:id', read_one) 
game_router.get('/', read) //leer uno o todos
game_router.get('/filter', game_filter)


export default game_router;
