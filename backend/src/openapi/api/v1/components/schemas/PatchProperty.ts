import { Address } from "./";
import { Tenant } from ".";
// For PATCH Requests which don't require all properties to be sent
interface PatchProperty {
  address?: Address;
  tenant?: Tenant;
}

export default PatchProperty;
