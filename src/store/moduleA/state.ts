import { Book } from '@/common'

export type State = {
  book: Book | null
}

export const state: State = {
  book: null
}
