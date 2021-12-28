import { Request, Response, NextFunction } from "express";
import { paths } from "../../api-doc";
import { Operation } from "express-openapi";
import validate from "../../../../middlewares/validate";
import {
  GetByIdZodSchema,
  UpdateZodSchema,
} from "../../schemas/zod/properties";
import {
  getPropertyById,
  updateProperty,
} from "../../controllers/properties.controller";

// Get Property
const GET: Operation = [
  validate(GetByIdZodSchema),
  (req: Request, res: Response, next: NextFunction) => {
    getPropertyById(req, res, next);
  },
];

// Update Property
const PATCH: Operation = [
  validate(UpdateZodSchema),
  (req: Request, res: Response, next: NextFunction) => {
    updateProperty(req, res, next);
  },
];

GET.apiDoc = paths["/properties/{propertyId}"]?.get;
PATCH.apiDoc = paths["/properties/{propertyId}"]?.patch;

const operations = () => ({ GET, PATCH });

export default operations;
