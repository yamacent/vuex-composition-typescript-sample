import { MutationTree } from 'vuex'
import { State } from './state'

export type Mutations<S = State> = {
  setCounter(state: S, payload: number): void
  doubleCounter(state: S): void
}

export const mutations: MutationTree<State> & Mutations = {
  setCounter(state, payload: number) {
    state.counter = payload
  },
  doubleCounter(state): void {
    state.counter *= 2
  }
}
