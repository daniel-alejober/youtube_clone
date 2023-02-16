import express from "express";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./db/connectDB.js";
import userRoutes from "./routes/users.js";
import commentRoutes from "./routes/comments.js";
import videoRoutes from "./routes/videos.js";
import authRoutes from "./routes/auth.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/comments", commentRoutes);
app.use("/api/v1/videos", videoRoutes);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_DB);
    app.listen(8080, () => {
      console.log("Server connected in the port 8080");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
