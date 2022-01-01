import { Schema, Types } from "mongoose";
import LandlordDocument from "../documents/landlord.document";
import AddressSchema from "./address.schema";

const LandlordSchema = new Schema<LandlordDocument>({
  propertyId: Types.ObjectId,
  fullname: { type: String, required: true },
  phone: String,
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  address: AddressSchema,
});

export default LandlordSchema;
