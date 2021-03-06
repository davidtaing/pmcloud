import mongoose from "mongoose";
import { MongoUrl } from "../../config";

class TestDb {
  static async connectTestDatabase() {
    await mongoose.connect(MongoUrl);
  }

  static async closeTestDatabase() {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  }

  static async clearTestDatabase() {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
    }
  }
}

export default TestDb;
