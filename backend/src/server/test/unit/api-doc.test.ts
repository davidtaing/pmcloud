import apiDoc, { paths } from "../../api/v1/api-doc";

/**
 * @group unit
 */
describe("OpenAPI apiDoc", () => {
  describe("apiDoc", () => {
    test("apiDoc.paths should be an empty object", () => {
      expect(apiDoc).toHaveProperty("paths", {});
    });
  });

  describe("exported paths object", () => {
    test("exported paths object should not be an empty object", () => {
      expect(paths).not.toEqual({});
    });
  });
});
