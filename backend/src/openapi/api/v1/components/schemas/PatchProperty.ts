import { Address } from "./";
// For PATCH Requests which don't require all properties to be sent
interface PatchProperty {
  address?: Address;
  tenantId?: string;
}

export default PatchProperty;
