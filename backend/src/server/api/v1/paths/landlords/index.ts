import { Request, Response, NextFunction } from "express";
import { paths } from "../../api-doc";
import { Operation } from "express-openapi";
import {
  getLandlords,
  createLandlord,
} from "../../controllers/landlords.controller";

// Get Landlords
const GET: Operation = (req: Request, res: Response, next: NextFunction) => {
  getLandlords(req, res, next);
};

// Create Landlord
const POST: Operation = (req: Request, res: Response, next: NextFunction) => {
  createLandlord(req, res, next);
};

GET.apiDoc = paths["/landlords"]?.get;
POST.apiDoc = paths["/landlords"]?.post;

const operations = () => ({ GET, POST });

export default operations;
