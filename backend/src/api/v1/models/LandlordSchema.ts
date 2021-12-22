import { Schema, Types } from "mongoose";
import { LandlordDocument } from "../../../openapi/api/v1/components/schemas";

const LandlordSchema = new Schema<LandlordDocument>({
  propertyId: Types.ObjectId,
  fullname: { type: String, required: true },
  phone: String,
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  addressLn1: { type: String, required: true },
  addressLn2: { type: String, required: true },
});

export default LandlordSchema;
