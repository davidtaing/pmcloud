import { Types } from "mongoose";

interface TenantOpenApiSchema {
  id: string;
  propertyId: string;
  fullname: string;
  phone: string;
  mobile: string;
  email: string;
}

// Corresponding Mongoose Document Interface
export interface TenantMongooseDocument {
  propertyId: Types.ObjectId;
  fullname: string;
  phone: string;
  mobile: string;
  email: string;
}

export default TenantOpenApiSchema;
