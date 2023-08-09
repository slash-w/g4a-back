import Game from "../../models/Games.js"

export default async (req, res, next) => {
    try {
        const one = await Game.create(req.body);
        console.log('create.js >>>',one.body)
        return res.status(201).json({
            response: one,       
            success: true,         
            message: 'Game created'
        })
    } catch (error) {
        next(error)
    }
}