import Comment from "../../g4a-backend/models/Comments.js";

const deleteComment = async (req, res, next) => {
  try {
    let deleted = await Comment.findOneAndDelete({ _id: req.params.id });
    if (deleted) {
      return res.status(200).json({
        success: true,
        message: "Comment deleted.",
        deleted,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Not Found",
      });
    }
  } catch (error) {
    next(error);
  }
};

export default deleteComment;
