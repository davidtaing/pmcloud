import { Types } from "mongoose";
import { Landlord } from "../../../../../openapi/api/v1/components/schemas";

// remove and replace propertyId type
interface LandlordDocument extends Omit<Landlord, "propertyId"> {
  propertyId?: Types.ObjectId;
}

export default LandlordDocument;
