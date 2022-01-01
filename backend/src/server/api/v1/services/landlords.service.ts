import { Error } from "mongoose";
import {
  PatchLandlord,
  Landlord,
} from "../../../../openapi/api/v1/components/schemas";
import ApiError from "../../../util/ApiError";
import ApiErrorCodes from "../../../util/ApiErrorCodes";
import LandlordModel from "../models/landlord.model";

class LandlordsService {
  static async getById(id: string) {
    try {
      const results = await LandlordModel.findById(id).exec();
      return results;
    } catch (err) {
      if (err instanceof Error.CastError)
        throw new ApiError(ApiErrorCodes.INVALID_LANDLORD_ID);

      throw err;
    }
  }

  static async get(filter = {}) {
    try {
      const results = await LandlordModel.find(filter).exec();
      return results;
    } catch (err) {
      throw err;
    }
  }

  static async create(landlord: Landlord) {
    try {
      const results = await LandlordModel.create(landlord);
      return results;
    } catch (err) {
      throw err;
    }
  }

  static async update(id: string, landlord: PatchLandlord) {
    try {
      const results = await LandlordModel.updateOne({ _id: id }, landlord);
      return results;
    } catch (err) {
      if (err instanceof Error.CastError)
        throw new ApiError(ApiErrorCodes.INVALID_LANDLORD_ID);

      throw err;
    }
  }
}

export default LandlordsService;
