import Comment from "../models/Comments.js";

async function fetchCommentsByGameId(req, res, next) {
  const gameId = req.params.game_id;

  try {
    const comments = await Comment.find({ game_id: gameId });
    req.comments = comments;
    next();
  } catch (error) {
    res.status(500).json({ error: "Error fetching comments" });
  }
}

module.exports = fetchCommentsByGameId;
