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
  paths: {},
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
