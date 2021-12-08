import { Operation } from "express-openapi";

const GET: Operation = (req: any, res: any, next: any) => {
  res.status(200).json({ message: "hello world" });
};

GET.apiDoc = {
  description: "A description for retrieving a user.",
  operationId: "getUser",
  // parameters for this operation
  responses: {
    "200": {
      description: "hello",
      content: {
        "application/json": {},
      },
    },
  },
};

const operations = () => ({
  GET,
});

export default operations;
