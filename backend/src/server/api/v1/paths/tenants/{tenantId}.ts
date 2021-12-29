import { Request, Response, NextFunction } from "express";
import { paths } from "../../api-doc";
import { Operation } from "express-openapi";
import validate from "../../../../middlewares/validate";
import { GetByIdZodSchema, UpdateZodSchema } from "../../schemas/zod/tenants";
import TenantsController from "../../controllers/tenants.controller";

// Get Tenant
const GET: Operation = [
  validate(GetByIdZodSchema),
  (req: Request, res: Response, next: NextFunction) => {
    TenantsController.getTenantById(req, res, next);
  },
];

// Update Tenant
const PATCH: Operation = [
  validate(UpdateZodSchema),
  (req: Request, res: Response, next: NextFunction) => {
    TenantsController.updateTenant(req, res, next);
  },
];

GET.apiDoc = paths["/tenants/{tenantId}"]?.get;
PATCH.apiDoc = paths["/tenants/{tenantId}"]?.patch;

const operations = () => ({ GET, PATCH });

export default operations;
