import mongoose from "mongoose";
import PropertySchema from "../models/PropertySchema";

const testLandlord = {
  fullName: "David Taing",
  phone: "0255500000",
  mobile: "0491570006",
  email: "davidtaing@email.com",
  addressLn1: "50 Ocean St",
  addressLn2: "Sydney NSW 2000",
};

const testTenant = {
  fullName: "Taing David",
  phone: null,
  mobile: "0491570156",
  email: "taingdavid@email.com",
};

const testData = {
  addressLn1: "52 Ocean St",
  addressLn2: "Sydney NSW 2000",
  landlord: testLandlord,
  tenant: testTenant,
};

export const getProperty = async (req: any, res: any, err: any) => {
  const propertyModel = mongoose.model("property", PropertySchema);
  const property = await propertyModel.find();

  console.log(property);
  res.json(property);
};

export const addProperty = async (req: any, res: any, err: any) => {
  try {
    const propertyModel = mongoose.model("property", PropertySchema);
    const property = await propertyModel.create(testData);

    console.log(property);
    res.json({
      message: "inserted property into database",
      payload: property,
    });
  } catch (err) {
    console.error(err);
  }
};
