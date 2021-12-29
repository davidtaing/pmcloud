import { Request, Response, NextFunction } from "express";
import PropertyService from "../services/properties.service";

class PropertiesController {
  static async getProperties(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await PropertyService.getProperties();
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
      const result = await PropertyService.getPropertyById(
        req.params.propertyId
      );
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async createProperty(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await PropertyService.createProperty(req.body);
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async updateProperty(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await PropertyService.updateProperty(
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
