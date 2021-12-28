import { Request, Response, NextFunction } from "express";
import { paths } from "../../api-doc";
import { Operation } from "express-openapi";
import validate from "../../../../middlewares/validate";
import { GetByIdZodSchema, UpdateZodSchema } from "../../schemas/zod/tenants";

// Get Tenant
const GET: Operation = [
  validate(GetByIdZodSchema),
  (req: Request, res: Response, next: NextFunction) => {
    res.status(501).json({ message: "Not Yet Implemented" });
  },
];

// Update Tenant
const PATCH: Operation = [
  validate(UpdateZodSchema),
  (req: Request, res: Response, next: NextFunction) => {
    res.status(501).json({ message: "Not Yet Implemented" });
  },
];

GET.apiDoc = paths["/tenants/{tenantId}"]?.get;
PATCH.apiDoc = paths["/tenants/{tenantId}"]?.patch;

const operations = () => ({ GET, PATCH });

export default operations;
