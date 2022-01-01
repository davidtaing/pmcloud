import TestDb from "../../util/testDb";
import PropertiesService from "../../../api/v1/services/properties.service";
import ApiError from "../../../util/ApiError";
import ApiErrorCodes from "../../../util/ApiErrorCodes";
import Helpers from "../../util/helpers";

/**
 * @group integration
 */
describe("PropertiesService", () => {
  const testProperty = {
    address: {
      addressLn2: "500 Fake Rd",
      suburb: "Sydney",
      state: "NSW",
      postcode: "2000",
    },
    landlordId: "",
  };
  let propertyId: string;

  beforeAll(async () => {
    await TestDb.connectTestDatabase();
    testProperty.landlordId = (await Helpers.createLandlord())._id;
  });

  afterAll(async () => {
    await TestDb.clearTestDatabase();
    await TestDb.closeTestDatabase();
  });

  describe("createProperty", () => {
    describe("Success", () => {
      describe("Input: Valid Object, Output: Property Document", () => {
        let result: any;

        beforeAll(async () => {
          result = await PropertiesService.create(testProperty);
          propertyId = result._id;
        });

        test("contains payload data", () => {
          expect(result).toMatchObject(testProperty);
        });

        test("has added _id property", () => {
          expect(result).toHaveProperty("_id");
        });

        test("has added __v property", () => {
          expect(result).toHaveProperty("__v");
        });
      });

      describe("Failure", () => {
        describe("Input: Invalid Property Object, Output: API Error", () => {
          let invalidProperty = {
            address: {
              addressLn2: "123 Fake St",
              suburb: "Sydney",
              state: "NSW",
              postcode: "2000",
            },
            landlordId: "",
          };
          let result: any;

          const testMethod = async () => {
            result = await PropertiesService.create(invalidProperty);
          };

          test("throws error", () => {
            expect(testMethod).rejects.toThrow(Error);
          });
        });
      });
    });
  });

  describe("getProperties", () => {
    describe("Success", () => {
      describe("Input: None, Output: Properties[1]", () => {
        let result: any;

        beforeAll(async () => {
          result = await PropertiesService.get();
        });

        test("returns array", () => {
          expect(Array.isArray(result)).toBe(true);
        });

        test("array contains one element", () => {
          expect(result).toHaveLength(1);
        });

        test("element is the same document from the createProperty test", () => {
          expect(result[0]).toMatchObject(testProperty);
        });
      });
    });
  });

  describe("getPropertyById", () => {
    describe("Success", () => {
      describe("Input: Valid ID, Output: Property Doc", () => {
        let result: any;

        beforeAll(async () => {
          result = await PropertiesService.getById(propertyId);
        });

        test("returns test Property", () => {
          expect(result).toMatchObject(testProperty);
        });
      });
    });

    describe("Failure", () => {
      describe("Input: Valid ID, Output: Error (Property Not Found)", () => {
        let result: any;
        const validId = "FFFFFFFFFFFFFFFFFFFFFFFF";

        beforeAll(async () => {
          result = await PropertiesService.getById(validId);
        });

        test("returns null", () => {
          expect(result).toBe(null);
        });
      });

      describe("Input: Invalid ID, Output: Error (Invalid Property)", () => {
        let result: any;
        const invalidId = "";
        const testMethod = async () => {
          result = await PropertiesService.getById(invalidId);
        };

        test("throws API Error (Invalid Property Id)", () => {
          expect(testMethod).rejects.toThrow(
            new ApiError(ApiErrorCodes.INVALID_PROPERTY_ID)
          );
        });
      });
    });
  });

  describe("updateProperty", () => {
    describe("Success", () => {
      describe("Input: Valid ID + Valid Object, Output: Property Doc", () => {
        const payload = {
          address: {
            addressLn2: "777 Fake Rd",
            suburb: "Sydney",
            state: "NSW",
            postcode: "2000",
          },
        };
        let updateResponse: any;
        let propertyDoc: any;

        beforeAll(async () => {
          updateResponse = await PropertiesService.update(propertyId, payload);
          propertyDoc = await PropertiesService.getById(propertyId);
        });

        describe("updateResponse", () => {
          test("property 'acknowledged = true'", () => {
            expect(updateResponse).toHaveProperty("acknowledged", true);
          });

          test("property 'modifiedCount = 1'", () => {
            expect(updateResponse).toHaveProperty("modifiedCount", 1);
          });

          test("property 'matchedCount = 1'", () => {
            expect(updateResponse).toHaveProperty("matchedCount", 1);
          });
        });

        describe("property document", () => {
          test("addressLn1 has been updated to '777 Fake Rd'", () => {
            expect(propertyDoc.address.addressLn2).toBe("777 Fake Rd");
          });
        });
      });
    });

    describe("Failure", () => {
      describe("Input: Valid ID + Valid Object, Output: Error (Property Not Found)", () => {
        const validId = "FFFFFFFFFFFFFFFFFFFFFFFF";
        const payload = {
          address: {
            addressLn2: "888 Fake Rd",
            suburb: "Sydney",
            state: "NSW",
            postcode: "2000",
          },
        };
        let updateResponse: any;
        let propertyDoc: any;

        beforeAll(async () => {
          updateResponse = await PropertiesService.update(validId, payload);
          propertyDoc = await PropertiesService.getById(propertyId);
        });

        describe("updateResponse", () => {
          test("property 'acknowledged = true'", () => {
            expect(updateResponse).toHaveProperty("acknowledged", true);
          });

          test("property 'modifiedCount = 1'", () => {
            expect(updateResponse).toHaveProperty("modifiedCount", 0);
          });

          test("property 'matchedCount = 1'", () => {
            expect(updateResponse).toHaveProperty("matchedCount", 0);
          });
        });

        describe("Property document", () => {
          test("addressLn2 has been updated to '888 Fake Rd'", () => {
            expect(propertyDoc.addressLn2).not.toBe("888 Fake Rd");
          });
        });
      });

      describe("Input: Invalid ID + Valid Object, Output: Error (Invalid PropertyId)", () => {
        const invalidId = "";
        const payload = {
          address: {
            addressLn2: "999 Fake Rd",
            suburb: "Sydney",
            state: "NSW",
            postcode: "2000",
          },
        };
        let updateResponse: any;

        const testMethod = async () => {
          updateResponse = await PropertiesService.update(invalidId, payload);
        };

        test("throws API Error", () => {
          expect(testMethod).rejects.toThrow(
            new ApiError(ApiErrorCodes.INVALID_PROPERTY_ID)
          );
        });
      });
    });
  });
});
