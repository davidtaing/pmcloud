import TestDb from "../../util/testDb";
import LandlordsService from "../../../api/v1/services/landlords.service";
import ApiError from "../../../util/ApiError";
import ApiErrorCodes from "../../../util/ApiErrorCodes";

/**
 * @group integration
 */
describe("LandlordsService", () => {
  let landlordId: string;
  const testLandlord = {
    fullname: "John Smith",
    mobile: "0491570006",
    email: "johnsmith@fake.com",
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

  describe("createLandlord", () => {
    describe("Success", () => {
      describe("Input: Valid Object, Output: Landlord Document", () => {
        let result: any;

        beforeAll(async () => {
          result = await LandlordsService.create(testLandlord);
          landlordId = result._id;
        });

        test("contains payload data", () => {
          expect(result).toMatchObject(testLandlord);
        });

        test("has added _id property", () => {
          expect(result).toHaveProperty("_id");
        });

        test("has added __v property", () => {
          expect(result).toHaveProperty("__v");
        });
      });

      describe("Failure", () => {
        describe("Input: Invalid Landlord Object, Output: API Error", () => {
          let invalidLandlord = {
            fullname: "",
            mobile: "",
            email: "johnsmith@fake.com",
            address: {
              addressLn1: "123 Fake St",
              addressLn2: "Sydney NSW 2000",
            },
          };
          let result: any;

          const testMethod = async () => {
            result = await LandlordsService.create(invalidLandlord);
          };

          test("throws error", () => {
            expect(testMethod).rejects.toThrow(Error);
          });
        });
      });
    });
  });

  describe("getLandlords", () => {
    describe("Success", () => {
      describe("Input: None, Output: Landlords[1]", () => {
        let result: any;

        beforeAll(async () => {
          result = await LandlordsService.get();
        });

        test("returns array", () => {
          expect(Array.isArray(result)).toBe(true);
        });

        test("array contains one element", () => {
          expect(result).toHaveLength(1);
        });

        test("element is the same document from the createLandlord test", () => {
          expect(result[0]).toMatchObject(testLandlord);
        });
      });
    });
  });

  describe("getLandlordById", () => {
    describe("Success", () => {
      describe("Input: Valid ID, Output: Landlord Doc", () => {
        let result: any;

        beforeAll(async () => {
          result = await LandlordsService.getById(landlordId);
        });

        test("returns test Landlord", () => {
          expect(result).toMatchObject(testLandlord);
        });
      });
    });

    describe("Failure", () => {
      describe("Input: Valid ID, Output: Error (Landlord Not Found)", () => {
        let result: any;
        const validId = "FFFFFFFFFFFFFFFFFFFFFFFF";

        beforeAll(async () => {
          result = await LandlordsService.getById(validId);
        });

        test("returns test Landlord", () => {
          expect(result).toBe(null);
        });
      });

      describe("Input: Invalid ID, Output: Error (Invalid Landlord)", () => {
        let result: any;
        const testMethod = async (landlordId: string) => {
          result = await LandlordsService.getById(landlordId);
        };

        test("returns test Landlord", () => {
          const invalidId = "";

          expect(testMethod(invalidId)).rejects.toThrow(
            new ApiError(ApiErrorCodes.INVALID_LANDLORD_ID)
          );
        });
      });
    });
  });

  describe("updateLandlord", () => {
    describe("Success", () => {
      describe("Input: Valid ID + Valid Object, Output: Landlord Doc", () => {
        const payload = { fullname: "Sam Smith" };
        let updateResponse: any;
        let landlordDoc: any;

        beforeAll(async () => {
          updateResponse = await LandlordsService.update(landlordId, payload);
          landlordDoc = await LandlordsService.getById(landlordId);
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

        describe("landlord document", () => {
          test("name has been updated to 'Sam Smith'", () => {
            expect(landlordDoc.fullname).toBe("Sam Smith");
          });
        });
      });
    });

    describe("Failure", () => {
      describe("Input: Valid ID + Valid Object, Output: Error (Landlord Not Found)", () => {
        const validId = "FFFFFFFFFFFFFFFFFFFFFFFF";
        const payload = { fullname: "Ben Smith" };
        let updateResponse: any;
        let landlordDoc: any;

        beforeAll(async () => {
          updateResponse = await LandlordsService.update(validId, payload);
          landlordDoc = await LandlordsService.getById(landlordId);
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

        describe("landlord document", () => {
          test("name has not been updated to 'Ben Smith'", () => {
            expect(landlordDoc.fullname).not.toBe("Ben Smith");
          });
        });
      });

      describe("Input: Invalid ID + Valid Object, Output: Error (Invalid LandlordId)", () => {
        const invalidId = "";
        const payload = { fullname: "Dave Smith" };
        let updateResponse: any;
        let landlordDoc: any;
        const testMethod = async () => {
          updateResponse = await LandlordsService.update(invalidId, payload);
        };

        test("throws API Error", () => {
          expect(testMethod).rejects.toThrow(
            new ApiError(ApiErrorCodes.INVALID_LANDLORD_ID)
          );
        });
      });
    });
  });
});
