import { Schema, Types } from "mongoose";
import { PropertyDocument } from "../documents/PropertyDocument";
import AddressSchema from "./AddressSchema";

const PropertySchema = new Schema<PropertyDocument>({
  address: AddressSchema,
  landlordId: Types.ObjectId,
  tenantId: Types.ObjectId,
});

export default PropertySchema;
