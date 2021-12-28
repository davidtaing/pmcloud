import {
  Tenant,
  PatchTenant,
} from "../../../../openapi/api/v1/components/schemas";
import TenantModel from "../models/TenantModel";

export const GetTenants = async (filter = {}) => {
  try {
    return await TenantModel.find(filter).exec();
  } catch (err) {
    throw err;
  }
};

export const GetTenantById = async (id: string) => {
  try {
    return await TenantModel.findById(id).exec();
  } catch (err) {
    throw err;
  }
};

export const CreateTenant = async (tenant: Tenant) => {
  try {
    return await TenantModel.create(tenant);
  } catch (err) {
    throw err;
  }
};

export const UpdateTenant = async (id: string, doc: PatchTenant) => {
  try {
    return await TenantModel.updateOne({ _id: id }, doc);
  } catch (err) {
    throw err;
  }
};
