import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

class TestDb {
  static mongod: MongoMemoryServer;

  static async connectTestDatabase() {
    this.mongod = await MongoMemoryServer.create();
    const uri = this.mongod.getUri();
    await mongoose.connect(uri);
  }

  static async closeTestDatabase() {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await this.mongod.stop();
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
