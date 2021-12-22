import { Types } from "mongoose";

export interface TenantDocument {
  propertyId: Types.ObjectId;
  fullname: string;
  phone: string;
  mobile: string;
  email: string;
}
