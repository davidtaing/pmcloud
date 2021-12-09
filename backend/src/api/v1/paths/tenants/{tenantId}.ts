import { Operation } from "express-openapi";

export const spec = {
  "/tenants/{tenantId}": {
    get: {
      tags: ["tenants"],
      summary: "Gets tenants by ID",
      description: "Finds and returns tenants by ID",
      operationId: "getTenantByID",
      parameters: [
        {
          name: "tenantId",
          in: "path",
          description: "Tenant ID",
          required: true,
          style: "simple",
          explode: false,
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        "200": {
          description: "Responds with Tenant object",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Tenant",
              },
            },
          },
        },
        "400": {
          description: "Bad Request",
        },
        "403": {
          description: "Forbidden",
        },
        "500": {
          description: "Internal Server Error",
        },
      },
    },
    patch: {
      tags: ["tenants"],
      summary: "Updates tenant details",
      description: "Updates tenant details",
      operationId: "updateTenant",
      parameters: [
        {
          name: "tenantId",
          in: "path",
          description: "Tenant ID",
          required: true,
          style: "simple",
          explode: false,
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        "200": {
          description: "Responds with updated Tenant object",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Tenant",
              },
            },
          },
        },
        "403": {
          description: "Forbidden",
        },
        "500": {
          description: "Internal Server Error",
        },
      },
    },
  },
};

const GET: Operation = (req: any, res: any, next: any) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

const PATCH: Operation = (req: any, res: any, next: any) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

GET.apiDoc = spec["/tenants/{tenantId}"].get;
PATCH.apiDoc = spec["/tenants/{tenantId}"].patch;

const operations = () => ({
  GET,
  PATCH,
});

export default operations;
