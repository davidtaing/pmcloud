import {
  Tenant,
  PatchTenant,
} from "../../../../openapi/api/v1/components/schemas";
import TenantModel from "../models/TenantModel";

class TenantsService {
  static async getTenants(filter = {}) {
    try {
      return await TenantModel.find(filter).exec();
    } catch (err) {
      throw err;
    }
  }

  static async getTenantById(id: string) {
    try {
      return await TenantModel.findById(id).exec();
    } catch (err) {
      throw err;
    }
  }

  static async createTenant(tenant: Tenant) {
    try {
      return await TenantModel.create(tenant);
    } catch (err) {
      throw err;
    }
  }

  static async updateTenant(id: string, doc: PatchTenant) {
    try {
      return await TenantModel.updateOne({ _id: id }, doc);
    } catch (err) {
      throw err;
    }
  }
}

export default TenantsService;
