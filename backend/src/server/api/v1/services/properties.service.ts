import { model } from "mongoose";

import PropertySchema from "../models/PropertySchema";

const PropertyModel = model("Property", PropertySchema);

export const GetPropertyById = async (id: string) => {
  try {
    const results = await PropertyModel.findById(id).exec();
    return results;
  } catch (err) {
    throw err;
  }
};

export const GetProperties = async (filter = {}) => {
  try {
    const results = await PropertyModel.find(filter).exec();
    return results;
  } catch (err) {
    throw err;
  }
};

export const CreateProperty = async (property: typeof PropertySchema) => {
  try {
    const results = await PropertyModel.create(property);
    return results;
  } catch (err) {
    throw err;
  }
};

export const UpdateProperty = async (
  id: string,
  property: typeof PropertySchema
) => {
  try {
    const results = await PropertyModel.updateOne({ _id: id }, property);
    return results;
  } catch (err) {
    throw err;
  }
};
