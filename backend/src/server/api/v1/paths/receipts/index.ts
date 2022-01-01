import { Request, Response, NextFunction } from "express";
import { paths } from "../../api-doc";
import { Operation } from "express-openapi";
import validateInput from "../../../../middlewares/validateInput";
import ReceiptsController from "../../controllers/receipts.controller";

// Get Receipts
const GET: Operation = (req: Request, res: Response, next: NextFunction) => {
  ReceiptsController.getReceipts(req, res, next);
};

// Create Receipt
const POST: Operation = [
  //validateInput(),
  (req: Request, res: Response, next: NextFunction) => {
    ReceiptsController.createReceipts(req, res, next);
  },
];

GET.apiDoc = paths["/receipts"]?.get;
POST.apiDoc = paths["/receipts"]?.post;

const operations = () => ({ GET, POST });

export default operations;
