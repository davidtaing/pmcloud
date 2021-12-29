import { Request, Response, NextFunction } from "express";
import { paths } from "../../api-doc";
import { Operation } from "express-openapi";
import validate from "../../../../middlewares/validate";
import { CreateZodSchema } from "../../schemas/zod/landlords";
import LandlordController from "../../controllers/landlords.controller";

// Get Landlords
const GET: Operation = (req: Request, res: Response, next: NextFunction) => {
  LandlordController.getLandlords(req, res, next);
};

// Create Landlord
const POST: Operation = [
  validate(CreateZodSchema),
  (req: Request, res: Response, next: NextFunction) => {
    LandlordController.createLandlord(req, res, next);
  },
];

GET.apiDoc = paths["/landlords"]?.get;
POST.apiDoc = paths["/landlords"]?.post;

const operations = () => ({ GET, POST });

export default operations;
