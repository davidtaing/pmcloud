import { Request, Response, NextFunction } from "express";
import { paths } from "../../api-doc";
import { Operation } from "express-openapi";
import {
  getLandlords,
  createLandlord,
} from "../../controllers/landlords.controller";

// Get Landlords
const GET: Operation = (req: Request, res: Response, next: NextFunction) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

// Create Landlord
const POST: Operation = (req: Request, res: Response, next: NextFunction) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

GET.apiDoc = paths["/landlords"]?.get;
POST.apiDoc = paths["/landlords"]?.post;

const operations = () => ({ GET, POST });

export default operations;
