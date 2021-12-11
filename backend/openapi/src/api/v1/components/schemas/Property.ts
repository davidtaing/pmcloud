import { Landlord, Tenant } from ".";

// TODO: Add other props like Landlord, Tenant & Payments
interface PropertyOpenapiSchema {
  id: string;
  addressLn1: string;
  addressLn2: string;
  landlord: Landlord;
  tenant: Tenant;
  //previous tenants?
}

// Corresponding Mongoose Document Interface
export interface PropertyMongooseDocument {
  addressLn1: string;
  addressLn2: string;
  landlord: Landlord;
  tenant: Tenant;
}

export default PropertyOpenapiSchema;
