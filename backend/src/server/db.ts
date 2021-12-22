import mongoose from "mongoose";
import { MongoUrl } from "./config";

const connectDb = async () => {
  return await mongoose
    .connect(MongoUrl)
    .then(() => console.log("Successfully connected to MongoDB"))
    .catch((err) => console.error(err));
};

export default connectDb;
