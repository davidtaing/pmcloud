import { Request, Response, NextFunction } from "express";
import { paths } from "../../api-doc";
import { Operation } from "express-openapi";
import {
  getLandlordById,
  updateLandlord,
} from "../../controllers/landlords.controller";
import validate from "../../../../middlewares/validate";
import { GetByIdZodSchema, UpdateZodSchema } from "../../schemas/zod/landlords";

// Get Landlord
const GET: Operation = [
  validate(GetByIdZodSchema),
  (req: Request, res: Response, next: NextFunction) => {
    getLandlordById(req, res, next);
  },
];

// Update Landlord
const PATCH: Operation = [
  validate(UpdateZodSchema),
  (req: Request, res: Response, next: NextFunction) => {
    updateLandlord(req, res, next);
  },
];

GET.apiDoc = paths["/landlords/{landlordId}"]?.get;
PATCH.apiDoc = paths["/landlords/{landlordId}"]?.patch;

const operations = () => ({ GET, PATCH });

export default operations;
