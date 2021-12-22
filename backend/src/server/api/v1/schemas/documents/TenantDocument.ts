import { Types } from "mongoose";

interface TenantDocument {
  propertyId: Types.ObjectId;
  fullname: string;
  phone: string;
  mobile: string;
  email: string;
}

export default TenantDocument;
