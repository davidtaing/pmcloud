import express from "express";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import compression from "compression";
import mongoose from "mongoose";

import { MongoUrl } from "./config";
import router from "./routes";

const app = express();
const port = 3000;

async function main() {
  await mongoose
    .connect(MongoUrl)
    .then(() => console.log("Successfully connected to MongoDB"))
    .catch((err) => console.error(err));

  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(mongoSanitize());
  app.use(compression());

  // Routers
  app.use("/v1", router);

  // Error Handler
  app.use((req, res, next) => {
    res.status(500).json({ message: "Internal Server Error" });
  });

  app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
  });
}

main();
