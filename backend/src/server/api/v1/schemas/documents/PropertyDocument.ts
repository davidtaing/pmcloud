import { Types } from "mongoose";

export interface PropertyDocument {
  addressLn1: string;
  addressLn2: string;
  landlordId: Types.ObjectId;
  tenantId?: string;
}

export default PropertyDocument;
