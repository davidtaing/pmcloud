import { Types } from "mongoose";
import { Tenant } from "../../../../../openapi/api/v1/components/schemas";

// remove and replace propertyId type
interface TenantDocument extends Omit<Tenant, "propertyId"> {
  propertyId: Types.ObjectId;
}

export default TenantDocument;
