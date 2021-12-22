import { Schema, Types } from "mongoose";
import { PropertyDocument } from "../documents/PropertyDocument";

const PropertySchema = new Schema<PropertyDocument>({
  addressLn1: { type: String, required: true },
  addressLn2: { type: String, required: true },
  landlordId: Types.ObjectId,
  tenantId: Types.ObjectId,
});

export default PropertySchema;
