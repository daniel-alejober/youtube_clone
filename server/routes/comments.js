import express from "express";
import verifyJWT from "../jwt/verifyJWT.js";
import {
  deleteComment,
  addComment,
  getComments,
} from "../controllers/comment.js";

const router = express.Router();

router.post("/:videoId", verifyJWT, addComment);
router.get("/:videoId", getComments);
router.delete("/video/:videoId/comment/:commentId", verifyJWT, deleteComment);

export default router;
