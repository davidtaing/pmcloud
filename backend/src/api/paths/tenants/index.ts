export const spec = {
  "/tenants": {
    get: {
      tags: ["tenants"],
      summary: "Gets all tenants",
      description: "Returns all tenants",
      operationId: "getAllTenants",
      responses: {
        "200": {
          description: "Responds with array of Tenants",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/Tenant",
                },
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
    post: {
      tags: ["tenants"],
      summary: "Adds new tenants",
      description: "Adds new tenants to database",
      operationId: "addTenants",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Tenant",
            },
          },
        },
      },
      responses: {
        "201": {
          description: "Successfully added tenants to database",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/Tenant",
                },
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
  },
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
