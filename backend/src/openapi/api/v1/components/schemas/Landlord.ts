import { Address } from "./";

// OpenAPI Schema
interface Landlord {
  propertyId?: string;
  fullname: string;
  phone?: string;
  mobile: string;
  email: string;
  address: Address;
}

export default Landlord;
