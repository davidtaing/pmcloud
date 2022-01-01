import IdZodSchema from "../../../api/v1/schemas/zod/id.zod";

/**
 * @group unit
 */
describe("IdZodSchema Validation", () => {
  describe("Valid ObjectId", () => {
    test("passes validation", async () => {
      const testInput = "61d055fbc13cd60a81ec4cc7";

      const result = await IdZodSchema.safeParseAsync(testInput);

      expect(result).toHaveProperty("success", true);
    });
  });

  describe("Invalid ObjectId", () => {
    describe("Empty String", () => {
      test("fails validation", async () => {
        const testInput = "";

        const result = await IdZodSchema.safeParseAsync(testInput);

        expect(result).toHaveProperty("success", false);
      });
    });

    describe("10 Char String", () => {
      test("fails valiation", async () => {
        const testInput = "1234567890";

        IdZodSchema.safeParseAsync(testInput);
        const result = await IdZodSchema.safeParseAsync(testInput);

        expect(result).toHaveProperty("success", false);
      });
    });

    describe("Non Hex String", () => {
      test("fails valiation", async () => {
        const testInput = "NONHEX123456789012345678";

        IdZodSchema.safeParseAsync(testInput);
        const result = await IdZodSchema.safeParseAsync(testInput);

        expect(result).toHaveProperty("success", false);
      });
    });
  });
});
