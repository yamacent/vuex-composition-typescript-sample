import { MutationTree } from 'vuex'
import { State } from './state'

export type Mutations<S = State> = {
  setCount(state: S, payload: number): void
}

export const mutations: MutationTree<State> & Mutations = {
  setCount(state, payload) {
    state.count = payload
  }
}
