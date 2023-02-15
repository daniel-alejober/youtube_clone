import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
} from "../controllers/user.js";
import verifyJWT from "../jwt/verifyJWT.js";

const router = express.Router();

router.put("/:id", verifyJWT, updateUser);
router.delete("/:id", verifyJWT, deleteUser);
router.get("/find/:id", getUser);
router.put("/sub/:id", verifyJWT, subscribe);
router.put("/unsub/:id", verifyJWT, unsubscribe);
router.put("like/:videoId", verifyJWT, like);
router.put("like/:videoId", verifyJWT, dislike);

export default router;
