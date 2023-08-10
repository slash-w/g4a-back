import createHttpError from 'http-errors'
import Company from '../../models/Companies.js'

export default async(req,res,next) => {
    try{
        let all = await Company.find()
        if(all.length > 0){
            return res.status(200).json({
                response:all,
                success:true,
                message:'you have requested GET /api/Companys/',
                date: new Date()
            })
        }
        else{
            return next(createHttpError(404, 'Not found Companys'))
        }
    }
    catch(error){
        next(error)
    }
}