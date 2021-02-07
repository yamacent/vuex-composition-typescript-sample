import { User } from '@/common'
import { MutationTree } from 'vuex'
import { State } from './state'

export type Mutations = {
  setUser(state: State, payload: User): void
  resetUser(state: State): void
}

export const mutations: MutationTree<State> & Mutations = {
  setUser(state, payload) {
    state.user = payload
  },
  resetUser(state) {
    state.user = null
  }
}
