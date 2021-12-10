import { paths } from "../../api-doc";
import { Operation } from "express-openapi";

// Get Landlords
const GET: Operation = (req: any, res: any, next: any) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

// Create Landlord
const POST: Operation = (req: any, res: any, next: any) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

GET.apiDoc = paths["/properties"]?.get;
POST.apiDoc = paths["/properties"]?.post;

const operations = () => ({ GET, POST });

export default operations;
