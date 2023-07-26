import Manga from "../../models/Manga.js";
import Chapter from "../../models/Chapter.js";

export default async (req, res, next) => {
    try{
        await Manga.deleteOne({_id: req.params.id})
        await Chapter.deleteMany({manga_id: req.params.id})
        return res.status(200).json({
            success: true,
            response: 'deleted'})
    }
    catch (error){
        next(error)
    }
}