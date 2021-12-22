import { Types } from "mongoose";
import { TenantDocument } from "./TenantDocument";

export interface PropertyDocument {
  addressLn1: string;
  addressLn2: string;
  landlordId: Types.ObjectId;
  tenant: TenantDocument;
}
