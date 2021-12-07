import { Schema } from "mongoose";

const LandlordSchema = new Schema({
  fullName: String,
  phone: String,
  mobile: String,
  email: String,
  addressLn1: String,
  addressLn2: String,
});

export default LandlordSchema;
