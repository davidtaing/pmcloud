import { Request, Response, NextFunction } from "express";
import { paths } from "../../api-doc";
import { Operation } from "express-openapi";
import validateInput from "../../../../middlewares/validateInput";
import PropertyZod from "../../schemas/zod/property.zod";

import PropertyController from "../../controllers/properties.controller";

// Get Property
const GET: Operation = [
  validateInput(PropertyZod.GetByIdSchema),
  (req: Request, res: Response, next: NextFunction) => {
    PropertyController.getPropertyById(req, res, next);
  },
];

// Update Property
const PATCH: Operation = [
  validateInput(PropertyZod.UpdateSchema),
  (req: Request, res: Response, next: NextFunction) => {
    PropertyController.updateProperty(req, res, next);
  },
];

GET.apiDoc = paths["/properties/{propertyId}"]?.get;
PATCH.apiDoc = paths["/properties/{propertyId}"]?.patch;

const operations = () => ({ GET, PATCH });

export default operations;
