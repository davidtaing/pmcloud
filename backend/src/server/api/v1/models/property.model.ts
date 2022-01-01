import { model } from "mongoose";

import PropertySchema from "../schemas/mongoose/property.schema";

const PropertyModel = model("Property", PropertySchema);

export default PropertyModel;
