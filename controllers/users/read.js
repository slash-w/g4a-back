export default function(req,res,next){
    try{
        return res.status(200).json({
            success:true,
            response:'acá nos vamos a conectar a mongo en sprint-3',
            message:'/chapters'
        })
    }
    catch(error){
        next(error)
    }
}