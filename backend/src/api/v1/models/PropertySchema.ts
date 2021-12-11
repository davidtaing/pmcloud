import { Schema } from "mongoose";
import { PropertyMongooseDocument } from "../../../../openapi/src/api/v1/components/schemas";
import LandlordSchema from "./LandlordSchema";
import TenantSchema from "./TenantSchema";

const PropertySchema = new Schema<PropertyMongooseDocument>({
  addressLn1: { type: String, required: true },
  addressLn2: { type: String, required: true },
  landlord: { type: LandlordSchema },
  tenant: { type: TenantSchema },
});

export default PropertySchema;
