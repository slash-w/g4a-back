import Game from "../../models/Games.js";

export default async function (req, res, next) {
  try {
    const idGame = req.params.id;
    // Encontrar el capítulo en la base de datos
    const game = await Game.findById(idGame);
    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }
    // Actualizar los datos del capítulo con los nuevos datos(solo actualiza los campos presentes en req.body)
    game.set(req.body);
    // Guardar los cambios en la base de datos
    await game.save();

    res.json({ message: "Game update succeful" });
  } catch (err) {
    return next(err);
  }
}
