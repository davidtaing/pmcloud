import operations from "../../../api/v1/paths/landlords";

const methods = operations();

/**
 * @group unit
 * Will break on changes to the API
 * i.e. when new methods are added to /landlords path
 */
describe("/landlords Path Object", () => {
  it("should have GET method", () => {
    expect(methods).toHaveProperty("GET");
  });

  it("should have POST method", () => {
    expect(methods).toHaveProperty("POST");
  });

  it("should not have DELETE method", () => {
    expect(methods).not.toHaveProperty("DELETE");
  });

  it("should not have PUT method", () => {
    expect(methods).not.toHaveProperty("PUT");
  });

  it("should not have PATCH method", () => {
    expect(methods).not.toHaveProperty("PATCH");
  });
});
