import {
  Property,
  PatchProperty,
} from "../../../../openapi/api/v1/components/schemas";
import PropertyModel from "../models/PropertyModel";

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
      throw err;
    }
  }
}

export default PropertiesService;
