import { Request, Response, NextFunction } from "express";
import {
  GetTenants,
  GetTenantById,
  CreateTenant,
  UpdateTenant,
} from "../services/tenants.service";

export const getTenants = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await GetTenants();
    res.status(200).json(result);
  } catch (err) {
    res.status(501).json(err);
  }
};

export const getTenantById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await GetTenantById(req.params.tenantId);
    res.status(200).json(result);
  } catch (err) {
    res.status(501).json(err);
  }
};

export const createTenant = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await CreateTenant(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(501).json(err);
  }
};

export const updateTenant = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await UpdateTenant(req.params.tenantId, req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(501).json(err);
  }
};
