export const api = <T>(response: T): Promise<T> =>
  new Promise(resolve => setTimeout(() => resolve(response), 300))

export interface User {
  id: string
  name: string
}

export interface Book {
  id: string
  title: string
}

export interface Comment {
  id: string
  body: string
  bookId: string
}
