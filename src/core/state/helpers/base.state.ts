export class BaseState<T> {
  public data?: T;
  public error?: any;
  public loading?: boolean;

  constructor(
  ) {
  }
}
