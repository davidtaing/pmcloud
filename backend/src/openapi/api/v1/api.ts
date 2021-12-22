import { api } from "@airtasker/spot";

import "./paths/landlords";
import "./paths/tenants";
import "./paths/properties";

@api({
  name: "pmcloud Backend API",
  version: "1.0.0",
})
class Api {}
