import { Schema, Types } from "mongoose";
import { LandlordMongooseDocument } from "../../openapi/src/api/v1/components/schemas";
import PropertySchema from "./PropertySchema";

const LandlordSchema = new Schema<LandlordMongooseDocument>({
  propertyId: Types.ObjectId,
  fullname: { type: String, required: true },
  phone: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  addressLn1: { type: String, required: true },
  addressLn2: { type: String, required: true },
});

export default LandlordSchema;
