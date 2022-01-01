import { Schema, Types } from "mongoose";
import PropertyDocument from "../documents/property.document";
import AddressSchema from "./address.schema";

const PropertySchema = new Schema<PropertyDocument>({
  address: AddressSchema,
  landlordId: Types.ObjectId,
  tenantId: Types.ObjectId,
});

export default PropertySchema;
