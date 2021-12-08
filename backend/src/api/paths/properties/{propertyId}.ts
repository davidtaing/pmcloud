import { Operation } from "express-openapi";

export const spec = {
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
};
const GET: Operation = (req: any, res: any, next: any) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

const PATCH: Operation = (req: any, res: any, next: any) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

GET.apiDoc = spec["/properties/{propertyId}"].get;
PATCH.apiDoc = spec["/properties/{propertyId}"].patch;

const operations = () => ({
  GET,
  PATCH,
});

export default operations;
