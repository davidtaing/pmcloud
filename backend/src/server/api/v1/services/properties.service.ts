import {
  Property,
  PatchProperty,
} from "../../../../openapi/api/v1/components/schemas";
import PropertyModel from "../models/PropertyModel";
import { Error } from "mongoose";
import ApiError from "../../../util/ApiError";
import ApiErrorCodes from "../../../util/ApiErrorCodes";

class PropertiesService {
  static async get(filter = {}) {
    try {
      return await PropertyModel.find(filter).exec();
    } catch (err) {
      throw err;
    }
  }

  static async getById(id: string) {
    try {
      return await PropertyModel.findById(id).exec();
    } catch (err) {
      if (err instanceof Error.CastError)
        throw new ApiError(ApiErrorCodes.INVALID_PROPERTY_ID);

      throw err;
    }
  }

  static async create(property: Property) {
    try {
      return await PropertyModel.create(property);
    } catch (err) {
      throw err;
    }
  }

  static async update(id: string, doc: PatchProperty) {
    try {
      return await PropertyModel.updateOne({ _id: id }, doc);
    } catch (err) {
      if (err instanceof Error.CastError)
        throw new ApiError(ApiErrorCodes.INVALID_PROPERTY_ID);

      throw err;
    }
  }
}

export default PropertiesService;
