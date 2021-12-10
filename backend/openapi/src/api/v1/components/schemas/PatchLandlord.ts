// For PATCH Requests which don't require all properties to be sent
interface PatchLandlord {
  id: string;
  propertyId: string;
  fullname?: string;
  phone?: string;
  mobile?: string;
  email?: string;
  addressLn1?: string;
  addressLn2?: string;
}

export default PatchLandlord;
