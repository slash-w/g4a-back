import jwt from 'jsonwebtoken'

export default (req, res, next)=> {
    let token = jwt.sign(
        {email:req.body.email},  //objeto a encriptar
        process.env.SECRET_KEY, //llave para tokenizar/destokenizar (crear variable de entorno)
        {expiresIn:60*60*24*7}
    )
    req.token = token
    return next()
}