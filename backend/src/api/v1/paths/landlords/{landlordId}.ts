import { Request, Response, NextFunction } from "express";
import { paths } from "../../api-doc";
import { Operation } from "express-openapi";
import {
  getLandlordById,
  updateLandlord,
} from "../../controllers/landlords.controller";

// Get Landlord
const GET: Operation = (req: Request, res: Response, next: NextFunction) => {
  getLandlordById(req, res, next);
};

// Update Landlord
const PATCH: Operation = (req: Request, res: Response, next: NextFunction) => {
  updateLandlord(req, res, next);
};

GET.apiDoc = paths["/landlords/{landlordId}"]?.get;
PATCH.apiDoc = paths["/landlords/{landlordId}"]?.patch;

const operations = () => ({ GET, PATCH });

export default operations;
