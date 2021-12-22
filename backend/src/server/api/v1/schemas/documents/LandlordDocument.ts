import { Types } from "mongoose";

export interface LandlordDocument {
  propertyId?: Types.ObjectId;
  fullname: string;
  phone?: string;
  mobile: string;
  email: string;
  addressLn1: string;
  addressLn2: string;
}

export default LandlordDocument;
