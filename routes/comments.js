import Router from "express";
import passport from "../middlewares/passport.js";
import createComment from "../controllers/comments/create.js";
import updateComment from "../controllers/comments/edit.js";
import deleteComment from "../controllers/comments/destroy.js";
import verifyCommentOwnership from "../middlewares/verifyCommentOwnership.js";
import commentAlreadyExists from "../middlewares/commentExists.js";
import getCommentsByGameId from "../controllers/comments/getCommentsByGameId.js";

let comment_router = Router();

comment_router.post("/", createComment);
comment_router.put("/:id", updateComment);
comment_router.delete("/:id", deleteComment);
comment_router.get("/:id", getCommentsByGameId);

export default comment_router;
