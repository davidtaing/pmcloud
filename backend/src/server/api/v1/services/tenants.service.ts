import {
  Tenant,
  PatchTenant,
} from "../../../../openapi/api/v1/components/schemas";
import TenantModel from "../models/TenantModel";
import { Error } from "mongoose";
import ApiError from "../../../util/ApiError";
import ApiErrorCodes from "../../../util/ApiErrorCodes";

class TenantsService {
  static async get(filter = {}) {
    try {
      return await TenantModel.find(filter).exec();
    } catch (err) {
      throw err;
    }
  }

  static async getById(id: string) {
    try {
      return await TenantModel.findById(id).exec();
    } catch (err) {
      if (err instanceof Error.CastError)
        throw new ApiError(ApiErrorCodes.INVALID_TENANT_ID);

      throw err;
    }
  }

  static async create(tenant: Tenant) {
    try {
      return await TenantModel.create(tenant);
    } catch (err) {
      throw err;
    }
  }

  static async update(id: string, doc: PatchTenant) {
    try {
      return await TenantModel.updateOne({ _id: id }, doc);
    } catch (err) {
      if (err instanceof Error.CastError)
        throw new ApiError(ApiErrorCodes.INVALID_TENANT_ID);

      throw err;
    }
  }
}

export default TenantsService;
