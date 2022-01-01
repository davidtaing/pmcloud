import { Request, Response, NextFunction } from "express";
import { paths } from "../../api-doc";
import { Operation } from "express-openapi";
import validateInput from "../../../../middlewares/validateInput";
import TenantsController from "../../controllers/tenants.controller";
import TenantZod from "../../schemas/zod/tenant.zod";

// Get Tenant
const GET: Operation = [
  validateInput(TenantZod.GetByIdZodSchema),
  (req: Request, res: Response, next: NextFunction) => {
    TenantsController.getTenantById(req, res, next);
  },
];

// Update Tenant
const PATCH: Operation = [
  validateInput(TenantZod.UpdateZodSchema),
  (req: Request, res: Response, next: NextFunction) => {
    TenantsController.updateTenant(req, res, next);
  },
];

GET.apiDoc = paths["/tenants/{tenantId}"]?.get;
PATCH.apiDoc = paths["/tenants/{tenantId}"]?.patch;

const operations = () => ({ GET, PATCH });

export default operations;
