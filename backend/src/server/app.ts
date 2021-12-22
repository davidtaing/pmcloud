import express from "express";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import compression from "compression";
import { initialize } from "express-openapi";
import swaggerUi from "swagger-ui-express";

import apiDoc from "./api/v1/api-doc";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(mongoSanitize());
app.use(compression());

initialize({
  apiDoc: apiDoc,
  app,
  paths: "./src/server/api/v1/paths",
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

export default app;
