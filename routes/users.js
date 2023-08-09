import Router from 'express'
import read from '../controllers/users/read.js'
//import register from '../controllers/auth/register.js'
//import validator from '../middlewares/validator.js'
//import userRegister from '../schemas/auth/register.js'
//import accountExists from '../middlewares/accountExists.js'
//import createHash from '../middlewares/createHash.js'
//import signin from '../controllers/auth/signin.js'
//import signout from '../controllers/auth/signout.js';
//import userSignin from '../schemas/auth/userSigninSchema.js';
//import accountNotExist from '../middlewares/accountNotExist.js';
//import passwordIsOk from '../middlewares/passwordIsOk.js';
//import generateToken from '../middlewares/generateToken.js';
//import passport from '../middlewares/passport.js';
//import signintoken from '../controllers/auth/signintoken.js'


let auth_router = Router()

auth_router.get('/', read)
//auth_router.post('/register', validator(userRegister), accountExists, createHash, register)
//auth_router.post('/signin', validator(userSignin), accountNotExist,passwordIsOk,generateToken, signin)
//auth_router.get('/signintoken', passport.authenticate('jwt', { session:false }), signintoken)
//auth_router.post('/signout', passport.authenticate('jwt', { session:false }), signout)

export default auth_router