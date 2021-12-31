import { Address } from "./";
import { String } from "@airtasker/spot";

interface Property {
  address: Address;
  landlordId: String;
  tenantId?: String;
}

export default Property;
