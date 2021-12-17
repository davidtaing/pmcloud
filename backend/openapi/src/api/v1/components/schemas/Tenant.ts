import { Types } from "mongoose";

// OpenAPI Schema
interface Tenant {
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

export default Tenant;
