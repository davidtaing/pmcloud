import { Request, Response, NextFunction } from "express";
import { paths } from "../../api-doc";
import { Operation } from "express-openapi";
import validate from "../../../../middlewares/validate";
import { CreateZodSchema } from "../../schemas/zod/tenants";
import TenantsController from "../../controllers/tenants.controller";

// Get Tenants
const GET: Operation = (req: Request, res: Response, next: NextFunction) => {
  TenantsController.getTenants(req, res, next);
};

// Create Tenant
const POST: Operation = [
  validate(CreateZodSchema),
  (req: Request, res: Response, next: NextFunction) => {
    TenantsController.createTenant(req, res, next);
  },
];

GET.apiDoc = paths["/tenants"]?.get;
POST.apiDoc = paths["/tenants"]?.post;

const operations = () => ({ GET, POST });

export default operations;
