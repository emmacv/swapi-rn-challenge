export interface Result<R extends unknown> {
  count:    number;
  next:     string;
  previous: null;
  results:  R[];
}
