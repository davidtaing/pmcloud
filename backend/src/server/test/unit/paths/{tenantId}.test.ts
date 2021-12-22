import operations from "../../../api/v1/paths/tenants/{tenantId}";

const methods = operations();

/**
 * @group unit
 * Will break on changes to the API
 * i.e. when new methods are added to /tenants/{tenantId} path
 */
describe("/tenants/{tenantId} Path Object", () => {
  it("should have GET method", () => {
    expect(methods).toHaveProperty("GET");
  });

  it("should have PATCH method", () => {
    expect(methods).toHaveProperty("PATCH");
  });

  it("should not have POST method", () => {
    expect(methods).not.toHaveProperty("POST");
  });

  it("should not have DELETE method", () => {
    expect(methods).not.toHaveProperty("DELETE");
  });

  it("should not have PUT method", () => {
    expect(methods).not.toHaveProperty("PUT");
  });
});
