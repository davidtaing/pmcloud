import { Request, Response, NextFunction } from "express";
import {
  GetPropertyById,
  GetProperties,
  CreateProperty,
  UpdateProperty,
} from "../services/properties.service";

export const getPropertyById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //const result = await GetPropertyById();
    res.status(501).json();
  } catch (err) {
    res.status(501).json(err);
  }
};

export const getProperties = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await GetProperties();
    res.status(501).json(result);
  } catch (err) {
    res.status(501).json(err);
  }
};

export const createProperty = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //const result = await CreateProperty();
    res.status(501).json();
  } catch (err) {
    res.status(501).json(err);
  }
};

export const updateProperty = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //const result = await UpdateProperty();
    res.status(501).json();
  } catch (err) {
    res.status(501).json(err);
  }
};
