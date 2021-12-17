import { model } from "mongoose";

import LandlordSchema from "../models/LandlordSchema";

const LandlordModel = model("Landlord", LandlordSchema);

export const GetLandlord = async (id: string) => {
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

export const CreateLandlord = async (landlord: typeof LandlordSchema) => {
  try {
    const results = await LandlordModel.create(landlord);
    return results;
  } catch (err) {
    throw err;
  }
};

export const UpdateLandlord = async (
  id: string,
  landlord: typeof LandlordSchema
) => {
  try {
    const results = await LandlordModel.updateOne({ _id: id }, landlord);
    return results;
  } catch (err) {
    throw err;
  }
};