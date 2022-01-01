import { model } from "mongoose";

import ReceiptSchema from "../schemas/mongoose/ReceiptSchema";

const ReceiptModel = model("Receipt", ReceiptSchema);

export default ReceiptModel;
