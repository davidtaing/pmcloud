// ./api-v1/api-doc.js
const apiDoc = {
  openapi: "3.0.0",
  info: {
    title: "pmcloud Backend",
    description: "pmcloud Backend API",
    contact: {
      email: "adavidtaing@gmail.com",
    },
    license: {
      name: "Mozilla Public License 2.0",
      url: "https://www.mozilla.org/en-US/MPL/2.0/",
    },
    version: "1.0.0",
  },
  servers: [
    {
      url: "https://virtserver.swaggerhub.com/davidtaing/pmcloud/1.0.0",
      description: "SwaggerHub API Auto Mocking",
    },
  ],
  tags: [
    {
      name: "agents",
      description: "Operations Realated to Agents",
    },
    {
      name: "landlords",
      description: "Operations Realated to Properties",
    },
    {
      name: "tenants",
      description: "Operations Realated to Tenants",
    },
    {
      name: "properties",
      description: "Operations Related to Rental Properties",
    },
  ],
  paths: {
    "/landlords": {
      get: {
        tags: ["landlords"],
        summary: "Gets all landlords",
        description: "Returns all landlords",
        operationId: "getAllLandlords",
        responses: {
          "200": {
            description: "Responds with array of Landlords",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Landlord",
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
        tags: ["landlords"],
        summary: "Adds new landlords",
        description: "Adds new landlords to database",
        operationId: "addLandlords",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Landlord",
              },
            },
          },
        },
        responses: {
          "201": {
            description: "Successfully adds landlords to database",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Landlord",
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
    "/landlords/{landlordId}": {
      get: {
        tags: ["landlords"],
        summary: "Gets landlord by ID",
        description: "Finds and returns landlord by ID",
        operationId: "getLandlordByID",
        parameters: [
          {
            name: "landlordId",
            in: "path",
            description: "Landlord ID",
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
            description: "Responds with Landlord object",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Landlord",
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
        tags: ["landlords"],
        summary: "Updates landlord details",
        description: "Updates landlord details",
        operationId: "updateLandlord",
        parameters: [
          {
            name: "landlordId",
            in: "path",
            description: "Landlord ID",
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
            description: "Responds with updated Landlord object",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Landlord",
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
    "/properties": {
      get: {
        tags: ["properties"],
        summary: "Gets all properties",
        description: "Returns all properties",
        operationId: "getAllProperties",
        responses: {
          "200": {
            description: "Responds with array of Properties",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Property",
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
        tags: ["properties"],
        summary: "Adds new properties",
        description: "Adds new properties to database",
        operationId: "addProperty",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Property",
              },
            },
          },
        },
        responses: {
          "201": {
            description: "Successfully added properties to database",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Property",
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
    "/properties/{propertyId}": {
      get: {
        tags: ["properties"],
        summary: "Gets property by ID",
        description: "Finds and returns property by ID",
        operationId: "getPropertyByID",
        parameters: [
          {
            name: "propertyId",
            in: "path",
            description: "Property ID",
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
            description: "Responds with Property object",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Property",
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
        tags: ["properties"],
        summary: "Updates property details",
        description: "Updates property details",
        operationId: "updateProperty",
        parameters: [
          {
            name: "propertyId",
            in: "path",
            description: "Property ID",
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
            description: "Responds with updated Property object",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Property",
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
  },
  components: {
    schemas: {
      Landlord: {
        type: "object",
        properties: {
          id: {
            type: "string",
          },
          fullName: {
            type: "string",
          },
          status: {
            type: "string",
          },
          phone: {
            type: "string",
          },
          mobile: {
            type: "string",
          },
          email: {
            type: "string",
            format: "email",
          },
          addressLn1: {
            type: "string",
          },
          addressLn2: {
            type: "string",
          },
        },
      },
      Tenant: {
        type: "object",
        properties: {
          id: {
            type: "string",
          },
          fullName: {
            type: "string",
          },
          status: {
            type: "string",
          },
          phone: {
            type: "string",
          },
          mobile: {
            type: "string",
          },
          email: {
            type: "string",
            format: "email",
          },
        },
      },
      Property: {
        type: "object",
        properties: {
          id: {
            type: "string",
          },
          addressLn1: {
            type: "string",
          },
          addressLn2: {
            type: "string",
          },
          landlord: {
            type: "object",
          },
          tenant: {
            type: "object",
          },
          previousTenants: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Tenant",
            },
          },
        },
      },
    },
  },
};

export default apiDoc;
