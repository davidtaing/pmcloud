import { Request, Response, NextFunction } from "express";
//import ReceiptsService from "../services/receipts.service";

class ReceiptsController {
  static async getReceipts(req: Request, res: Response, next: NextFunction) {
    try {
      res.send(501).json("Not Yet Implemented");

      // const result = await ReceiptsService.get();
      // res.status(200).json(result);
    } catch (err) {
      res.status(501).json(err);
    }
  }

  static async getReceiptById(req: Request, res: Response, next: NextFunction) {
    try {
      res.send(501).json("Not Yet Implemented");

      // const result = await ReceiptsService.getById(req.params.tenantId);
      // res.status(200).json(result);
    } catch (err) {
      res.status(501).json(err);
    }
  }

  static async createReceipts(req: Request, res: Response, next: NextFunction) {
    try {
      res.send(501).json("Not Yet Implemented");

      // const result = await ReceiptsService.create(req.body);
      // res.status(201).json(result);
    } catch (err) {
      res.status(501).json(err);
    }
  }
}

export default ReceiptsController;
