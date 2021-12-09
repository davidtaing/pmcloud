import { Schema } from "mongoose";
import LandlordSchema from "./LandlordSchema";
import TenantSchema from "./TenantSchema";

const PropertySchema = new Schema({
  addressLn1: String,
  addressLn2: String,
  landlord: LandlordSchema,
  tenant: TenantSchema,
});

export default PropertySchema;
