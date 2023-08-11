import Comment from "../models/Comments.js";

const commentAlreadyExists = async function (req, res, next) {
  try {
    const { product_id, user_id } = req.body;

    const existingComment = await Comment.findOne({
      product_id,
      user_id,
    });

    if (existingComment) {
      return res.status(400).json({
        success: false,
        message: "Comment already exists for this product by this user",
      });
    }

    return next();
  } catch (error) {
    next(error);
  }
};

export default commentAlreadyExists;
