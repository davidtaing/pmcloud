import { Types } from "mongoose";

interface LandlordOpenApiSchema {
  id: string;
  propertyId: string;
  fullname: string;
  phone: string;
  mobile: string;
  email: string;
  addressLn1: string;
  addressLn2: string;
}

// Corresponding Mongoose Document Interface
export interface LandlordMongooseDocument {
  propertyId: Types.ObjectId;
  fullname: string;
  phone: string;
  mobile: string;
  email: string;
  addressLn1: string;
  addressLn2: string;
}

export default LandlordOpenApiSchema;
