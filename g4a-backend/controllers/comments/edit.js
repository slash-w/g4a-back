import Comment from "../../models/Comment.js";

const updateComment = async (req, res, next) => {
  try {
    let update = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (update) {
      return res.status(200).json({
        success: true,
        message: ["Comment updated successfully"],
        update: update,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: ["Not found"],
      });
    }
  } catch (error) {
    next(error);
  }
};

export default updateComment;
