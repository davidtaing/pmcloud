import { String } from "@airtasker/spot";

interface Address {
  addressLn1?: String;
  addressLn2: String;
  suburb: String;
  state: String;
  postcode: String;
}

export default Address;
