import { Schema } from "mongoose";
import AddressDocument from "../documents/AddressDocument";

const AddressSchema = new Schema<AddressDocument>({
  addressLn1: { type: String, required: true },
  addressLn2: { type: String, required: true },
});

export default AddressSchema;
