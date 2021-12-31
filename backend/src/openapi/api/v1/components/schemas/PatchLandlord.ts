import { Address } from "./";
import { String } from "@airtasker/spot";

// For PATCH Requests which don't require all properties to be sent
interface PatchLandlord {
  propertyId?: String;
  fullname?: String;
  phone?: String;
  mobile?: String;
  email?: String;
  address?: Address;
}

export default PatchLandlord;
