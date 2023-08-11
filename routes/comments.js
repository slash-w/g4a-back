import Router from "express";
import passport from "../middlewares/passport.js";
import createComment from "../controllers/comments/create.js";
import updateComment from "../controllers/comments/edit.js";
import deleteComment from "../controllers/comments/destroy.js";
import verifyCommentOwnership from "../middlewares/verifyCommentOwnership.js";
import commentAlreadyExists from "../middlewares/commentExists.js";

let comment_router = Router();

comment_router.get("/", passport.authenticate("jwt", { session: false }));
comment_router.post("/", passport.authenticate("jwt", { session: false }), commentAlreadyExists, createComment);
comment_router.put("/id", passport.authenticate("jwt", { session: false }), verifyCommentOwnership, updateComment);
comment_router.delete("/id", passport.authenticate("jwt", { session: false }), verifyCommentOwnership, deleteComment);
comment_router.get("/:id", passport.authenticate("jwt", { session: false }));

export default comment_router;
