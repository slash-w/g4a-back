import Comment from "../../models/Comments.js";

const getCommentsByGameId = async (req, res) => {
  try {
    const { id } = req.params;

    const comments = await Comment.find({ game_id: id });

    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: "Error fetching comments" });
  }
};

export default getCommentsByGameId;
