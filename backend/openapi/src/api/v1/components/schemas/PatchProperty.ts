import { Tenant } from ".";
// For PATCH Requests which don't require all properties to be sent
interface PatchProperty {
  addressLn1?: string;
  addressLn2?: string;
  tenant?: Tenant;
}

export default PatchProperty;
