import app from "../../../app";
import request from "supertest";
import {
  connectTestDatabase,
  clearTestDatabase,
  closeTestDatabase,
} from "../../util/testDb";

const testLandlord = {
  fullname: "John Smith",
  mobile: "0491570006",
  email: "davidtaing@fake.com",
  addressLn1: "123 Fake St",
  addressLn2: "Sydney NSW 2000",
};

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
    describe("Successful Response", () => {
      it("should have 201 status code", async () => {
        const res = await request(app)
          .post("/landlords")
          .send(testLandlord)
          .set("Accept", "application/json");

        expect(res.statusCode).toBe(201);
      });
    });

    describe("Empty Landlord Object", () => {
      it("should have 400 status code", async () => {
        const res = await request(app)
          .post("/landlords")
          .send({})
          .set("Accept", "application/json");

        expect(res.statusCode).toBe(400);
      });
    });

    describe("Missing Email Prop", () => {
      it("should have 400 status code", async () => {
        const { email, ...otherLandlordProps } = testLandlord;

        const res = await request(app)
          .post("/landlords")
          .send({ ...otherLandlordProps })
          .set("Accept", "application/json");

        expect(res.statusCode).toBe(400);
      });
    });

    describe("Empty Email Prop", () => {
      it("should have 400 status code", async () => {
        const res = await request(app)
          .post("/landlords")
          .send({ ...testLandlord, email: "" })
          .set("Accept", "application/json");

        expect(res.statusCode).toBe(400);
      });
    });
  });
});
