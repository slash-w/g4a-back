import Author from "../models/Authors.js";

async function is_active(req, res, next) {
  try {
    const author = await Author.findOne({ user_id: req.user._id });
    if (author.active === true) {
      return next();
    }
    return res.status(404).json({
      success: false,
      message: ["Author not found"],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: [{ error: error.message }],
    });
  }
}

export default is_active;
