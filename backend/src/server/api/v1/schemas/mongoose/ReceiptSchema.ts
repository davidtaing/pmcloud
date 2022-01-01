import { Schema, Types, Date } from "mongoose";
import ReceiptDocument from "../documents/ReceiptDocument";

const ReceiptSchema = new Schema<ReceiptDocument>({
  date: { type: Date, required: true },
  credit: { type: Number, required: true },
  debit: { type: Number, required: true },
  tenant: {
    _id: Types.ObjectId,
    fullname: String,
  },
  property: {
    _id: Types.ObjectId,
    address: {
      addressLn1: { type: String, required: true },
      addressLn2: { type: String, required: true },
    },
  },
  category: { type: String, required: true },
  description: { type: String, required: true },
  paidFrom: { type: Date, required: true },
  paidTo: { type: Date, required: true },
  balance: { type: Number, required: true },
});

export default ReceiptSchema;
