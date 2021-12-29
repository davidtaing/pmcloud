import { model } from "mongoose";

import PropertySchema from "../schemas/mongoose/PropertySchema";

const PropertyModel = model("Property", PropertySchema);

export default PropertyModel;
