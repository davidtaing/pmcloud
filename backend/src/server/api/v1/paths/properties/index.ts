import { Request, Response, NextFunction } from "express";
import { paths } from "../../api-doc";
import { Operation } from "express-openapi";
import validate from "../../../../middlewares/validate";
import { CreateZodSchema } from "../../schemas/zod/properties";
import {
  getProperties,
  createProperty,
} from "../../controllers/properties.controller";

// Get Properties
const GET: Operation = (req: Request, res: Response, next: NextFunction) => {
  getProperties(req, res, next);
};
// Create Property
const POST: Operation = [
  validate(CreateZodSchema),
  (req: Request, res: Response, next: NextFunction) => {
    createProperty(req, res, next);
  },
];

GET.apiDoc = paths["/properties"]?.get;
POST.apiDoc = paths["/properties"]?.post;

const operations = () => ({ GET, POST });

export default operations;
