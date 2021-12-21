import {
  connectTestDatabase,
  clearTestDatabase,
  closeTestDatabase,
} from "../../../testDb";
import {
  GetLandlordById,
  GetLandlords,
  CreateLandlord,
  UpdateLandlord,
} from "../../../api/v1/services/landlords.service";
import ApiError from "../../../util/ApiError";
import ApiErrorCodes from "../../../util/ApiErrorCodes";

beforeAll(async () => {
  await connectTestDatabase();
});

afterAll(async () => {
  await clearTestDatabase();
  await closeTestDatabase();
});

/**
 * @group integration
 */
describe("Landlords Service", () => {
  // this will be set by the CreateLandlord and used for GetLandlordById & UpdateLandlord tests
  let landlordId: string;
  const createLandlordPayload = {
    fullname: "John Smith",
    mobile: "0491570006",
    email: "davidtaing@fake.com",
    addressLn1: "123 Fake St",
    addressLn2: "Sydney NSW 2000",
  };

  describe("GetLandlords", () => {
    it("should return an empty array", async () => {
      const result = await GetLandlords();

      expect(result).toHaveLength(0);
    });
  });

  describe("CreateLandlord", () => {
    let payload: any;
    let result: any;

    beforeAll(async () => {
      payload = createLandlordPayload;
      result = await CreateLandlord(payload);
      landlordId = result?._id.toString();
    });

    it("should return new landlord object with the same payload content", () => {
      expect(result).toEqual(expect.objectContaining(payload));
    });

    it("should have a __v property added", () => {
      expect(result).toHaveProperty("__v");
    });

    it("should have a _id property added", () => {
      expect(result).toHaveProperty("_id");
    });
  });

  describe("GetLandlords Second Invokation", () => {
    it("should return an array with one element", async () => {
      const result = await GetLandlords();

      expect(result).toHaveLength(1);
    });
  });

  describe("GetLandlordById", () => {
    describe("Finds Landlord Created in Previous Test", () => {
      let result: any;

      beforeAll(async () => {
        result = await GetLandlordById(landlordId);
      });

      it("should return landlord object that was created in previous test", () => {
        expect(result).toEqual(expect.objectContaining(createLandlordPayload));
      });

      it("should return a _id property that matches landlordId param", () => {
        expect(result).toHaveProperty("_id");
        expect(result._id.toString()).toBe(landlordId);
      });
    });

    describe("Landlord Doesn't Exist", () => {
      let result: any;
      let id = "FFFFFFFFFFFFFFFFFFFFFFFF";

      beforeAll(async () => {
        result = await GetLandlordById(id);
      });

      it("should return null", () => {
        expect(result).toBeNull();
      });
    });

    describe("Invalid Landlord Id", () => {
      // Invalid Landlord ID
      let result: any;
      let id = "GGGGG";
      const testMethod = async () => {
        result = await GetLandlordById(id);
      };

      it("should throw API Error", () => {
        expect(testMethod).rejects.toThrow(ApiError);
      });

      it("should have error message 'invalid-landlord-id'", () => {
        expect(testMethod).rejects.toThrow(ApiErrorCodes.INVALID_LANDLORD_ID);
      });
    });
  });

  describe("UpdateLandlord", () => {
    describe("Finds Landlord from CreateLandlord Test", () => {
      let payload: any;
      let result: any;

      beforeAll(async () => {
        payload = {
          fullname: "Smith John",
        };
        result = await UpdateLandlord(landlordId, payload);
      });

      it("should return an object with property 'acknowleged' = true", () => {
        expect(result).toHaveProperty("acknowledged", true);
      });

      it("should return an object with property 'modifiedCount' = 1", () => {
        expect(result).toHaveProperty("modifiedCount", 1);
      });

      it("should return property 'matchedCount' = 1", () => {
        expect(result).toHaveProperty("matchedCount", 1);
      });
    });

    describe("LandlordId doesnt exist", () => {
      let payload: any;
      let result: any;
      // Invalid Landlord ID
      let id = "FFFFFFFFFFFFFFFFFFFFFFFF";

      beforeAll(async () => {
        payload = {
          fullname: "Smith John",
        };
        result = await UpdateLandlord(landlordId, payload);
      });

      it("should return an object with property 'acknowleged' = true", () => {
        expect(result).toHaveProperty("acknowledged", true);
      });

      it("should return an object with property 'modifiedCount' = 0", () => {
        expect(result).toHaveProperty("modifiedCount", 0);
      });
    });

    describe("Invalid LandlordId", () => {
      let payload = { fullname: "J Smith" };
      let result: any;
      let id = "GGGGG";
      const testMethod = async () => {
        result = await UpdateLandlord(id, payload);
      };

      it("should throw API Error", () => {
        expect(testMethod).rejects.toThrow(ApiError);
      });

      it("should have error message 'invalid-landlord-id'", () => {
        expect(testMethod).rejects.toThrow(ApiErrorCodes.INVALID_LANDLORD_ID);
      });
    });
  });
});
