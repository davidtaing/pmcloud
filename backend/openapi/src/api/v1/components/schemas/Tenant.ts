import { Types } from "mongoose";

interface TenantOpenApiSchema {
  id: string;
  propertyId: string;
  fullname: string;
  phone: string;
  mobile: string;
  email: string;
}

// Corresponding Mongoose Schema
export interface TenantMongooseSchema {
  propertyId: Types.ObjectId;
  fullname: string;
  phone: string;
  mobile: string;
  email: string;
}

export default TenantOpenApiSchema;
