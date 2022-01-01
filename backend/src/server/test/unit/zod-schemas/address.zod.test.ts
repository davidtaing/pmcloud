import AddressZodSchema from "../../../api/v1/schemas/zod/address.zod";

/**
 * @group unit
 */
describe("AddressZodSchema", () => {
  describe("Valid Addresses", () => {
    test("With AddressLn1", async () => {
      const testAddress = {
        addressLn1: "Shop 1",
        addressLn2: "1/999 George St",
        suburb: "Sydney",
        state: "NSW",
        postcode: "2000",
      };

      let result = await AddressZodSchema.safeParseAsync(testAddress);

      expect(result).toHaveProperty("success", true);
    });

    test("Without AddressLn1", async () => {
      const testAddress = {
        addressLn2: "1/999 George St",
        suburb: "Sydney",
        state: "NSW",
        postcode: "2000",
      };

      let result = await AddressZodSchema.safeParseAsync(testAddress);

      expect(result).toHaveProperty("success", true);
    });
  });

  describe("Invalid Addresses", () => {
    test("Missing State", async () => {
      const testAddress = {
        addressLn2: "1/999 George St",
        suburb: "Sydney",
        postcode: "2000",
      };

      let result = await AddressZodSchema.safeParseAsync(testAddress);

      expect(result).toHaveProperty("success", false);
    });

    test("Invalid Postcode", async () => {
      const testAddress = {
        addressLn2: "1/999 George St",
        suburb: "Sydney",
        state: "NSW",
        postcode: "20001",
      };

      let result = await AddressZodSchema.safeParseAsync(testAddress);

      expect(result).toHaveProperty("success", false);
    });
  });
});
