import { endpoint, request, response, body, pathParams } from "@airtasker/spot";

@endpoint({
  method: "GET",
  path: "/landlords",
  tags: ["Landlords"],
})
class GetLandlords {
  @response({ status: 200 })
  successfulResponse(@body body: LandlordResponse) {}
  @response({ status: 403 })
  forbiddenResponse(@body body: ErrorBody) {}
  @response({ status: 500 })
  internalServerErrorResponse(@body body: ErrorBody) {}
}

@endpoint({
  method: "GET",
  path: "/landlords/:id",
  tags: ["Landlords"],
})
class GetLandlordById {
  @request
  request(@pathParams pathParams: { id: String }) {}

  @response({ status: 200 })
  successfulResponse(@body body: LandlordListResponse) {}
  @response({ status: 403 })
  forbiddenResponse(@body body: ErrorBody) {}
  @response({ status: 500 })
  internalServerErrorResponse(@body body: ErrorBody) {}
}

@endpoint({
  method: "POST",
  path: "/landlords",
  tags: ["Landlords"],
})
class CreateLandlord {
  @request
  request(@body body: CreateLandlordRequest) {}

  @response({ status: 200 })
  successfulResponse(@body body: LandlordResponse) {}
  @response({ status: 400 })
  badRequestResponse(@body body: ErrorBody) {}
  @response({ status: 403 })
  forbiddenResponse(@body body: ErrorBody) {}
  @response({ status: 500 })
  internalServerErrorResponse(@body body: ErrorBody) {}
}

@endpoint({
  method: "PATCH",
  path: "/landlords/:id",
  tags: ["Landlords"],
})
class UpdateLandlord {
  @request
  request(@pathParams pathParams: { id: String }, @body body: PatchLandlord) {}

  @response({ status: 200 })
  successfulResponse(@body body: LandlordListResponse) {}
  @response({ status: 400 })
  badRequestResponse(@body body: ErrorBody) {}
  @response({ status: 403 })
  forbiddenResponse(@body body: ErrorBody) {}
  @response({ status: 500 })
  internalServerErrorResponse(@body body: ErrorBody) {}
}

interface Landlord {
  fullname: String;
  phone: String;
  mobile: String;
  email: String;
  addressLn1: String;
  addressLn2: String;
}

interface PatchLandlord {
  fullname?: String;
  phone?: String;
  mobile?: String;
  email?: String;
  addressLn1?: String;
  addressLn2?: String;
}

interface ErrorBody {
  message: String;
}

type CreateLandlordRequest = Landlord;
type LandlordResponse = Landlord;
type LandlordListResponse = Array<Landlord>;
