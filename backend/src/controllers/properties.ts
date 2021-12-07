import mongoose from "mongoose";
import PropertySchema from "../models/PropertySchema";

export const getProperty = async (req: any, res: any, err: any) => {
  const propertyModel = mongoose.model("property", PropertySchema);
  const property = await propertyModel.find();

  console.log(property);
  res.json(property);
};
