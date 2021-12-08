import express from "express";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import compression from "compression";
import mongoose from "mongoose";
import { initialize } from "express-openapi";
import swaggerUi from "swagger-ui-express";

import { MongoUrl } from "./config";

import apiDoc from "./api/api-doc";

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

  initialize({
    apiDoc: apiDoc,
    app,
    paths: "./src/api/paths",
    routesGlob: "**/*.{ts,js}",
    routesIndexFileRegExp: /(?:index)?\.[tj]s$/,
  });

  app.use(
    "/openapi",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: "http://localhost:3000/api-docs",
      },
    })
  );

  app.use(((err, req, res, next) => {
    res.status(err.status).json(err);
  }) as express.ErrorRequestHandler);

  app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
  });
}

main();
