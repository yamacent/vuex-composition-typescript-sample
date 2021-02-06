import { MutationTree } from 'vuex'
import { State } from './state'

export type Mutations<S = State> = {
  setFoo(state: S, payload: string): void
}

export const mutations: MutationTree<State> & Mutations = {
  setFoo(state, payload) {
    state.foo = payload
  }
}
