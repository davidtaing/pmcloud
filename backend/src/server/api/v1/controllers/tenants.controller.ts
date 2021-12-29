import { Request, Response, NextFunction } from "express";
import {
  GetTenants,
  GetTenantById,
  CreateTenant,
  UpdateTenant,
} from "../services/tenants.service";

class TenantsController {
  static async getTenants(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await GetTenants();
      res.status(200).json(result);
    } catch (err) {
      res.status(501).json(err);
    }
  }

  static async getTenantById(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await GetTenantById(req.params.tenantId);
      res.status(200).json(result);
    } catch (err) {
      res.status(501).json(err);
    }
  }

  static async createTenant(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await CreateTenant(req.body);
      res.status(201).json(result);
    } catch (err) {
      res.status(501).json(err);
    }
  }

  static async updateTenant(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await UpdateTenant(req.params.tenantId, req.body);
      res.status(200).json(result);
    } catch (err) {
      res.status(501).json(err);
    }
  }
}

export default TenantsController;
