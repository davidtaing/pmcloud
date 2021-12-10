import { Landlord, Tenant } from ".";

// TODO: Add other props like Landlord, Tenant & Payments
interface Property {
  id: string;
  addressLn1: string;
  addressLn2: string;
  landlord: Landlord;
  tenant: Tenant;
  //previous tenants?
}

export default Property;
