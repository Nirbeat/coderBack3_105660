import ErrorsEnum from '../errors/enum.js';

const HTTP_STATUS_BY_CODE = {
  [ErrorsEnum.ROUTING_ERROR]: 404,
  [ErrorsEnum.INVALID_TYPE_ERROR]: 400,
  [ErrorsEnum.DATABASE_ERROR]: 500,
  [ErrorsEnum.NOT_FOUND_ERROR]: 404,
  [ErrorsEnum.AUTHENTICATION_ERROR]: 401,
  [ErrorsEnum.AUTHORIZATION_ERROR]: 403,
  [ErrorsEnum.INTERNAL_SERVER_ERROR]: 500,
};

const DEFAULT_STATUS = 500;
const DEFAULT_MESSAGE = 'Internal Server Error';

function errorHandler(err, req, res, next) {
  console.error(
    `[ErrorHandler] ${err?.name ?? 'UnknownError'}: ${err?.message ?? 'No message available'}`,
  );
  console.error(err?.stack ?? 'No stack trace available');

  const status = HTTP_STATUS_BY_CODE[err?.code] ?? DEFAULT_STATUS;
  if (status === DEFAULT_STATUS) {
    return res.status(status).send({
      status: 'error',
      error: 'internalServerError',
      message: DEFAULT_MESSAGE,
    });
  }

  res.status(status).send({
    status: 'error',
    error: err?.code ?? 'unknownError',
    message: err?.message ?? DEFAULT_MESSAGE,
  });
}

export default errorHandler;
