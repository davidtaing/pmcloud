import { endpoint, request, response, body, pathParams } from "@airtasker/spot";

@endpoint({
  method: "GET",
  path: "/properties",
  tags: ["Properties"],
})
class GetProperties {
  @response({ status: 200 })
  successfulResponse(@body body: PropertyResponse) {}
  @response({ status: 403 })
  forbiddenResponse(@body body: ErrorBody) {}
  @response({ status: 500 })
  internalServerErrorResponse(@body body: ErrorBody) {}
}

@endpoint({
  method: "GET",
  path: "/properties/:propertyId",
  tags: ["Properties"],
})
class GetPropertyById {
  @request
  request(@pathParams pathParams: { propertyId: string }) {}

  @response({ status: 200 })
  successfulResponse(@body body: PropertyListResponse) {}
  @response({ status: 403 })
  forbiddenResponse(@body body: ErrorBody) {}
  @response({ status: 500 })
  internalServerErrorResponse(@body body: ErrorBody) {}
}

@endpoint({
  method: "POST",
  path: "/properties",
  tags: ["Properties"],
})
class CreateProperty {
  @request
  request(@body body: CreatePropertyRequest) {}

  @response({ status: 200 })
  successfulResponse(@body body: PropertyResponse) {}
  @response({ status: 400 })
  badRequestResponse(@body body: ErrorBody) {}
  @response({ status: 403 })
  forbiddenResponse(@body body: ErrorBody) {}
  @response({ status: 500 })
  internalServerErrorResponse(@body body: ErrorBody) {}
}

@endpoint({
  method: "PATCH",
  path: "/properties/:propertyId",
  tags: ["Properties"],
})
class UpdateProperty {
  @request
  request(
    @pathParams pathParams: { propertyId: string },
    @body body: PatchPropertyRequest
  ) {}

  @response({ status: 200 })
  successfulResponse(@body body: PropertyListResponse) {}
  @response({ status: 400 })
  badRequestResponse(@body body: ErrorBody) {}
  @response({ status: 403 })
  forbiddenResponse(@body body: ErrorBody) {}
  @response({ status: 500 })
  internalServerErrorResponse(@body body: ErrorBody) {}
}

// TODO: Add other props like Landlord, Tenant & Payments
interface Property {
  addressLn1: string;
  addressLn2: string;
}

interface PatchProperty {
  addressLn1?: string;
  addressLn2?: string;
}

interface ErrorBody {
  message: string;
}

type CreatePropertyRequest = Property;
type PatchPropertyRequest = PatchProperty;
type PropertyResponse = Property;
type PropertyListResponse = Array<Property>;
