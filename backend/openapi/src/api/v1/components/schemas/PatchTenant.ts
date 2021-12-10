// For PATCH Requests which don't require all properties to be sent
interface PatchTenant {
  id: string;
  propertyId: string;
  fullname?: string;
  phone?: string;
  mobile?: string;
  email?: string;
}

export default PatchTenant;
