import TestDb from "../../util/testDb";
import PropertiesController from "../../../api/v1/controllers/properties.controller";

beforeAll(async () => {
  await TestDb.connectTestDatabase();
});

afterAll(async () => {
  await TestDb.clearTestDatabase();
  await TestDb.closeTestDatabase();
});

describe("/properties", () => {
  describe("GET", () => {
    test.todo("200 - OK");
    test.todo("403 - Forbidden");
    test.todo("500 - Internal Server Error");
  });

  describe("POST", () => {
    test.todo("200 - OK");
    test.todo("400 - Bad Request");
    test.todo("403 - Forbidden");
    test.todo("500 - Internal Server Error");
  });
});

describe("/properties/{propertyId}", () => {
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
