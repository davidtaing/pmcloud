import { Address } from "./";

interface Property {
  address: Address;
  landlordId: string;
  tenantId?: string;
}

export default Property;
