export const api = <T>(response: T): Promise<T> =>
  new Promise(resolve => setTimeout(() => resolve(response), 300))
