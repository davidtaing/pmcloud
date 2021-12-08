import { Operation } from "express-openapi";

export const spec = {
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
};
const GET: Operation = (req: any, res: any, next: any) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

const POST: Operation = (req: any, res: any, next: any) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

GET.apiDoc = spec["/properties"].get;
POST.apiDoc = spec["/properties"].post;

const operations = () => ({
  GET,
  POST,
});

export default operations;
