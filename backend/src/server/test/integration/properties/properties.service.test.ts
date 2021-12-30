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
    describe("Success", () => {
      // valid object => Property document
      test.todo("returns created property document");
      test.todo("contains payload data");
      test.todo("has added _id property");
      test.todo("has added __v property");
    });

    describe("Failure", () => {
      // invalid object => error
      test.todo("throws API error");
    });
  });

  describe("getProperties", () => {
    describe("Success", () => {
      // valid object => Property[1]
      test.todo("returns created property array");
      test.todo("property array contains one element");
    });
  });

  describe("getPropertyById", () => {
    describe("Success", () => {
      // valid id => Property document
      test.todo("returns property document");
    });

    describe("Failure", () => {
      // invalid id => error
      test.todo("throws API error");
      // valid id => property not found error
      test.todo("throws API error");
    });
  });

  describe("updateProperty", () => {
    describe("Success", () => {
      // valid id + valid object => Property document
      test.todo("returns updated property document");
    });

    describe("Failure", () => {
      // invalid id => error
      test.todo("throws API error");
      // invalid object => error
      test.todo("throws API error");
      // valid id => property not found error
      test.todo("throws API error");
    });
  });
});
