import { model } from "mongoose";

import LandlordSchema from "../schemas/mongoose/LandlordSchema";

const LandlordModel = model("Landlord", LandlordSchema);

export default LandlordModel;
