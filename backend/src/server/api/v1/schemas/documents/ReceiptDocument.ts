import { Receipt } from "../../../../../openapi/api/v1/components/schemas";
import { Types } from "mongoose";

interface ReceiptDocument
  extends Omit<
    Receipt,
    "date" | "paidFrom" | "paidTo" | "tenant" | "property"
  > {
  // convert String types to Date
  date: Date;
  paidFrom: Date;
  paidTo: Date;
  // convert String types to ObjectId
  tenant: {
    _id: Types.ObjectId;
    fullname: String;
  };
  property: {
    _id: Types.ObjectId;
    address: {
      addressLn1: String;
      addressLn2: String;
    };
  };
}

export default ReceiptDocument;
