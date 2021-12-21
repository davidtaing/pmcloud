import { Request, Response, NextFunction } from "express";
import { paths } from "../../api-doc";
import { Operation } from "express-openapi";
import {
  getPropertyById,
  updateProperty,
} from "../../controllers/properties.controller";

// Get Property
const GET: Operation = (req: Request, res: Response, next: NextFunction) => {
  getPropertyById(req, res, next);
};

// Update Property
const PATCH: Operation = (req: Request, res: Response, next: NextFunction) => {
  updateProperty(req, res, next);
};

GET.apiDoc = paths["/properties/{propertyId}"]?.get;
PATCH.apiDoc = paths["/properties/{propertyId}"]?.patch;

const operations = () => ({ GET, PATCH });

export default operations;
