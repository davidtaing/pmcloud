import { Types } from "mongoose";
import { Tenant } from ".";

// TODO: Add other props like Landlord, Tenant & Payments
// OpenAPI Schema
interface Property {
  addressLn1: string;
  addressLn2: string;
  landlordId: string;
  tenant: Tenant;
  //previous tenants?
}

// Corresponding Mongoose Document Interface
export interface PropertyMongooseDocument {
  addressLn1: string;
  addressLn2: string;
  landlordId: Types.ObjectId;
  tenant: Tenant;
}

export default Property;
