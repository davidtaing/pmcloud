import { paths } from "../api-doc";
import { Operation } from "express-openapi";

const GET: Operation = (req: any, res: any, next: any) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

const POST: Operation = (req: any, res: any, next: any) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

GET.apiDoc = paths["/landlords"].get;
POST.apiDoc = paths["/landlords"].post;

const operations = () => ({ GET, POST });

export default operations;
