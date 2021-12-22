class ApiError extends Error {
  name = "ApiError";
  code: string;
  date: Date;

  constructor(code: string, ...params: any[]) {
    super(...params);
    this.code = code;
    this.message = code;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }

    this.date = new Date();
  }
}

export default ApiError;
