import { Date, Number } from "@airtasker/spot";
import Tranasctions from "./Transaction";

// OpenAPI Schema
interface Receipt extends Tranasctions {
  paidFrom: Date;
  paidTo: Date;
  balance: Number;
}

export default Receipt;
