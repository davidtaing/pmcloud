import { Request, Response, NextFunction } from "express";
import { paths } from "../../api-doc";
import { Operation } from "express-openapi";
import LandlordController from "../../controllers/landlords.controller";
import validateInput from "../../../../middlewares/validateInput";
import LandlordZod from "../../schemas/zod/landlord.zod";

// Get Landlord
const GET: Operation = [
  validateInput(LandlordZod.GetByIdSchema),
  (req: Request, res: Response, next: NextFunction) => {
    LandlordController.getLandlordById(req, res, next);
  },
];

// Update Landlord
const PATCH: Operation = [
  validateInput(LandlordZod.UpdateSchema),
  (req: Request, res: Response, next: NextFunction) => {
    LandlordController.updateLandlord(req, res, next);
  },
];

GET.apiDoc = paths["/landlords/{landlordId}"]?.get;
PATCH.apiDoc = paths["/landlords/{landlordId}"]?.patch;

const operations = () => ({ GET, PATCH });

export default operations;
``;
