import express from "express";
import verifyJWT from "../jwt/verifyJWT.js";
import {
  addVideo,
  updateVideo,
  deleteVideo,
  getVideo,
} from "../controllers/video.js";

const router = express.Router();

router.post("/", verifyJWT, addVideo);
router.put("/:id", verifyJWT, updateVideo);
router.delete("/:id", verifyJWT, deleteVideo);
router.get("/find/:id", getVideo);

export default router;
