import {
  Property,
  PatchProperty,
} from "../../../../openapi/api/v1/components/schemas";
import PropertyModel from "../models/PropertyModel";

class PropertiesService {
  static async getProperties(filter = {}) {
    try {
      return await PropertyModel.find(filter).exec();
    } catch (err) {
      throw err;
    }
  }

  static async getPropertyById(id: string) {
    try {
      return await PropertyModel.findById(id).exec();
    } catch (err) {
      throw err;
    }
  }

  static async createProperty(property: Property) {
    try {
      return await PropertyModel.create(property);
    } catch (err) {
      throw err;
    }
  }

  static async updateProperty(id: string, doc: PatchProperty) {
    try {
      return await PropertyModel.updateOne({ _id: id }, doc);
    } catch (err) {
      throw err;
    }
  }
}

export default PropertiesService;
