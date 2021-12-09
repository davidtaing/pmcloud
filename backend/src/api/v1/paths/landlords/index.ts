import { Operation } from "express-openapi";

export const spec = {
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
};

const GET: Operation = (req: any, res: any, next: any) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

const POST: Operation = (req: any, res: any, next: any) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

GET.apiDoc = spec["/landlords"].get;
POST.apiDoc = spec["/landlords"].post;

const operations = () => ({
  GET,
  POST,
});

export default operations;
