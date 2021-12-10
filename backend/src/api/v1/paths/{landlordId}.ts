import { paths } from "../api-doc";
import { Operation } from "express-openapi";

// Get Landlord
const GET: Operation = (req: any, res: any, next: any) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

// Update Landlord
const PATCH: Operation = (req: any, res: any, next: any) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

GET.apiDoc = paths["/landlords/{landlordId}"].get;
PATCH.apiDoc = paths["/landlords/{landlordId}"].patch;

const operations = () => ({ GET, PATCH });

export default operations;
