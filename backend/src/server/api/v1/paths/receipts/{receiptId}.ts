import { Request, Response, NextFunction } from "express";
import { paths } from "../../api-doc";
import { Operation } from "express-openapi";
import validate from "../../../../middlewares/validate";
import ReceiptsController from "../../controllers/receipts.controller";

// Get Receipt
const GET: Operation = [
  //validate(),
  (req: Request, res: Response, next: NextFunction) => {
    ReceiptsController.getReceiptById(req, res, next);
  },
];

GET.apiDoc = paths["/receipts/{receiptId}"]?.get;

const operations = () => ({ GET });

export default operations;
