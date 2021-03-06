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
// is set by the POST /landlords
let landlordId: string;

beforeAll(async () => {
  await TestDb.connectTestDatabase();
});

afterAll(async () => {
  await TestDb.clearTestDatabase();
  await TestDb.closeTestDatabase();
});

/**
 * @group integration
 */
describe("/landlords", () => {
  describe("POST", () => {
    describe("201 - CREATED", () => {
      let res: any;

      beforeAll(async () => {
        res = await request(app)
          .post("/landlords")
          .set("Accept", "application/json")
          .send(testLandlord);

        landlordId = res.body._id;
      });

      test("status is 201", () => {
        expect(res.status).toBe(201);
      });

      test("response body matches testLandlord", () => {
        expect(res.body).toMatchObject(testLandlord);
      });
    });

    describe("400 - Bad Request", () => {
      describe("Input: Empty Fullname Property", () => {
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

      describe("Input: Missing Email Property", () => {
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
    describe("200 - OK", () => {
      let res: any;

      beforeAll(async () => {
        res = await request(app)
          .get("/landlords")
          .set("Accept", "application/json");
      });

      test("status is 200", () => {
        expect(res.status).toBe(200);
      });

      test("responds with array", () => {
        expect(Array.isArray(res.body)).toBe(true);
      });

      test("element matches previously created landlord", () => {
        expect(res.body[0]).toMatchObject(testLandlord);
      });
    });

    test.todo("403 - Forbidden");
    test.todo("500 - Internal Server Error");
  });
});

/**
 * @group integration
 */
describe("/landlords/{landlordId}", () => {
  describe("GET", () => {
    describe("200 - OK", () => {
      let res: any;

      beforeAll(async () => {
        res = await request(app)
          .get(`/landlords/${landlordId}`)
          .set("Accept", "application/json");
      });

      test("status is 200", () => {
        expect(res.status).toBe(200);
      });

      test("element matches previously created landlord", () => {
        expect(res.body).toMatchObject(testLandlord);
      });
    });

    describe("400 - Bad Request", () => {
      let res: any;

      beforeAll(async () => {
        res = await request(app)
          .get(`/landlords/5461`)
          .set("Accept", "application/json");
      });

      test("status is 400", () => {
        expect(res.status).toBe(400);
      });
    });

    test.todo("403 - Forbidden");
    test.todo("500 - Internal Server Error");
  });

  describe("PATCH", () => {
    describe("200 - OK", () => {
      let res: any;
      const payload = { fullname: "PATCH Smith" };

      beforeAll(async () => {
        res = await request(app)
          .patch(`/landlords/${landlordId}`)
          .send(payload)
          .set("Accept", "application/json");
      });

      test("status is 200", () => {
        expect(res.status).toBe(200);
      });
    });

    describe("400 - Bad Request", () => {
      describe("Input: Undefined Payload", () => {
        let res: any;
        const payload = undefined;

        beforeAll(async () => {
          res = await request(app)
            .patch(`/landlords/${landlordId}`)
            .send(payload)
            .set("Accept", "application/json");
        });

        test("status is 400", () => {
          expect(res.status).toBe(400);
        });
      });

      describe("Input: Empty Payload", () => {
        test.todo("status is 400");
      });
    });

    test.todo("403 - Forbidden");
    test.todo("500 - Internal Server Error");
  });
});
