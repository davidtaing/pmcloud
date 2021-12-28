import { Request, Response, NextFunction } from "express";
import {
  GetProperties,
  GetPropertyById,
  CreateProperty,
  UpdateProperty,
} from "../services/properties.service";

export const getProperties = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await GetProperties();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getPropertyById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await GetPropertyById(req.params.propertyId);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createProperty = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await CreateProperty(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateProperty = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await UpdateProperty(req.params.propertyId, req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};
