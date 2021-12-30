import TestDb from "../../util/testDb";
import TenantsService from "../../../api/v1/services/tenants.service";
import ApiError from "../../../util/ApiError";
import ApiErrorCodes from "../../../util/ApiErrorCodes";
import Helpers from "../../util/helpers";

/**
 * @group integration
 */
describe("TenantsService", () => {
  const testTenant = {
    propertyId: "",
    fullname: "Stephen Johnson",
    phone: "0255500000",
    mobile: "0491570156",
    email: "sjohnson@fakeemail.com",
  };
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

  describe("createTenant", () => {
    describe("Success", () => {
      describe("Input: Valid Object, Output: Tenant Document", () => {
        let result: any;

        beforeAll(async () => {
          result = await TenantsService.create(testTenant);
          tenantId = result._id;
        });

        test("contains payload data", () => {
          expect(result).toMatchObject(testTenant);
        });

        test("has added _id property", () => {
          expect(result).toHaveProperty("_id");
        });

        test("has added __v property", () => {
          expect(result).toHaveProperty("__v");
        });
      });

      describe("Failure", () => {
        describe("Input: Invalid Tenant Object, Output: API Error", () => {
          let invalidTenant = {
            propertyId: "",
            fullname: "Stephen Johnson",
            phone: "",
            mobile: "",
            email: "sjohnson@fakeemail.com",
          };
          let result: any;

          const testMethod = async () => {
            result = await TenantsService.create(invalidTenant);
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
          result = await TenantsService.get();
        });

        test("returns array", () => {
          expect(Array.isArray(result)).toBe(true);
        });

        test("array contains one element", () => {
          expect(result).toHaveLength(1);
        });

        test("element is the same document from the createTenant test", () => {
          expect(result[0]).toMatchObject(testTenant);
        });
      });
    });
  });

  describe("getTenantById", () => {
    describe("Success", () => {
      describe("Input: Valid ID, Output: Tenant Doc", () => {
        let result: any;

        beforeAll(async () => {
          result = await TenantsService.getById(tenantId);
        });

        test("returns test Tenant", () => {
          expect(result).toMatchObject(testTenant);
        });
      });
    });

    describe("Failure", () => {
      describe("Input: Valid ID, Output: Error (Tenant Not Found)", () => {
        let result: any;
        const validId = "FFFFFFFFFFFFFFFFFFFFFFFF";

        beforeAll(async () => {
          result = await TenantsService.getById(validId);
        });

        test("returns null", () => {
          expect(result).toBe(null);
        });
      });

      describe("Input: Invalid ID, Output: Error (Invalid Tenant)", () => {
        let result: any;
        const invalidId = "";
        const testMethod = async () => {
          result = await TenantsService.getById(invalidId);
        };

        test("throws API Error (Invalid Tenant Id)", () => {
          expect(testMethod).rejects.toThrow(
            new ApiError(ApiErrorCodes.INVALID_TENANT_ID)
          );
        });
      });
    });
  });

  describe("updateTenant", () => {
    describe("Success", () => {
      describe("Input: Valid ID + Valid Object, Output: Tenant Doc", () => {
        const payload = {
          fullname: "Successfully Updated Name",
        };
        let updateResponse: any;
        let tenantDoc: any;

        beforeAll(async () => {
          updateResponse = await TenantsService.update(tenantId, payload);
          tenantDoc = await TenantsService.getById(tenantId);
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

        describe("Tenant document", () => {
          test("fullname updated to 'Successfully Updated Name'", () => {
            expect(tenantDoc.fullname).toBe("Successfully Updated Name");
          });
        });
      });
    });

    describe("Failure", () => {
      describe("Input: Valid ID + Valid Object, Output: Error (Tenant Not Found)", () => {
        const validId = "FFFFFFFFFFFFFFFFFFFFFFFF";
        const payload = {
          fullname: "Unsuccessfully Updated Name",
        };
        let updateResponse: any;
        let tenantDoc: any;

        beforeAll(async () => {
          updateResponse = await TenantsService.update(validId, payload);
          tenantDoc = await TenantsService.getById(tenantId);
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

        describe("Tenant document", () => {
          test("addressLn1 has not been updated to 'Unsuccessfully Updated Name'", () => {
            expect(tenantDoc.fullname).not.toBe("Unsuccessfully Updated Name");
          });
        });
      });

      describe("Input: Invalid ID + Valid Object, Output: Error (Invalid TenantId)", () => {
        const invalidId = "";
        const payload = {};
        let updateResponse: any;

        const testMethod = async () => {
          updateResponse = await TenantsService.update(invalidId, payload);
        };

        test("throws API Error", () => {
          expect(testMethod).rejects.toThrow(
            new ApiError(ApiErrorCodes.INVALID_TENANT_ID)
          );
        });
      });
    });
  });
});
