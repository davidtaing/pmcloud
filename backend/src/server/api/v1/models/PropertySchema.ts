import { Schema, Types } from "mongoose";
import { PropertyDocument } from "../documents/PropertyDocument";

import TenantSchema from "./TenantSchema";

const PropertySchema = new Schema<PropertyDocument>({
  addressLn1: { type: String, required: true },
  addressLn2: { type: String, required: true },
  landlordId: Types.ObjectId,
  tenant: { type: TenantSchema },
});

export default PropertySchema;
