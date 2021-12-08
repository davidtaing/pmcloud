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
