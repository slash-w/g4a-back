import User from "../../models/User.js";
import Author from "../../models/Authors.js"

export default async(req,res,next)=> {
    try {
        let one = await User.findOneAndUpdate(
            {email: req.body.email},
            {online: true},
            {new: true}
        )
        delete one.password
        const author = await Author.findOne({ user_id: one._id });
        console.log('AUTHOR >>>', author)
        return res.status(200).json({
            success:true,
            message:'user signed in!',
            response: {
                user: one.email,
                photo: one.photo,
                token: req.token,
                author_id: author._id,
            }
        })
    } catch (error) {
        console.log(error)
        return next()
    }
}