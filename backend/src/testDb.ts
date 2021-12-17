import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

const mongod = new MongoMemoryServer();

export const connectTestDatabase = async () => {
  const uri = await mongod.getUri();
  await mongoose.connect(uri);
};

export const closeTestDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
};

export const clearTestDatabase = async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
};
