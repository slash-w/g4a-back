import Game from "../models/Games";

const gameExists = async function (req, res, next) {
  try {
    let one = await Game.findOne({
      author_id: req.body.author_id,
      title: req.body.title,
    });
    console.log(one);
    if (one) {
      return res.status(400).json({
        success: false,
        message: "Game already exists",
      });
    }
    return next();
  } catch (error) {
    next(error);
  }
};
export default mangaExists;
