const createError = (statusCode: number, message: string) => ({
  statusCode,
  message,
});

export const BadRequest = (message: string) => createError(400, message);
export const Unauthorized = (message: string) => createError(401, message);
export const Forbidden = (message: string) => createError(403, message);
export const NotFound = (message: string) => createError(404, message);
export const InternalServerError = (message = 'Internal Server Error') => createError(500, message);


export const errorHandler = (error: any) => {
  if (error && error.statusCode) {
    return error;
  }
  return InternalServerError(error.message || 'Unknown error');
};
