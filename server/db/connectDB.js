import mongoose from "mongoose";

const connectDB = async (url) => {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(url);
    console.log("Connected DB");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
