import { Request, Response, NextFunction } from "express";
import { paths } from "../../api-doc";
import { Operation } from "express-openapi";
import validate from "../../../../middlewares/validate";
import { CreateZodSchema } from "../../schemas/zod/tenants";

// Get Tenants
const GET: Operation = (req: Request, res: Response, next: NextFunction) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

// Create Tenant
const POST: Operation = [
  validate(CreateZodSchema),
  (req: Request, res: Response, next: NextFunction) => {
    res.status(501).json({ message: "Not Yet Implemented" });
  },
];

GET.apiDoc = paths["/tenants"]?.get;
POST.apiDoc = paths["/tenants"]?.post;

const operations = () => ({ GET, POST });

export default operations;
