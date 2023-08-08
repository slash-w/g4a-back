import Router from 'express';
import read from '../controllers/companies/read.js'

let companies_router = Router();

// companies_router.post() //crea un autor
companies_router.get('/', read) //leer uno o todos
// companies_router.purge() //actualizar un autor
// companies_router.delete() //elimina un autor


export default companies_router;