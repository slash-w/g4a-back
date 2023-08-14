import Comment from "../models/Comments.js";

const verifyCommentOwnership = async (req, res, next) => {
  try {
    const comment_id = req.params.comment_id; // comment_id es un parametro de la URL

    if (req.user) {
      const comment = await Comment.findOne({ _id: comment_id, user_id: req.user._id });
      if (!comment) {
        throw createHttpError(403, "You don't have permission to edit this comment.");
      }
    } else {
      throw createHttpError(403, "You don't have permission to edit this comment.");
    }

    next();
  } catch (error) {
    next(error);
  }
};

export default verifyCommentOwnership;
