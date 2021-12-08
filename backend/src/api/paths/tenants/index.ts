import { Operation } from "express-openapi";

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
};

const GET: Operation = (req: any, res: any, next: any) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

const POST: Operation = (req: any, res: any, next: any) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

GET.apiDoc = spec["/tenants"].get;
POST.apiDoc = spec["/tenants"].post;

const operations = () => ({
  GET,
  POST,
});

export default operations;
