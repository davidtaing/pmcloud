import app from "../../../app";
import request from "supertest";
import TestDb from "../../util/testDb";
import Helpers from "../../util/helpers";

const testProperty = {
  address: {
    addressLn1: "111 Elizaneth St",
    addressLn2: "Sydney NSW 2000",
  },
  landlordId: "",
};
// is set by the POST /properties
let propertyId: string;

beforeAll(async () => {
  await TestDb.connectTestDatabase();
  testProperty.landlordId = (await Helpers.createLandlord())._id;
});

afterAll(async () => {
  await TestDb.clearTestDatabase();
  await TestDb.closeTestDatabase();
});

describe("/properties", () => {
  describe("POST", () => {
    describe("201 - Created", () => {
      let res: any;

      beforeAll(async () => {
        res = await request(app)
          .post("/properties")
          .set("Accept", "application/json")
          .send(testProperty);

        propertyId = res.body._id;
      });

      test("status is 201", () => {
        expect(res.status).toBe(201);
      });

      test("response body matches testProperty", () => {
        expect(res.body).toMatchObject(testProperty);
      });
    });

    describe("400 - Bad Request", () => {
      describe("Empty landlordId property", () => {
        let res: any;

        beforeAll(async () => {
          res = await request(app)
            .post("/properties")
            .set("Accept", "application/json")
            .send({ ...testProperty, landlordId: "" });
        });

        test("status is 400", () => {
          expect(res.status).toBe(400);
        });
      });

      test.todo("403 - Forbidden");
      test.todo("500 - Internal Server Error");
    });
  });

  describe("GET", () => {
    describe("200 - OK", () => {
      let res: any;

      beforeAll(async () => {
        res = await request(app)
          .get("/properties")
          .set("Accept", "application/json");
      });

      test("status is 200", () => {
        expect(res.status).toBe(200);
      });

      test("responds with array", () => {
        expect(Array.isArray(res.body)).toBe(true);
      });

      test("element matches previously created landlord", () => {
        expect(res.body[0]).toMatchObject(testProperty);
      });
    });

    test.todo("403 - Forbidden");
    test.todo("500 - Internal Server Error");
  });
});

describe("/properties/{propertyId}", () => {
  describe("GET", () => {
    describe("200 - OK", () => {
      let res: any;

      beforeAll(async () => {
        res = await request(app)
          .get(`/properties/${propertyId}`)
          .set("Accept", "application/json");
      });

      test("status is 200", () => {
        expect(res.status).toBe(200);
      });

      test("element matches previously created landlord", () => {
        expect(res.body).toMatchObject(testProperty);
      });
    });

    describe("400 - Bad Request", () => {
      let res: any;

      beforeAll(async () => {
        res = await request(app)
          .get(`/properties/5461`)
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
      const payload = {
        address: {
          addressLn1: "555 Elizaneth St",
          addressLn2: "Sydney NSW 2000",
        },
      };

      beforeAll(async () => {
        res = await request(app)
          .patch(`/properties/${propertyId}`)
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
            .patch(`/properties/${propertyId}`)
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
