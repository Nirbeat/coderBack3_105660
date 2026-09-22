export default class CustomError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
  }

  static createError({ name = 'Error', cause, message, code } = {}) {
    const error = new CustomError(message, cause);
    error.name = name;
    error.code = code;
    return error;
  }
}
