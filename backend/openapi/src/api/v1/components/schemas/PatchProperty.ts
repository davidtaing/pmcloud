// For PATCH Requests which don't require all properties to be sent
interface PatchProperty {
  id: string;
  addressLn1?: string;
  addressLn2?: string;
}

export default PatchProperty;
