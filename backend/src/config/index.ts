import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(__dirname, "../../.env") });

const getMongoUrl = () => {
  switch (process.env.NODE_ENV) {
    case "production":
      return process.env.MONGO_PROD_URL;
    case "development":
    default:
      return process.env.MONGO_DEV_URL;
  }
};

export const MongoUrl = getMongoUrl() as string;
