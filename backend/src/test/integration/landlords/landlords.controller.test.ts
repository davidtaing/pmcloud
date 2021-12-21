import app from "../../../app";
import request from "supertest";
import {
  connectTestDatabase,
  clearTestDatabase,
  closeTestDatabase,
} from "../../util/testDb";

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
    it("should return 200 Status", async () => {
      const res = await request(app)
        .get("/landlords")
        .set("Accept", "application/json");

      expect(res.statusCode).toBe(200);
    });
  });

  describe("POST /landlords", () => {
    it("should have 201 status code", async () => {
      const res = await request(app)
        .post("/landlords")
        .send()
        .set("Accept", "application/json");

      expect(res.statusCode).toBe(201);
    });
  });
});
