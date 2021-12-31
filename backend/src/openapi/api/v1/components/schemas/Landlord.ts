import { Address } from "./";
import { String } from "@airtasker/spot";

// OpenAPI Schema
interface Landlord {
  propertyId?: String;
  fullname: String;
  phone?: String;
  mobile: String;
  email: String;
  address: Address;
}

export default Landlord;
