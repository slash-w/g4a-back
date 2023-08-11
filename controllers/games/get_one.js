import Game from "../../models/Games.js";

const get_game_by_id = async (req, res) => {
  try {
    const gameId = req.params.id;
    
    const game = await Game.findById(gameId);
    
    if (!game) {
      return res.status(404).json({
        success: false,
        message: 'Game not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Game found',
      game: game
    });
  } catch (error) {
    console.error('Error while fetching game by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { get_game_by_id };
