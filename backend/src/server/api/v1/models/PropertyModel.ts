import { model } from "mongoose";

import PropertySchema from "../schemas/mongoose/PropertySchema";

const PropertyModel = model("Landlord", PropertySchema);

export default PropertyModel;
