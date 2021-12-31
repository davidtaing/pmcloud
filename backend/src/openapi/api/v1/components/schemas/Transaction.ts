import { Date, Number, String } from "@airtasker/spot";

// OpenAPI Schema
interface Tranasction {
  date: Date;
  credit: Number;
  debit: Number;
  tenant: {
    _id: String;
    fullname: String;
  };
  property: {
    _id: String;
    address: {
      addressLn1: String;
      addressLn2: String;
    };
  };
  category: String;
  description: String;
}

export default Tranasction;
