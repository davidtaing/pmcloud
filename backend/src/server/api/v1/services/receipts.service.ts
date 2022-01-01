import { Receipt } from "../../../../openapi/api/v1/components/schemas";
import ReceiptModel from "../models/ReceiptModel";
import { Error } from "mongoose";
import ApiError from "../../../util/ApiError";
import ApiErrorCodes from "../../../util/ApiErrorCodes";

class ReceiptsService {
  static async get(filter = {}) {
    try {
      return await ReceiptModel.find(filter).exec();
    } catch (err) {
      throw err;
    }
  }

  static async getById(id: string) {
    try {
      return await ReceiptModel.findById(id).exec();
    } catch (err) {
      if (err instanceof Error.CastError)
        throw new ApiError(ApiErrorCodes.INVALID_TENANT_ID);

      throw err;
    }
  }

  static async create(receipts: Receipt[]) {
    try {
      return await ReceiptModel.create(receipts);
    } catch (err) {
      throw err;
    }
  }
}

export default ReceiptsService;
