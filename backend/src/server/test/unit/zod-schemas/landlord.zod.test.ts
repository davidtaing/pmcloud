import LandlordModel from "../../../api/v1/models/landlord.model";
import LandlordZod from "../../../api/v1/schemas/zod/landlord.zod";

/**
 * @group unit
 */
describe("LandlordZod Schemas", () => {
  test("Valid Landlord Object", async () => {
    const testInput = {
      propertyId: "61d055fbc13cd60a81ec4cc7",
      fullname: "John Citizen",
      phone: "0255500000",
      mobile: "0491570006",
      email: "email@email.com",
      address: {
        // Valid address copied from address.zod.test.ts
        addressLn2: "1/999 George St",
        suburb: "Sydney",
        state: "NSW",
        postcode: "2000",
      },
    };

    const result = await LandlordZod.LandlordSchema.safeParseAsync(testInput);
    console.log(result);
    expect(result).toHaveProperty("success", true);
  });
});