import { Request, Response, NextFunction } from "express";
import { paths } from "../../api-doc";
import { Operation } from "express-openapi";
import validateInput from "../../../../middlewares/validateInput";
import TenantsController from "../../controllers/tenants.controller";
import TenantZod from "../../schemas/zod/tenant.zod";

// Get Tenants
const GET: Operation = (req: Request, res: Response, next: NextFunction) => {
  TenantsController.getTenants(req, res, next);
};

// Create Tenant
const POST: Operation = [
  validateInput(TenantZod.CreateZodSchema),
  (req: Request, res: Response, next: NextFunction) => {
    TenantsController.createTenant(req, res, next);
  },
];

GET.apiDoc = paths["/tenants"]?.get;
POST.apiDoc = paths["/tenants"]?.post;

const operations = () => ({ GET, POST });

export default operations;
