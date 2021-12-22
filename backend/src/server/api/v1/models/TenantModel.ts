import { model } from "mongoose";

import TenantSchema from "../schemas/mongoose/TenantSchema";

const TenantModel = model("Landlord", TenantSchema);

export default TenantModel;
