import { Request, Response, NextFunction } from "express";
import {
  GetLandlordById,
  GetLandlords,
  CreateLandlord,
  UpdateLandlord,
} from "../services/landlords.service";

class LandlordController {
  static async getLandlordById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const result = await GetLandlordById(req.params.landlordId);
      res.status(501).json(result);
    } catch (err) {
      res.status(501).json(err);
    }
  }

  static async getLandlords(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await GetLandlords();
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async createLandlord(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await CreateLandlord(req.body);
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async updateLandlord(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await UpdateLandlord(req.params.landlordId, req.body);
      res.status(501).json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
}

export default LandlordController;
