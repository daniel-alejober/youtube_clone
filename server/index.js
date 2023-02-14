import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./db/connectDB.js";

dotenv.config();
const app = express();

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
