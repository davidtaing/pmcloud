import { Request, Response, NextFunction } from "express";
import LandlordsService from "../services/landlords.service";

class LandlordController {
  static async getLandlordById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const result = await LandlordsService.getLandlordById(
        req.params.landlordId
      );
      res.status(501).json(result);
    } catch (err) {
      res.status(501).json(err);
    }
  }

  static async getLandlords(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await LandlordsService.getLandlords();
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async createLandlord(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await LandlordsService.createLandlord(req.body);
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async updateLandlord(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await LandlordsService.updateLandlord(
        req.params.landlordId,
        req.body
      );
      res.status(501).json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
}

export default LandlordController;
