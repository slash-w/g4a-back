import Game from "../../models/Games.js"

// Controlador para ver un game específico basado en su ID
export default async (req, res, next) => {
    
  const gameId = req.params.id

  try {
    const game = await Game.findById(gameId)
    .select('title cover_photo description -_id')
    .populate({
      path: 'category_id',
      select: 'name -_id'
    })
    .populate({
      path: 'author_id',
      select: 'name last_name -_id'
    })
    
    res.status(200).json({ 
        success: true,
        message: 'Game found',
        game: game
     })
  } 
  catch (error) {
     next(error)
  }
}



