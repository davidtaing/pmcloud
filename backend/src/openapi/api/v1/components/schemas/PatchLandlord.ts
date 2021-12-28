import { Address } from "./";

// For PATCH Requests which don't require all properties to be sent
interface PatchLandlord {
  propertyId?: string;
  fullname?: string;
  phone?: string;
  mobile?: string;
  email?: string;
  address?: Address;
}

export default PatchLandlord;
