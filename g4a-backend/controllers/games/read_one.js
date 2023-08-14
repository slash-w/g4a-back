import Game from "../../models/Games.js";

// Controlador para ver un game específico basado en su ID
export default async (req, res, next) => {
  const gameId = req.params.id;
  console.log("game id>>>", gameId);

  try {
    const game = await Game.findById(gameId).select("-_id");

    res.status(200).json({
      success: true,
      message: "Game found",
      game: game,
    });
  } catch (error) {
    next(error);
  }
};
