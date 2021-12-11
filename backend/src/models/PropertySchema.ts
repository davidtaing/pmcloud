import { Schema } from "mongoose";
import { PropertyMongooseSchema } from "../../openapi/src/api/v1/components/schemas";
import LandlordSchema from "./LandlordSchema";
import TenantSchema from "./TenantSchema";

const PropertySchema = new Schema<PropertyMongooseSchema>({
  addressLn1: { type: String, required: true },
  addressLn2: { type: String, required: true },
  landlord: { type: LandlordSchema },
  tenant: { type: TenantSchema },
});

export default PropertySchema;
