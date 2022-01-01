import { Types } from "mongoose";
import { Property } from "../../../../../openapi/api/v1/components/schemas";

// remove and replace landlordId type
interface PropertyDocument extends Omit<Property, "landlordId"> {
  landlordId: Types.ObjectId;
}

export default PropertyDocument;
