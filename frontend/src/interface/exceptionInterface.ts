export interface KnownError {
  error: {
    status_code: number;
    message: string;
    details: Array<string>;
  };
}
