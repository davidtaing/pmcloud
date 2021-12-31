import { Request, Response, NextFunction } from "express";
import { paths } from "../../api-doc";
import { Operation } from "express-openapi";
import validate from "../../../../middlewares/validate";

// Get Receipts
const GET: Operation = (req: Request, res: Response, next: NextFunction) => {
  res.send(501).json("Not Yet Implemented");
};

// Create Receipt
const POST: Operation = [
  //validate(),
  (req: Request, res: Response, next: NextFunction) => {
    res.send(501).json("Not Yet Implemented");
  },
];

GET.apiDoc = paths["/receipts"]?.get;
POST.apiDoc = paths["/receipts"]?.post;

const operations = () => ({ GET, POST });

export default operations;
