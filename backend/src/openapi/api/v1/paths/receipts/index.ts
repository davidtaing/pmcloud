import { endpoint, request, response, body, pathParams } from "@airtasker/spot";
import { ErrorBody, Receipt } from "../../components/schemas";

@endpoint({
  method: "GET",
  path: "/receipts",
  tags: ["Receipts"],
})
class GetReceipts {
  @response({ status: 200 })
  successfulResponse(@body body: ReceiptResponse) {}
  @response({ status: 403 })
  forbiddenResponse(@body body: ErrorBody) {}
  @response({ status: 500 })
  internalServerErrorResponse(@body body: ErrorBody) {}
}

@endpoint({
  method: "GET",
  path: "/receipts/:receiptId",
  tags: ["Receipts"],
})
class GetReceiptById {
  @request
  request(@pathParams pathParams: { receiptId: string }) {}

  @response({ status: 200 })
  successfulResponse(@body body: ReceiptListResponse) {}
  @response({ status: 403 })
  forbiddenResponse(@body body: ErrorBody) {}
  @response({ status: 500 })
  internalServerErrorResponse(@body body: ErrorBody) {}
}

@endpoint({
  method: "POST",
  path: "/receipts",
  tags: ["Receipts"],
})
class CreateReceipt {
  @request
  request(@body body: CreateReceiptRequest) {}

  @response({ status: 201 })
  successfulResponse(@body body: ReceiptResponse) {}
  @response({ status: 400 })
  badRequestResponse(@body body: ErrorBody) {}
  @response({ status: 403 })
  forbiddenResponse(@body body: ErrorBody) {}
  @response({ status: 500 })
  internalServerErrorResponse(@body body: ErrorBody) {}
}

type CreateReceiptRequest = Receipt;
type ReceiptResponse = Receipt;
type ReceiptListResponse = Array<Receipt>;
