import { Request, Response, NextFunction } from "express";
import { paths } from "../../api-doc";
import { Operation } from "express-openapi";
import validate from "../../../../middlewares/validate";
import {
  GetByIdZodSchema,
  UpdateZodSchema,
} from "../../schemas/zod/properties";

// Get Property
const GET: Operation = [
  validate(GetByIdZodSchema),
  (req: Request, res: Response, next: NextFunction) => {
    res.status(501).json({ message: "Not Yet Implemented" });
  },
];

// Update Property
const PATCH: Operation = [
  validate(UpdateZodSchema),
  (req: Request, res: Response, next: NextFunction) => {
    res.status(501).json({ message: "Not Yet Implemented" });
  },
];

GET.apiDoc = paths["/properties/{propertyId}"]?.get;
PATCH.apiDoc = paths["/properties/{propertyId}"]?.patch;

const operations = () => ({ GET, PATCH });

export default operations;
