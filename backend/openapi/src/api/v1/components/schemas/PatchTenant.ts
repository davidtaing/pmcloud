// For PATCH Requests which don't require all properties to be sent
interface PatchTenant {
  fullname?: string;
  phone?: string;
  mobile?: string;
  email?: string;
}

export default PatchTenant;
