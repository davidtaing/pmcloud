import { Schema } from "mongoose";
import AddressDocument from "../documents/address.document";

const AddressSchema = new Schema<AddressDocument>({
  addressLn1: { type: String },
  addressLn2: { type: String, required: true },
  suburb: { type: String, required: true },
  state: { type: String, required: true },
  postcode: { type: String, required: true },
});

export default AddressSchema;
