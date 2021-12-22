import { Types, Schema } from "mongoose";
import { TenantDocument } from "../documents/TenantDocument";

const TenantSchema = new Schema<TenantDocument>({
  propertyId: Types.ObjectId,
  fullname: { type: String, required: true },
  phone: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
});

export default TenantSchema;
