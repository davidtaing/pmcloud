import app from "../../../app";
import request from "supertest";
import TestDb from "../../util/testDb";
import Helpers from "../../util/helpers";

const testTenant = {
  propertyId: "",
  fullname: "Stephen Johnson",
  phone: "0255500000",
  mobile: "0491570156",
  email: "sjohnson@fakeemail.com",
};
// is set by the POST /tenants
let tenantId: string;

beforeAll(async () => {
  await TestDb.connectTestDatabase();
  const landlord = await Helpers.createLandlord();
  const property = await Helpers.createProperty(landlord._id);
  testTenant.propertyId = property._id;
});

afterAll(async () => {
  await TestDb.clearTestDatabase();
  await TestDb.closeTestDatabase();
});

/**
 * @group integration
 */
describe("/tenants", () => {
  describe("POST", () => {
    describe("201 - Created", () => {
      let res: any;

      beforeAll(async () => {
        res = await request(app)
          .post("/tenants")
          .set("Accept", "application/json")
          .send(testTenant);

        tenantId = res.body._id;
      });

      test("status is 201", () => {
        expect(res.status).toBe(201);
      });

      test("response body matches testTenant", () => {
        expect(res.body).toMatchObject(testTenant);
      });
    });

    describe("400 - Bad Request", () => {
      describe("Input: Empty Fullname Property", () => {
        let res: any;

        beforeAll(async () => {
          res = await request(app)
            .post("/tenants")
            .set("Accept", "application/json")
            .send({ ...testTenant, fullname: "" });
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
          .get("/tenants")
          .set("Accept", "application/json");
      });

      test("status is 200", () => {
        expect(res.status).toBe(200);
      });

      test("responds with array", () => {
        expect(Array.isArray(res.body)).toBe(true);
      });

      test("element matches previously created landlord", () => {
        expect(res.body[0]).toMatchObject(testTenant);
      });
    });

    test.todo("403 - Forbidden");
    test.todo("500 - Internal Server Error");
  });
});

/**
 * @group integration
 */
describe("/tenants/{tenantId}", () => {
  describe("GET", () => {
    describe("200 - OK", () => {
      let res: any;

      beforeAll(async () => {
        res = await request(app)
          .get(`/tenants/${tenantId}`)
          .set("Accept", "application/json");
      });

      test("status is 200", () => {
        expect(res.status).toBe(200);
      });

      test("element matches previously created landlord", () => {
        expect(res.body).toMatchObject(testTenant);
      });
    });

    describe("400 - Bad Request", () => {
      let res: any;

      beforeAll(async () => {
        res = await request(app)
          .get(`/tenants/5461`)
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
          .patch(`/tenants/${tenantId}`)
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
            .patch(`/tenants/${tenantId}`)
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
