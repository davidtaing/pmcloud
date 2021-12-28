import {
  Property,
  PatchProperty,
} from "../../../../openapi/api/v1/components/schemas";
import PropertyModel from "../models/PropertyModel";

export const GetProperties = async (filter = {}) => {
  try {
    return await PropertyModel.find(filter).exec();
  } catch (err) {
    throw err;
  }
};

export const GetPropertyById = async (id: string) => {
  try {
    return await PropertyModel.findById(id).exec();
  } catch (err) {
    throw err;
  }
};

export const CreateProperty = async (property: Property) => {
  try {
    return await PropertyModel.create(property);
  } catch (err) {
    throw err;
  }
};

export const UpdateProperty = async (id: string, doc: PatchProperty) => {
  try {
    return await PropertyModel.updateOne({ _id: id }, doc);
  } catch (err) {
    throw err;
  }
};
