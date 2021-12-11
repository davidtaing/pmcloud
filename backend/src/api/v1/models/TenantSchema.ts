import { Types, Schema } from "mongoose";
import { TenantMongooseDocument } from "../../../../openapi/src/api/v1/components/schemas";

const TenantSchema = new Schema<TenantMongooseDocument>({
  propertyId: Types.ObjectId,
  fullname: { type: String, required: true },
  phone: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
});

export default TenantSchema;
