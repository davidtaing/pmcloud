import { Request, Response, NextFunction } from "express";
import {
  GetLandlord,
  GetLandlords,
  CreateLandlord,
  UpdateLandlord,
} from "../services/landlords.service";

export const getLandlord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await GetLandlord(req.params.landlordId);
    res.status(501).json(result);
  } catch (err) {
    res.status(501).json(err);
  }
};

export const getLandlords = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await GetLandlords();
    res.status(501).json(result);
  } catch (err) {
    res.status(501).json(err);
  }
};

export const createLandlord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await CreateLandlord(req.body);
    res.status(501).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateLandlord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await UpdateLandlord(req.params.landlordId, req.body);
    res.status(501).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};
