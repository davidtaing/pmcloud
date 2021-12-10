import { paths } from "../../api-doc";
import { Operation } from "express-openapi";

// Get Landlord
const GET: Operation = (req: any, res: any, next: any) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

// Update Landlord
const PATCH: Operation = (req: any, res: any, next: any) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

GET.apiDoc = paths["/properties/{propertyId}"]?.get;
PATCH.apiDoc = paths["/properties/{propertyId}"]?.patch;

const operations = () => ({ GET, PATCH });

export default operations;
