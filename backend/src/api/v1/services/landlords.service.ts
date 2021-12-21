import { model } from "mongoose";
import {
  PatchLandlord,
  Landlord,
} from "../../../../openapi/src/api/v1/components/schemas";

import LandlordSchema from "../models/LandlordSchema";

const LandlordModel = model("Landlord", LandlordSchema);

export const GetLandlordById = async (id: string) => {
  try {
    const results = await LandlordModel.findById(id).exec();
    return results;
  } catch (err) {
    throw err;
  }
};

export const GetLandlords = async (filter = {}) => {
  try {
    const results = await LandlordModel.find(filter).exec();
    return results;
  } catch (err) {
    throw err;
  }
};

export const CreateLandlord = async (landlord: Landlord) => {
  try {
    const results = await LandlordModel.create(landlord);
    return results;
  } catch (err) {
    throw err;
  }
};

export const UpdateLandlord = async (id: string, landlord: PatchLandlord) => {
  try {
    const results = await LandlordModel.updateOne({ _id: id }, landlord);
    return results;
  } catch (err) {
    throw err;
  }
};
