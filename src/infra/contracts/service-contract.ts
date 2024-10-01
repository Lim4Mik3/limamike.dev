type ServiceErrorResponse = {
  message?: string;
  err: unknown;
}

export type ServiceResponse<T> = [
  data: Awaited<T>,
  err: null
] | [
  data: null,
  err: ServiceErrorResponse
];