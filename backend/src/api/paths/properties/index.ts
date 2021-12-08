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
