import app from "../../../app";
import request from "supertest";
import TestDb from "../../util/testDb";

const testLandlord = {
  fullname: "Test Smith",
  mobile: "0491570006",
  email: "testsmith@fake.com",
  address: {
    addressLn1: "123 Fake St",
    addressLn2: "Sydney NSW 2000",
  },
};

beforeAll(async () => {
  await TestDb.connectTestDatabase();
});

afterAll(async () => {
  await TestDb.clearTestDatabase();
  await TestDb.closeTestDatabase();
});

describe("/landlords", () => {
  describe("POST", () => {
    describe("201 - CREATED", () => {
      let res: any;

      beforeAll(async () => {
        res = await request(app)
          .post("/landlords")
          .set("Accept", "application/json")
          .send(testLandlord);
      });

      test("status is 201", () => {
        expect(res.status).toBe(201);
      });

      test("response body matches testLandlord", () => {
        expect(res.body).toMatchObject(testLandlord);
      });
    });

    describe("400 - Bad Request", () => {
      describe("Empty fullname property", () => {
        let res: any;

        beforeAll(async () => {
          res = await request(app)
            .post("/landlords")
            .set("Accept", "application/json")
            .send({ ...testLandlord, fullname: "" });
        });

        test("status is 400", () => {
          expect(res.status).toBe(400);
        });
      });

      describe("Missing email property", () => {
        let res: any;

        beforeAll(async () => {
          const { email, ...otherLandlordProps }: any = testLandlord;

          res = await request(app)
            .post("/landlords")
            .set("Accept", "application/json")
            .send({ ...otherLandlordProps });
        });

        test("status is 400", () => {
          expect(res.status).toBe(400);
        });
      });
    });

    test.todo("403 - Forbidden");
    test.todo("500 - Internal Server Error");
  });

  describe("GET", () => {
    test.todo("200 - OK");
    test.todo("403 - Forbidden");
    test.todo("500 - Internal Server Error");
  });
});

describe("/landlords/{landlordId}", () => {
  describe("GET", () => {
    test.todo("200 - OK");
    test.todo("400 - Bad Request");
    test.todo("403 - Forbidden");
    test.todo("500 - Internal Server Error");
  });

  describe("PATCH", () => {
    test.todo("200 - OK");
    test.todo("400 - Bad Request");
    test.todo("403 - Forbidden");
    test.todo("500 - Internal Server Error");
  });
});
