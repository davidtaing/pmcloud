import { Schema, Types } from "mongoose";
import { PropertyDocument } from "../../../openapi/api/v1/components/schemas";
import TenantSchema from "./TenantSchema";

const PropertySchema = new Schema<PropertyDocument>({
  addressLn1: { type: String, required: true },
  addressLn2: { type: String, required: true },
  landlordId: Types.ObjectId,
  tenant: { type: TenantSchema },
});

export default PropertySchema;
