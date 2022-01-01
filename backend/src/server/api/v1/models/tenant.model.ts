import { model } from "mongoose";

import TenantSchema from "../schemas/mongoose/tenant.schema";

const TenantModel = model("Tenant", TenantSchema);

export default TenantModel;
