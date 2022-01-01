import { model } from "mongoose";

import LandlordSchema from "../schemas/mongoose/landlord.schema";

const LandlordModel = model("Landlord", LandlordSchema);

export default LandlordModel;
