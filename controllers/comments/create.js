import Comment from "../../models/Comments.js";

let createComment = async (req, res, next) => {
  try {
    const { product_id, user_id, user_name, title, content, recommends } = req.body;

    const comment = new Comment({
      product_id,
      user_id,
      user_name,
      title,
      content,
      recommends,
    });

    await comment.save();

    return res.status(201).json({
      success: "ok",
      id: comment._id,
      timestamps: comment.createdAt,
    });
  } catch (error) {
    console.log(error);
    return next(500, error);
  }
};

export default createComment;
