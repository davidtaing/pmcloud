import {
  GetLandlord,
  GetLandlords,
  CreateLandlord,
  UpdateLandlord,
} from "../../../api/v1/services/landlords.service";
import {
  connectTestDatabase,
  clearTestDatabase,
  closeTestDatabase,
} from "../../../testDb";

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
});
