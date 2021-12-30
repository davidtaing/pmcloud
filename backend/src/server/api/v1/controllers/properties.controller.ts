import { Request, Response, NextFunction } from "express";
import PropertyService from "../services/properties.service";

class PropertiesController {
  static async getProperties(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await PropertyService.get();
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getPropertyById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const result = await PropertyService.getById(req.params.propertyId);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async createProperty(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await PropertyService.create(req.body);
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async updateProperty(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await PropertyService.update(
        req.params.propertyId,
        req.body
      );
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default PropertiesController;
