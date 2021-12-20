import { Request, Response, NextFunction } from "express";
import {
  GetProperty,
  GetProperties,
  CreateProperty,
  UpdateProperty,
} from "../services/properties.service";

export const getProperty = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //const result = await GetProperty();
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
