import { model } from "mongoose";

import ReceiptSchema from "../schemas/mongoose/receipt.schema";

const ReceiptModel = model("Receipt", ReceiptSchema);

export default ReceiptModel;
