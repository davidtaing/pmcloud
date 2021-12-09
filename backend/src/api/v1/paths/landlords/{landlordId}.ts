import { Operation } from "express-openapi";

export const spec = {
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
};

const GET: Operation = (req: any, res: any, next: any) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

const PATCH: Operation = (req: any, res: any, next: any) => {
  res.status(501).json({ message: "Not Yet Implemented" });
};

GET.apiDoc = spec["/landlords/{landlordId}"].get;
PATCH.apiDoc = spec["/landlords/{landlordId}"].patch;

const operations = () => ({
  GET,
  PATCH,
});

export default operations;
