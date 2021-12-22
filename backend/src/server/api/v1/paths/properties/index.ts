import { Request, Response, NextFunction } from "express";
import { paths } from "../../api-doc";
import { Operation } from "express-openapi";

// Get Properties
const GET: Operation = (req: Request, res: Response, next: NextFunction) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

// Create Property
const POST: Operation = (req: Request, res: Response, next: NextFunction) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

GET.apiDoc = paths["/properties"]?.get;
POST.apiDoc = paths["/properties"]?.post;

const operations = () => ({ GET, POST });

export default operations;
