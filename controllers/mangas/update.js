import Manga from "../../models/Manga.js";

export default async(req, res, next) => {
    try{
        console.log('>>>', req.params.id)
        await Manga.updateOne(
            {_id: req.params.id},
            {
                title: req.body.title,
                cover_photo: req.body.cover_photo,
                description: req.body.description,
                category_id: req.body.category_id
            }
        )
        return res.status(200).json({
            success: true,
            response: 'updated ' + `${req.body.title}`})
    }
    catch(error){
        next(error)
    }
}