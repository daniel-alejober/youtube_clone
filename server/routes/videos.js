import express from "express";
import verifyJWT from "../jwt/verifyJWT.js";
import {
  addVideo,
  updateVideo,
  deleteVideo,
  getVideo,
  addView,
  trend,
  random,
  sub,
  getByTags,
  search,
} from "../controllers/video.js";

const router = express.Router();

router.post("/", verifyJWT, addVideo);
router.put("/:id", verifyJWT, updateVideo);
router.delete("/:id", verifyJWT, deleteVideo);
router.get("/find/:id", getVideo);
router.get("/view/:id", addView);
router.get("/random", random);
router.get("/trend", trend);
router.get("/sub", verifyJWT, sub);
router.get("/tags", getByTags);
router.get("/search", search);

export default router;
