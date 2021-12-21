import app from "../../../app";
import request from "supertest";
import {
  connectTestDatabase,
  clearTestDatabase,
  closeTestDatabase,
} from "../../../testDb";

beforeAll(async () => {
  await connectTestDatabase();
});

afterAll(async () => {
  await clearTestDatabase();
  await closeTestDatabase();
});

/**
 * @group integration
 */
describe("/landlords controllers", () => {
  describe("GET /landlords", () => {
    it("should return 200 Status and ", async () => {
      request(app)
        .get("/landlords")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .end(() => {});
    });
  });
});
