export default class AppError extends Error {
  message: string;
  status: string;
  isOperational: boolean;
  constructor(message: string, public statusCode = 500) {
    super(message);
    this.message = message;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}
