import {
  connectTestDatabase,
  clearTestDatabase,
  closeTestDatabase,
} from "../../../testDb";
import {
  GetLandlord,
  GetLandlords,
  CreateLandlord,
  UpdateLandlord,
} from "../../../api/v1/services/landlords.service";

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
      payload = {
        fullname: "John Smith",
        mobile: "0491570006",
        email: "davidtaing@fake.com",
        addressLn1: "123 Fake St",
        addressLn2: "Sydney NSW 2000",
      };
      result = await CreateLandlord(payload);
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
});
