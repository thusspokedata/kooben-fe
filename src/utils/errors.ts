// Define error interfaces
interface AppError {
  statusCode: number;
  message: string;
}

interface ApiErrorResponse {
  response?: {
    status?: number;
    statusText?: string;
  };
  message?: string;
}

const createError = (statusCode: number, message: string): AppError => ({
  statusCode,
  message,
});

export const BadRequest = (message: string): AppError => createError(400, message);
export const Unauthorized = (message: string): AppError => createError(401, message);
export const Forbidden = (message: string): AppError => createError(403, message);
export const NotFound = (message: string): AppError => createError(404, message);
export const InternalServerError = (message = 'Internal Server Error'): AppError =>
  createError(500, message);

export const errorHandler = (error: unknown): AppError => {
  // If it's already our AppError type
  if (error && typeof error === 'object' && 'statusCode' in error && 'message' in error) {
    return error as AppError;
  }

  // If it's an API response error
  const apiError = error as ApiErrorResponse;
  if (apiError.response && apiError.response.status) {
    return createError(apiError.response.status, apiError.response.statusText || 'API Error');
  }

  // Default case - internal server error
  return InternalServerError(
    typeof error === 'object' && error && 'message' in error && typeof error.message === 'string'
      ? error.message
      : 'Unknown error'
  );
};
