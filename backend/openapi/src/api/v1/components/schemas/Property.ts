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

// Corresponding Mongoose Schema
export interface PropertyMongooseSchema {
  addressLn1: string;
  addressLn2: string;
  landlord: Landlord;
  tenant: Tenant;
}

export default PropertyOpenapiSchema;
