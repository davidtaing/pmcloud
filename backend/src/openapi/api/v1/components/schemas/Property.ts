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

export default Property;
