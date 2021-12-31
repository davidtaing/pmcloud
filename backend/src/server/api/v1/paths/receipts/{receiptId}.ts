import { Request, Response, NextFunction } from "express";
import { paths } from "../../api-doc";
import { Operation } from "express-openapi";
import validate from "../../../../middlewares/validate";

// Get Receipt
const GET: Operation = [
  //validate(),
  (req: Request, res: Response, next: NextFunction) => {
    res.send(501).json("Not Yet Implemented");
  },
];

GET.apiDoc = paths["/receipts/{receiptId}"]?.get;

const operations = () => ({ GET });

export default operations;
