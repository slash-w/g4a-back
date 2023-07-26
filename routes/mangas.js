import { Router } from "express";

import read from "../controllers/mangas/read.js";
import create from "../controllers/mangas/create.js"

import validator from "../middlewares/validator.js"
import mangaCreate from "../schemas/manga/createManga.js"
import mangaUpdate from "../schemas/manga/updateManga.js";

import mangaExists from "../middlewares/mangaExists.js";
import passport from "../middlewares/passport.js";
import read_one from "../controllers/mangas/read_one.js";
import get_me from "../controllers/mangas/get_me.js";
import update from "../controllers/mangas/update.js";
import deleteManga from "../controllers/mangas/delete.js";
import finds_id from "../middlewares/finds_id.js";
import is_active from "../middlewares/is_active.js";
import is_property_of from "../middlewares/is_property_of.js";


const mangas_router = Router();
mangas_router.delete("/:id", passport.authenticate("jwt", { session: false }), finds_id, deleteManga);
mangas_router.put("/:id", validator(mangaUpdate), passport.authenticate("jwt", { session: false }), validator(mangaUpdate), finds_id, update);
mangas_router.get("/me", passport.authenticate('jwt',{ session:false }), finds_id, get_me)
mangas_router.get("/", read); //GET: para leer (TODOS o SOLO UNO) autores


mangas_router.get('/:id', read_one)
mangas_router.post("/create", validator(mangaCreate), passport.authenticate('jwt',{ session:false }), mangaExists, create)   //POST: para crear un autor
//mangas_router.put()    //PUT: para actualizar un autor
//mangas_router.delete() //DELETE: para eliminar un autor

export default mangas_router;
