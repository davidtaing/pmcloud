import TestDb from "../../util/testDb";
import PropertiesService from "../../../api/v1/services/properties.service";

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
describe("PropertiesService", () => {
  let propertyId: string;
  describe("createProperty", () => {
    test.todo("returns created landlord document");
  });

  describe("getProperties", () => {
    test.todo("should return array containing one property");
    test.todo("matches property from previous createProperty test");
  });

  describe("getPropertyById", () => {
    // valid id
    test.todo("sucessfully finds property");
    // invalid id
    test.todo("property doesn't exist");
  });

  describe("updateProperty", () => {
    // valid id
    test.todo("sucessfully updates property");
    // invalid id
    test.todo("property doesn't exist");
  });
});
