import { model } from "mongoose";

import TenantSchema from "../schemas/mongoose/TenantSchema";

const TenantModel = model("Tenant", TenantSchema);

export default TenantModel;
