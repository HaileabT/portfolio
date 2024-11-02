export class AppError extends Error {
  public status: number = 404;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}
