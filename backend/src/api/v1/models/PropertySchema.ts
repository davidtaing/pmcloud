import { Schema, Types } from "mongoose";
import { PropertyMongooseDocument } from "../../../../openapi/src/api/v1/components/schemas";
import TenantSchema from "./TenantSchema";

const PropertySchema = new Schema<PropertyMongooseDocument>({
  addressLn1: { type: String, required: true },
  addressLn2: { type: String, required: true },
  landlordId: Types.ObjectId,
  tenant: { type: TenantSchema },
});

export default PropertySchema;
