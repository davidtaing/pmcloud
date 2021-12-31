import { String } from "@airtasker/spot";

// For PATCH Requests which don't require all properties to be sent
interface PatchTenant {
  propertyId?: String;
  fullname?: String;
  phone?: String;
  mobile?: String;
  email?: String;
}

export default PatchTenant;
