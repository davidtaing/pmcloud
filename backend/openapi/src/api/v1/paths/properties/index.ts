import { endpoint, request, response, body, pathParams } from "@airtasker/spot";
import { ErrorBody, Property, PatchProperty } from "../../components/schemas";

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

type CreatePropertyRequest = Property;
type PatchPropertyRequest = PatchProperty;
type PropertyResponse = Property;
type PropertyListResponse = Array<Property>;
