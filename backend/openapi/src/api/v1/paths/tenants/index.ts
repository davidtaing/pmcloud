import { endpoint, request, response, body, pathParams } from "@airtasker/spot";
import { ErrorBody, Tenant, PatchTenant } from "../../components/schemas";

@endpoint({
  method: "GET",
  path: "/tenants",
  tags: ["Tenants"],
})
class GetTenants {
  @response({ status: 200 })
  successfulResponse(@body body: TenantResponse) {}
  @response({ status: 403 })
  forbiddenResponse(@body body: ErrorBody) {}
  @response({ status: 500 })
  internalServerErrorResponse(@body body: ErrorBody) {}
}

@endpoint({
  method: "GET",
  path: "/tenants/:tenantId",
  tags: ["Tenants"],
})
class GetTenantById {
  @request
  request(@pathParams pathParams: { tenantId: string }) {}

  @response({ status: 200 })
  successfulResponse(@body body: TenantListResponse) {}
  @response({ status: 403 })
  forbiddenResponse(@body body: ErrorBody) {}
  @response({ status: 500 })
  internalServerErrorResponse(@body body: ErrorBody) {}
}

@endpoint({
  method: "POST",
  path: "/tenants",
  tags: ["Tenants"],
})
class CreateTenant {
  @request
  request(@body body: CreateTenantRequest) {}

  @response({ status: 200 })
  successfulResponse(@body body: TenantResponse) {}
  @response({ status: 400 })
  badRequestResponse(@body body: ErrorBody) {}
  @response({ status: 403 })
  forbiddenResponse(@body body: ErrorBody) {}
  @response({ status: 500 })
  internalServerErrorResponse(@body body: ErrorBody) {}
}

@endpoint({
  method: "PATCH",
  path: "/tenants/:tenantId",
  tags: ["Tenants"],
})
class UpdateTenants {
  @request
  request(
    @pathParams pathParams: { tenantId: string },
    @body body: PatchTenantRequest
  ) {}

  @response({ status: 200 })
  successfulResponse(@body body: TenantListResponse) {}
  @response({ status: 400 })
  badRequestResponse(@body body: ErrorBody) {}
  @response({ status: 403 })
  forbiddenResponse(@body body: ErrorBody) {}
  @response({ status: 500 })
  internalServerErrorResponse(@body body: ErrorBody) {}
}

type CreateTenantRequest = Tenant;
type PatchTenantRequest = PatchTenant;
type TenantResponse = Tenant;
type TenantListResponse = Array<Tenant>;
