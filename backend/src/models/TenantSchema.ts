import { ObjectId } from "bson";
import { Schema } from "mongoose";

const TenantSchema = new Schema({
  fullName: String,
  phone: String,
  mobile: String,
  email: String,
  propertyId: ObjectId,
});

export default TenantSchema;
