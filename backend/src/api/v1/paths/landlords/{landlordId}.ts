import { Request, Response, NextFunction } from "express";
import { paths } from "../../api-doc";
import { Operation } from "express-openapi";
import {
  getLandlord,
  updateLandlord,
} from "../../controllers/landlords.controller";

// Get Landlord
const GET: Operation = (req: Request, res: Response, next: NextFunction) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

// Update Landlord
const PATCH: Operation = (req: Request, res: Response, next: NextFunction) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

GET.apiDoc = paths["/landlords/{landlordId}"]?.get;
PATCH.apiDoc = paths["/landlords/{landlordId}"]?.patch;

const operations = () => ({ GET, PATCH });

export default operations;
