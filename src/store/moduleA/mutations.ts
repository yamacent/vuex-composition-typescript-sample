import { Book } from '@/common'
import { MutationTree } from 'vuex'
import { State } from './state'

export type Mutations = {
  setBook(state: State, payload: Book): void
  resetBook(state: State): void
}

export const mutations: MutationTree<State> & Mutations = {
  setBook(state, payload) {
    state.book = payload
  },
  resetBook(state) {
    state.book = null
  }
}
