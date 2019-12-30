export interface TypedResponse<T = any> extends Response {
  json<P = T>(): Promise<P>
}

export function typedFetch<T extends any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<TypedResponse<T>> {
  return fetch(input, init);
}
