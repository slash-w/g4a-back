import Manga from "../../models/Manga.js"

export default async (req, res, next) => {
    try {
        let mangas = await Manga.find({author_id: req.query.author_id})
        .populate("category_id")
        if (mangas){
            console.log('B - Mangas >>>', mangas)
            return res.status(201).json({mangas})
        }
        return res.status(404).json({
            success: false,
            response: 'not found'
        })

    } catch (error) {
        return next(error);
    }
}