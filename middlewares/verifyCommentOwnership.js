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

// import Comment from "../models/Comments.js";

// const verifyCommentOwnership = async (req, res, next) => {
//   try {
//     const comment_id = req.params.comment_id; // Assuming the comment_id is from the URL parameter

//     // Make an axios.get request to fetch the comment details based on the comment_id
//     const response = await axios.get(`/api/comments/${comment_id}`); // Adjust the API endpoint as needed
//     const comment = response.data; // Assuming the comment details are in the response data

//     if (req.user) {
//       if (comment.user_id.toString() !== req.user._id.toString()) {
//         // Check if the user_id associated with the comment doesn't match the authenticated user's _id
//         throw createHttpError(403, "You don't have permission to edit this comment.");
//       }
//     } else {
//       throw createHttpError(403, "You don't have permission to edit this comment.");
//     }

//     next();
//   } catch (error) {
//     next(error);
//   }
// };

// export default verifyCommentOwnership;
